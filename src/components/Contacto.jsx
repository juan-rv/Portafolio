import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contacto.css";

const Contacto = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_val4u3n",
        "template_hhjar7m",
        form.current,
        "jfMLdE5a0NVrUKEMz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="conta">
      <h1>Contacto</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <input type="text" placeholder="Nombre" name="user_name" />
          <input type="text" placeholder="Apellido" name="user_lastName" />
          <input type="text" placeholder="Telefono" name="userPhone" />
          <input type="text" placeholder="Email" name="userEmail" />
          <textarea type="text" text name="message" />
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
};

export default Contacto;
