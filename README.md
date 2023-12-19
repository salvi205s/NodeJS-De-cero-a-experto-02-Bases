# 02 Bases de Node

Correr en Dev

```
npm run dev
```

Temas puntuales de la sección

Package.json:
Package.json: Es un archivo de configuración en proyectos de Node.js que describe el proyecto y sus dependencias. Contiene información como el nombre del proyecto, versión, scripts de ejecución, y las dependencias del proyecto.

Node Modules:
Node Modules: Son bloques de código reutilizables en Node.js. Cada archivo de Node.js se considera un módulo, y los módulos pueden exportar e importar funciones, objetos o variables para ser utilizados en otros archivos.

Scripts:
Scripts: En el contexto de package.json, los scripts son comandos predefinidos que pueden ejecutarse mediante el comando npm run. Estos scripts son configurados en la sección "scripts" de package.json y pueden utilizarse para realizar diversas tareas, como iniciar la aplicación, ejecutar pruebas, o realizar construcciones.
Importaciones y Exportaciones:
Importaciones y Exportaciones: En JavaScript (y en particular en ECMAScript 6 y versiones posteriores), las importaciones y exportaciones permiten la modularización del código. Puedes exportar funciones, objetos o variables de un módulo y luego importarlos en otro módulo.

Módulos:
Módulos: En el contexto de JavaScript, los módulos son piezas de código reutilizables que pueden ser importadas y utilizadas en otros archivos. Los módulos ayudan a organizar y modularizar el código.
Reforzamiento de JS:
Reforzamiento de JS: Se refiere a mejorar y fortalecer el conocimiento de JavaScript a través de la práctica y el estudio continuo. Esto puede incluir el aprendizaje de conceptos más avanzados, patrones de diseño, y buenas prácticas de programación en JavaScript.

Callbacks:
Callbacks: En JavaScript, un callback es una función que se pasa como argumento a otra función y se ejecuta después de que cierta operación ha finalizado. Es común en situaciones asíncronas, como la lectura de archivos o las solicitudes HTTP.
Arrow Functions:
Arrow Functions: Las funciones de flecha (=>) son una forma concisa de escribir funciones en JavaScript. Tienen una sintaxis más corta y lexico-scoping diferente en comparación con las funciones tradicionales.
Factory Functions:
Factory Functions: Son funciones que devuelven objetos. Estas funciones se utilizan para crear instancias de objetos con propiedades específicas y comportamientos compartidos.

Promises:
Promises: En JavaScript, las Promesas son objetos que representan el resultado eventual de una operación asíncrona. Permiten trabajar con operaciones asíncronas de manera más estructurada y manejar casos de éxito o error.

Async Await:
Async Await: Es una característica de JavaScript introducida en ECMAScript 2017 que simplifica la escritura de código asíncrono. async se utiliza para declarar una función asincrónica, y await se utiliza para esperar a que una promesa se resuelva antes de continuar la ejecución.
Peticiones Http básicas:
Peticiones Http básicas: Hacer solicitudes HTTP básicas implica utilizar métodos como GET, POST, PUT, o DELETE para interactuar con recursos en un servidor. Esto se puede lograr en JavaScript mediante el uso de la API fetch o bibliotecas
como Axios.

Dependencias de Producción y Desarrollo:
Dependencias de Producción y Desarrollo: En package.json, las dependencias de producción son las que son esenciales para la ejecución de la aplicación en un entorno de producción, mientras que las dependencias de desarrollo son aquellas necesarias solo durante el desarrollo, como herramientas de prueba o compiladores.

Patrón adaptador para nuestras dependencias:
Patrón adaptador para nuestras dependencias: Se refiere al uso del patrón adaptador para hacer que dependencias con interfaces incompatibles trabajen juntas. El adaptador actúa como un intermediario que permite que la interfaz de una dependencia se adapte para ser compatible con otra interfaz. Esto es útil cuando se quiere integrar o utilizar bibliotecas o módulos que no tienen la misma interfaz que el resto del sistema.

