# Auto CSS Selector
Una extensión para Visual Studio Code que automatiza la creación de selectores CSS cuando asignas clases o IDs en tus archivos HTML.
![VS Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=for-the-badge)
## ✨ Características
- **Detección automática** de clases e IDs en archivos HTML
- **Generación inteligente** de selectores CSS
- **Sincronización en tiempo real** entre HTML y CSS
- **Configuración personalizable** para adaptarse a tu flujo de trabajo
- **Debounce integrado** para optimizar el rendimiento
## 🚀 Instalación
### Desde el Marketplace de VS Code (Próximamente)
1. Abre VS Code
2. Ve a la pestaña Extensiones (Ctrl+Shift+X)
3. Busca "Auto CSS Selector"
4. Haz clic en Instalar
### Instalación manual
1. Descarga el archivo `.vsix` más reciente de la [página de releases](https://github.com/josemejias081/Auto-CSS-Selector/releases)
2. En VS Code, ve a Extensiones (Ctrl+Shift+X)
3. Haz clic en los tres puntos "..." y selecciona "Install from VSIX..."
4. Selecciona el archivo descargado
## 📖 Uso
1. Crea o abre un archivo HTML
2. Añade clases o IDs a tus elementos:
   ```html
   <div class="mi-clase" id="mi-id"></div>
   ```
3. Guarda el archivo (Ctrl+S)
4. La extensión automáticamente agregará los selectores correspondientes a tu archivo CSS vinculado:
   ```css
   .mi-clase {
     /* Estilos para mi-clase */
   }
   
   #mi-id {
     /* Estilos para #mi-id */
   }
   ```

## Beneficios de usar Auto CSS Selector:
### 1. Mayor productividad:
- Permite escribir código más rápido y eficiente, ahorrando tiempo y esfuerzo. 
### 2. Reducción de errores:
- Minimiza la posibilidad de errores tipográficos. 
### 3. Mayor legibilidad:
- Facilita la creación de estructuras de código de manera más clara y concisa. 

## ⚙️ Configuración
La extensión ofrece las siguientes opciones de configuración:
| Propiedad | Descripción | Valor por defecto |
|-----------|-------------|-------------------|
| `autoCssSelector.cssFile` | Nombre del archivo CSS por defecto si no se detecta en el HTML | `styles.css` |
| `autoCssSelector.debounceDelay` | Tiempo de espera después de escribir antes de procesar (ms) | `1000` |
Para modificar estas configuraciones:
1. Abre la configuración de VS Code (Ctrl+,)
2. Busca "Auto CSS Selector"
3. Modifica los valores según tus preferencias
## 🛠 Desarrollo
### Prerrequisitos
- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) (generalmente incluido con Node.js)
- [Visual Studio Code](https://code.visualstudio.com/)
### Configuración del entorno
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/auto-css-selector.git
   cd auto-css-selector
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Compila la extensión:
   ```bash
   npm run compile
   ```
4. Ejecuta la extensión en modo desarrollo:
   - Presiona F5 en VS Code
   - Se abrirá una nueva ventana con la extensión cargada
### Estructura del proyecto
```
auto-css-selector/
├── src/
│   └── extension.ts          # Código principal de la extensión
├── out/
│   └── extension.js          # Código compilado (generado)
├── package.json              # Manifest de la extensión
├── tsconfig.json             # Configuración de TypeScript
├── LICENSE                   # Licencia Apache 2.0
└── README.md                 # Este archivo
```
### Comandos disponibles
```bash
npm run compile          # Compila el TypeScript a JavaScript
npm run watch            # Compila en modo observador
npm run test             # Ejecuta las pruebas
npm run lint             # Ejecuta ESLint
npm run package          # Empaqueta la extensión para distribución
```
## 🤝 Contribución
¡Las contribuciones son siempre bienvenidas! Para contribuir:
1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request
### Guía de contribución
- Sigue las convenciones de código existentes
- Añade pruebas para nuevas funcionalidades
- Actualiza la documentación cuando sea necesario
- Asegúrate de que todas las pruebas pasen
## 📝 Registro de cambios
Consulta el [CHANGELOG.md](CHANGELOG.md) para ver el historial de cambios.
## ❓ Preguntas frecuentes

### **P: ¿La extensión funciona si estoy usando EMMET?**
- R: Sí, la extensión funciona tanto si agregas las .clases o #ids de manera manual o si usas emmet.

### **P: ¿La extensión funciona con preprocesadores CSS como SASS o LESS?**
- R: Sí, la extensión funciona con cualquier archivo CSS, independientemente del preprocesador utilizado.
### **P: ¿Qué pasa si tengo múltiples archivos CSS vinculados?**
- R: La extensión utilizará el primer archivo CSS que encuentre en el HTML.
### **P: ¿Puedo desactivar la extensión para proyectos específicos?**
- R: Sí, puedes deshabilitar la extensión por workspace en VS Code.
  
## 📄 Licencia
Este proyecto está bajo la Licencia Apache 2.0. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor
Creado por [José Mejias](https://www.youtube.com/@josemejiasdesarrolloweb)
## 🙏 Agradecimientos
- Equipo de VS Code por las excelentes APIs de extensión
- Comunidad de TypeScript por las herramientas de desarrollo
  
⭐ Si te gusta esta extensión, por favor considere darle una estrella en GitHub


# Changelog
Todos los cambios notables en este proyecto se documentarán en este archivo.
El formato está basado en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
## [0.0.1] - 21/08/2025
### Added
- Funcionalidad básica de detección de clases e IDs en HTML
- Generación automática de selectores CSS
- Configuración personalizable a través de VS Code settings
- Sistema de debounce para optimizar el rendimiento
  
