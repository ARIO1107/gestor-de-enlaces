# 📌 Gestor de Enlaces Personal (Linktree Clone)

Una aplicación web interactiva y responsiva diseñada para almacenar, organizar y gestionar recursos web en tiempo real. Cuenta con un sistema de doble vista (Modo Administrador vs. Modo Público) y generación automática de favicons para cada sitio guardado.

🚀 **Demo en vivo:** [Ver aplicación publicada en Vercel](https://gestor-de-enlaces.vercel.app/)

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica de la interfaz.
* **CSS3:** Variables globales, layout con Flexbox, diseño responsivo y efectos de hover.
* **JavaScript (ES6+):** Manipulación dinámica del DOM, manejo de eventos y lógica del sistema Admin/Público.
* **LocalStorage API:** Persistencia de datos local en el navegador en formato JSON.
* **Google Favicon API:** Renderizado dinámico de logos según el dominio ingresado.

---

## ✨ Características Principales

* 🔒 **Modo Admin / Público:** Permite alternar la visibilidad de las herramientas de gestión (crear/eliminar) para simular vistas de usuario final.
* 🖼️ **Favicons Automáticos:** Extrae el icono oficial de la web guardada estilo *Linktree*.
* 💾 **Persistencia de Datos:** Los enlaces guardados se conservan aun recargando la página gracias a `localStorage`.
* 📱 **Diseño Responsivo:** Adaptado para visualizarse correctamente tanto en dispositivos móviles como en computadoras de escritorio.

---

## 💻 Instalación y Ejecución Local

Si deseas clonar y probar este proyecto en tu entorno local:

1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/ARIO1107/gestor-de-enlaces.git](https://github.com/ARIO1107/gestor-de-enlaces.git)