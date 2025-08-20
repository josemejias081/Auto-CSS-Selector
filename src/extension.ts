import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

// Variable para el debounce
let debounceTimer: NodeJS.Timeout;

export function activate(context: vscode.ExtensionContext) {
    console.log('Extensión "Auto CSS Selector" activada');

    // Listener para cambios en documentos con debounce
    const disposable = vscode.workspace.onDidChangeTextDocument(event => {
        const document = event.document;
        if (document.languageId !== 'html') return;

        // Debounce para evitar procesamiento excesivo
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            processHtmlDocument(document);
        }, 1000); // Procesar después de 1 segundo de inactividad
    });

    context.subscriptions.push(disposable);
}

async function processHtmlDocument(document: vscode.TextDocument) {
    try {
        const htmlContent = document.getText();
        
        // Encontrar el archivo CSS enlazado
        const cssUri = await findLinkedCss(htmlContent, document.uri);
        if (!cssUri) {
            vscode.window.showWarningMessage('No se encontró enlace a CSS en el HTML.');
            return;
        }

        // Extraer clases e IDs del HTML usando regex (más eficiente que JSDOM)
        const { classes, ids } = extractClassesAndIds(htmlContent);
        
        // Verificar si el archivo CSS existe
        try {
            await vscode.workspace.fs.stat(cssUri);
        } catch {
            vscode.window.showWarningMessage(`El archivo CSS no existe: ${cssUri.fsPath}`);
            return;
        }

        // Abrir o leer el  archivo CSS
        const cssDoc = await vscode.workspace.openTextDocument(cssUri);
        const cssContent = cssDoc.getText();

        // Generar selectores nuevos que no existan en CSS
        const newSelectors = generateNewSelectors(classes, ids, cssContent);
        if (newSelectors.length === 0) return;

        // Agregar al final del CSS manejando mensajes de errores
        const edit = new vscode.WorkspaceEdit();
        const position = new vscode.Position(cssDoc.lineCount, 0);
        edit.insert(cssDoc.uri, position, '\n' + newSelectors.join('\n\n') + '\n');

        const success = await vscode.workspace.applyEdit(edit);
        if (success) {
            await cssDoc.save();
            vscode.window.showInformationMessage(`${newSelectors.length} selectores agregados a ${path.basename(cssUri.fsPath)}`);
        } else {
            vscode.window.showErrorMessage('Error al editar el CSS.');
        }
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error}`);
    }
}

async function findLinkedCss(htmlContent: string, htmlUri: vscode.Uri): Promise<vscode.Uri | null> {
    // Expresión regular mejorada para encontrar enlaces CSS
    const linkRegex = /<link\s+[^>]*rel=("|')stylesheet\1[^>]*href=("|')([^"']+)\2[^>]*>/gi;
    let match;
    
    while ((match = linkRegex.exec(htmlContent)) !== null) {
        const href = match[3];
        
        // Ignorar URLs absolutas
        if (href.startsWith('http') || href.startsWith('//')) {
            continue;
        }
        
        // Obtener la ruta del directorio del archivo HTML
        const htmlDir = vscode.Uri.file(path.dirname(htmlUri.fsPath));
        
        // Resolver la ruta relativa
        return vscode.Uri.joinPath(htmlDir, href);
    }
    
    return null;
}

function extractClassesAndIds(htmlContent: string): { classes: Set<string>, ids: Set<string> } {
    const classes = new Set<string>();
    const ids = new Set<string>();

    // Expresiones regulares para la lectura de comillas simples y comillas dobles
    const classRegex = /class=("|')([^"']+)\1/g;
    const idRegex = /id=("|')([^"']+)\1/g;

    let match;
    
    // Extraer clases
    while ((match = classRegex.exec(htmlContent)) !== null) {
        const classList = match[2].split(/\s+/);
        classList.forEach(cls => cls && classes.add(cls));
    }
    
    // Extraer IDs
    while ((match = idRegex.exec(htmlContent)) !== null) {
        const id = match[2].trim();
        id && ids.add(id);
    }

    return { classes, ids };
}

function generateNewSelectors(classes: Set<string>, ids: Set<string>, cssContent: string): string[] {
    const newSelectors: string[] = [];
    
    // Verificar clases
    for (const cls of classes) {
        // Verificar si la clase ya existe en el CSS
        const classRegex = new RegExp(`\\.${cls}\\b`);
        if (!classRegex.test(cssContent)) {
            newSelectors.push(`.${cls} {\n    /* Estilos para ${cls} */\n}`);
        }
    }
    
    // Verificar IDs
    for (const id of ids) {
        // Verificar si el ID ya existe en el CSS
        const idRegex = new RegExp(`#${id}\\b`);
        if (!idRegex.test(cssContent)) {
            newSelectors.push(`#${id} {\n    /* Estilos para #${id} */\n}`);
        }
    }
    
    return newSelectors;
}

export function deactivate() {
    console.log('Extensión "Auto CSS Selector" desactivada');
}