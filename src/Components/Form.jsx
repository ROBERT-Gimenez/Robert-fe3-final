import React, { useState } from "react";
import { useContextGlobal } from "./utils/global.context";


const Form = ({}) => {
  const {state} = useContextGlobal();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length < 5) {
      setError('El campo nombre debe tener al menos 5 caracteres');
      return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexName = /^[A-Za-z]+$/;
    if (!regexName.test(name) || !regexEmail.test(email)) {
      setError('Por favor verifique su información nuevamente');
      return;
    }

    setError('');
    setSuccess(`Gracias ${name}, te contactaremos cuando antes vía mail`);
    setName('');
    setEmail('');
  };
  return (
    <div className={'Contact-content ' }>
      <form className={'form-content ' + (!state.theme ? "dark" : "white")} onSubmit={handleSubmit}>
      <h2>Registrate para confirmar tu turno</h2>
      <h3>Dejanos tus datos</h3>

      <div className='input-content'>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
          />
        <input
          type="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          />
        </div>

      <button className='btn-form' type="submit">Enviar</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && !error && <p style={{ color: 'green' }}>{success}</p>}

    </form>
    </div>
  );
};

export default Form;
