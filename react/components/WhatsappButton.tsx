import React from "react";

type Props = {
  logo: string 
  phone: string
  alt: string
  width: number
  height: number
}

const WhatsappButton = ({ logo, phone, alt, width, height }: Props) => {
  console.log(phone);

  return (
    <div style={{ position: 'fixed', top: 'auto', bottom: '20px', left: "15px", backgroundColor: "#25d366", padding: "11px", borderRadius: "50%" }}>
      <a href="https://api.whatsapp.com/send?phone=573106187108&#038;text=Hola,%20estaba%20en%20www.luokka.co%20%20y%20quiero%20saber%20acerca%20de%20:%20">
        <img 
          style={{ borderRadius: '50%' }}
          src={logo} 
          alt={alt}
          width={width}
          height={height}
          />
      </a>
    </div>
  )
};

export default WhatsappButton;