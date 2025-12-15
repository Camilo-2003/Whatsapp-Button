# 🟢 Componente Whatsapp Button

* [🚀 Visión General](#-visión-general)
* [🖼️ Previsualización del Componente](#-previsualización-del-componente)
* [🏗️ Instalación y Ejemplo de Uso](#-instalacion-y-ejemplo-de-uso)
    * [1. Dependencia](#1-dependencia)
    * [2. Declaración en Blocks](#2-declaración-en-blocks)
* [⚙️ Propiedades (Props)](#-propiedades-props)
    * [Propiedades que se le envian al componente desde la tienda](#estructura-de-cada-objeto-bullet)
* [🎨 Personalización (Estilo y Posición)](#-personalización)
* [🪪 Contribución y Licencia](#-contribución-y-licencia)


## 🚀 `Visión General`

Este componente fue creado con el template de `react-app-template` de VTEX. Este componente muestra un **botón flotante de WhatsApp** en la esquina inferior izquierda de la pantalla, permitiendo a los clientes iniciar una conversación con un mensaje predefinido.

## 🖼️ `Previsualización del Componente`

![Previsualización del botón de WhatsApp flotante](whatsapp-button-preview.png)


## 🏗️ `Instalación y Ejemplo de Uso`

### 1. Dependencia

Asegúrate de declarar la aplicación del componente en las dependencias de el `manifest.json` de tu tienda.

### 2. Declaración en Blocks

El componente se declara y se configura como un block, generalmente en un *template* o bloque principal (Ej. `store/blocks.jsonc`).

```json
"store:custom#home": {
  "blocks": [
    "whatsapp-button"
    // Otros bloques...
  ]
},
// Ejemplo de props que se le pueden pasar al componente
"whatsapp-button": {
  "props": {
    "logo": "assets/img/whatsapp-logo.png",
    "phone": "573106187108",
    "message": "Hola, estaba en la tienda y quiero saber acerca de: ",
    "width": 40,    
    "height": 40
  }
}
```
## ⚙️ `Propiedades (Props)`

Estas propiedades permiten configurar el comportamiento y la apariencia del botón. 
La configuración utiliza el esquema (schema) definido en el componente.
| Propiedad | Tipo | Obligatorio | Valor por Defecto | Descripción |
| :--- | :--- | :--- | :--- | :--- |
| **`logo`** | String | Sí | `https://upload.wikimedia.org/commons/6/6b/WhatsApp.svg` | URL o path de la imagen del logo. Usa `image-uploader` en Site Editor. |
| **`phone`** | String | Sí | `573106187108` | Número de WhatsApp (con código de país, Ej: `573001234567`). |
| **`message`** | String | No | `Hola desde el componente...` | Mensaje de texto que se precarga al abrir el chat. |
| **`alt`** | String | No | `Imagen del logo de whatsapp` | Texto alternativo (`alt`) para la accesibilidad de la imagen. |
| **`width`** | String / Number | No | `40` | Ancho del logo en píxeles. |
| **`height`** | String / Number | No | `40` | Alto del logo en píxeles. |

## 🎨 `Estilo y Posición`
El diseño y la posición del componente se definen utilizando las clases de **Tachyons**:

**`Posición Fija:`** El contenedor principal utiliza las clases **(fixed bottom-1 left-1 pa4 br-100)** para asegurar que el botón permanezca visible en la esquina inferior izquierda.

**`Color de Fondo:`** El color verde característico de WhatsApp (`#25d366`) se aplica directamente en línea al contenedor.

**`URL Generada:`** La URL de destino utiliza la API de WhatsApp, concatenando el número y el mensaje: `https://api.whatsapp.com/send?phone=${phone}&#038;text=${message}.`


## 🪪 `Contribución y Licencia`

### 🤝 Contribución 

Si deseas contribuir con mejoras, reportar *bugs* o sugerir nuevas características:

1.  Haz un *fork* del repositorio.
2.  Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3.  Realiza tus cambios y haz *commit* (`git commit -m 'feat: Añadir nueva funcionalidad'`).
4.  Sube la rama (`git push origin feature/nueva-funcionalidad`).
5.  Abre un *Pull Request*.

###  📜 Licencia

Este proyecto está bajo la **Licencia MIT**.

> **[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)**

> **[![Open Source](https://img.shields.io/badge/Open%20Source-yes-green.svg)](https://github.com/vtex-apps/whatsapp-button/blob/main/LICENSE)**