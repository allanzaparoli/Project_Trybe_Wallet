import React, { useState, useEffect } from 'react';
import * as EmailValidator from 'email-validator';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MIN_SENHA } from '../helpers/magicNumbers';

export default function InputLogin() {
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [disable, setDisabled] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const validateEmail = EmailValidator.validate(email);
    if (senha.length >= MIN_SENHA && validateEmail) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, senha]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'EMAIL', payload: email });
    history.push('/carteira');
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="email">
        Email:
        <input
          data-testid="email-input"
          id="email"
          value={ email }
          onChange={ (event) => setEmail(event.target.value) }
          type="email"
        />
      </label>
      <label htmlFor="password">
        Senha:
        <input
          data-testid="password-input"
          id="senha"
          value={ senha }
          onChange={ (event) => setSenha(event.target.value) }
          type="password"
        />
      </label>
      <button
        type="submit"
        disabled={ disable }
      >
        Entrar
      </button>
    </form>
  );
}
