import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import fetchWallet from '../services/api';
import { ID_INICIAL } from '../helpers/magicNumbers';

export default function Expenses() {
  const { currencies } = useSelector(({ wallet }) => wallet);
  const [valor, setValor] = useState(0);
  const [despesa, setDespesa] = useState('');
  const [moeda, setMoeda] = useState('USD');
  const [tipo, setTipo] = useState('');
  const [cat, setCat] = useState('');
  const [id, setId] = useState(ID_INICIAL);
  const dispatch = useDispatch();

  const submitForm = (event) => {
    event.preventDefault();
    setId(id + 1);
    fetchWallet()
      .then((result) => {
        console.log(result);
        dispatch({
          type:
          'EXPENSE',
          payload: {
            id: id + 1,
            value: valor,
            description: despesa,
            currency: moeda,
            method: tipo,
            tag: cat,
            exchangeRates: result } });
      })
      .catch((error) => console.log(error));

    setValor(0);
    setDespesa('');
  };

  return (
    <div>
      <form onSubmit={ submitForm }>
        <label htmlFor="valor">
          Valor:
          <input
            value={ valor }
            onChange={ (event) => setValor(event.target.value) }
            data-testid="value-input"
            type="number"
            id="valor"
          />
        </label>
        <br />
        {' '}
        <br />
        <label htmlFor="despesa">
          Despesa:
          <input
            value={ despesa }
            onChange={ (event) => setDespesa(event.target.value) }
            data-testid="description-input"
            type="text"
            id="despesa"
          />
        </label>
        <label htmlFor="Moeda">
          Moeda:
          <select
            id="Moeda"
            value={ moeda }
            onChange={ (event) => setMoeda(event.target.value) }
          >
            {currencies.map((element) => (
              <option key={ uuidv4() }>
                {element}
              </option>
            ))}
          </select>
        </label>
        Tipo de Pagamento:
        <label htmlFor="tipo">
          {' '}
          <select
            data-testid="method-input"
            id="tipo"
            value={ tipo }
            onChange={ (event) => setTipo(event.target.value) }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="cat">
          Categoria:
          <select
            data-testid="tag-input"
            id="cat"
            value={ cat }
            onChange={ (event) => setCat(event.target.value) }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="submit">Adicionar despesa</button>
      </form>
    </div>
  );
}
