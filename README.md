# 🧑‍🚀 Explorador de Datos de APIs (XHR y Fetch)

Este proyecto es una aplicación web simple que permite **consumir datos desde APIs externas** y mostrarlos dinámicamente en pantalla, utilizando dos enfoques distintos de JavaScript:

- 📡 **XMLHttpRequest (XHR)** – método clásico
- ⚡ **Fetch API** – método moderno basado en promesas

Además, incluye un **bonus opcional** que consume la API de **Giphy**, utilizando una **API Key**.

---

## 🎯 Objetivo del Proyecto

- Comprender cómo funcionan las solicitudes HTTP asíncronas (AJAX).
- Comparar el uso de **XHR vs Fetch**.
- Manipular el DOM para mostrar datos obtenidos desde una API.
- Consumir una API de terceros que requiere **autenticación con API Key**.

---

## 🧱 Estructura del Proyecto

```txt
📁 proyecto-api
│
├── index.html
├── README.md
└── assets
    ├── css
    │   └── style.css
    └── js
        └── app.js

=============================================================================        
🖥️ Tecnologías Utilizadas

HTML5

CSS3

JavaScript (ES6)

API pública JSONPlaceholder

API externa Giphy
=================================================================================

APIs Utilizadas
👤 JSONPlaceholder (Usuarios)

Endpoint:

https://jsonplaceholder.typicode.com/users


Uso:

Obtener una lista de usuarios simulados

Mostrar nombre, email y ciudad

🎞️ Giphy API (Bonus)

Endpoint:

https://api.giphy.com/v1/gifs/search


Requiere:

API Key gratuita desde: https://developers.giphy.com/

⚙️ Funcionalidades
Parte 1 – XMLHttpRequest (XHR)

Botón para cargar usuarios

Solicitud GET usando XMLHttpRequest

Manejo de estados (onload, onerror)

Conversión de JSON con JSON.parse()

Parte 2 – Fetch API

Botón para cargar usuarios usando fetch()

Manejo de promesas con .then() y .catch()

Uso de response.ok y response.json()

Reutilización de la función de renderizado

Parte 3 – Bonus (Giphy API)

Campo de texto para buscar GIFs

Botón de búsqueda

Consumo de API con API Key

Renderizado dinámico de un GIF en pantalla

🧠 Conceptos Aplicados

AJAX y asincronía

XMLHttpRequest

Fetch API

Promesas

JSON

APIs de terceros

API Keys

Manipulación del DOM

Organización de archivos

🔐 Configuración de la API Key (Giphy)

En el archivo app.js, reemplaza:

const API_KEY_GIPHY = "TU_API_KEY_AQUI";

por tu clave real obtenida en Giphy Developers.
la pagina de https://developers.giphy.com/dashboard/ 

Pasos para crear la cta e:
Completar formulario

1.-Rellena así (simple):

2.-App Name:
Proyecto API Fetch

3.-App Description:
Proyecto educativo

4.-Elige "Website"

5.-Acepta los términos y crea la app.

6.-Copiar tu API Key

Ahora verás algo como:

API Key
xxxxxxxxxxxxxxxxxxxxxxxx

7.-Copia esa clave

8.-Pegarla en tu JS

En tu código:

const API_KEY_GIPHY = "TU_API_KEY_AQUI";

##Link de repocitorio y page de GitHub:

https://github.com/POLIVAF/E5M4.git

https://polivaf.github.io/E5M4/