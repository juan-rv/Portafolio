import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contacto.css";

function validate(input) {
  const regexName = /^[a-zA-Z ]+$/;
  const regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const regexNumber = /^[0-9]+$/;

  const { userPhone, userEmail, user_name, user_lastName, message } = input;
  let errors = {};

  //name
  if (!regexName.test(user_name)) {
    errors.user_name = "Nombre no valido.";
  } else if (user_name === 0) {
    errors.user_name = "Ingrese un nombre por favor.";
  } else if (user_name.length < 2) {
    errors.user_name = "Ingrese un nombre mas largo.";
  }

  //lastname
  if (!regexName.test(user_lastName)) {
    errors.user_lastName = "Apellido no valido.";
  } else if (user_lastName === 0) {
    errors.user_lastName = "Ingrese un apellido por favor.";
  } else if (user_lastName.length < 2) {
    errors.user_lastName = "Ingrese un apellido mas largo.";
  }

  //email
  if (!regexEmail.test(userEmail)) {
    errors.userEmail = "Email no valido.";
  } else if (userEmail === 0) {
    errors.userEmail = "Ingrese un email por favor";
  }

  if (message === 0) {
    errors.message = "Ingrese un mensaje por favor";
  } else if (message.length < 4) {
    errors.message = "Ingrese un mensaje mas largo por favor.";
  }

  //phone

  if (!regexNumber.test(userPhone)) {
    errors.userPhone = "Solo se permiten valores numéricos y mayores a 0.";
  } else if (userPhone.length > 15) {
    errors.userPhone = "El valor no debe superar los 15 números.";
  }

  return errors;
}

const Contacto = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    userPhone: "",
    user_name: "",
    user_lastName: "",
    userEmail: "",
    message: "",
  });

  function handleChange(e) {
    setInput((input) => ({
      ...input,
      [e.target.name]: e.target.value,
    }));
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  const sendEmail = (e) => {
    e.preventDefault();
    if (input.user_name && input.user_lastName && input.userEmail.length > 0) {
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
      alert("Mensaje Enviado con éxito");
      setInput({
        userPhone: "",
        user_name: "",
        user_lastName: "",
        userEmail: "",
        message: "",
      });
    } else {
      e.preventDefault();
      alert("complete los espacios vacios");
    }
  };

  return (
    <div className="contain">
      <h1>Me encantaría saber sobre ti, ponte en contacto 👋</h1>
      <form className="first_contain" ref={form} onSubmit={(e) => sendEmail(e)}>
        <div className="second_contain">
          <div className="name">
            <input
              type="text"
              placeholder="Nombre"
              name="user_name"
              onChange={(e) => handleChange(e)}
            />
            {errors.user_name && <h4>{errors.user_name}</h4>}
          </div>
          <div className="apellido">
            <input
              type="text"
              placeholder="Apellido"
              name="user_lastName"
              onChange={(e) => handleChange(e)}
            />
            {errors.user_lastName && <h4>{errors.user_lastName}</h4>}
          </div>

          <div className="phone">
            <input
              type="text"
              placeholder="Telefono"
              name="userPhone"
              onChange={(e) => handleChange(e)}
            />
            {errors.userPhone && <h4>{errors.userPhone}</h4>}
          </div>

          <div className="email">
            <input
              type="text"
              placeholder="Email"
              name="userEmail"
              onChange={(e) => handleChange(e)}
            />
            {errors.userEmail && <h4>{errors.userEmail}</h4>}
          </div>

          <div className="message">
            <textarea
              type="text"
              placeholder="Mensaje"
              name="message"
              onChange={(e) => handleChange(e)}
            />
            {errors.message && <h4>{errors.message}</h4>}
          </div>
          <div className="send">
            <input type="submit" value="Enviar" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contacto;
