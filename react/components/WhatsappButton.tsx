import React from "react";
import PropTypes from "prop-types";
import { Props } from "../typings/types";

const WhatsappButton = ({ logo, phone, message, alt, width, height }: Props) => {
  // const formatMessage = message.replace(/ /g, '%20');

  return (
    <div className="fixed bottom-1 left-1 pa4 br-100" style={{ backgroundColor: "#25d366"}}>
      <a 
        href={`https://api.whatsapp.com/send?phone=${phone}&#038;text=${message}`}
        target="_blank" 
        rel="noopener noreferrer"
        >
        <img 
          style={{ borderRadius: '50%', userSelect: 'none' }}
          src={logo} 
          alt={alt}
          width={width}
          height={height}
          />
      </a>
    </div>
  )
};

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

WhatsappButton.defaultProps = {
  logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
  phone: "573106187108",
  message: "Hola desde el componente de Whatsapp Button",
  alt: "Imagen del logo de whatsapp",
  width: 40,    
  height: 40
};

WhatsappButton.schema = {
  title: "Boton de Whatsapp",
  type: "object",
  properties: {
    logo: {
      title: "Logo de Whatsapp",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    phone: {
      title: "Número de teléfono",
      type: "string",
      description: "Agrega el Número de teléfono con código de país, ejemplo: 3001234567"
    },
    message: {
      title: "Mensaje predeterminado",
      type: "string",
      description: "Agrega el mensaje que quieres para tu cliente",
      widget: {
        "ui:widget": "textarea"
      }
    },
    alt: {
      title: "Texto alternativo de la imagen",
      type: "string",
      description: "Agrega un texto alternativo para la imagen del logo"
    },
    width: {
      title: "Ancho de la imagen",
      type: "string",
      description: "Agrega el ancho de la imagen"
    },
    height: {
      title: "Alto de la imagen",
      type: "string",
      description: "Agrega el alto de la imagen"
    }
  }
};

export default WhatsappButton;