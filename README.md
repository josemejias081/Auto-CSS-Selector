# Auto CSS Selector
Extensión para VS Code que agrega automáticamente selectores CSS cuando asignas clases o IDs en HTML.
## Características
- Detecta automáticamente clases e IDs en archivos HTML
- Agrega los selectores correspondientes en el archivo CSS vinculado
- Soporte para múltiples clases en un mismo elemento
## Uso
1. Crea un archivo HTML con un enlace a un archivo CSS:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
2. Agrega clases o IDs a tus elementos HTML ya sea manual o usando EMMET:
   ```html
   <div class="mi-clase" id="mi-id"></div>
   ```
3. Guarda el archivo HTML y la extensión agregará automáticamente los selectores al CSS
## Configuración
- `autoCssSelector.cssFile`: Nombre del archivo CSS por defecto
- `autoCssSelector.debounceDelay`: Tiempo de espera antes de procesar (ms)
## Instalación
1. Descarga el archivo `.vsix` más reciente
2. En VS Code, ve a Extensiones > ... > Install from VSIX
3. Selecciona el archivo descargado

**Disfrutadecodear**
