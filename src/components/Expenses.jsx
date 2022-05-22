import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export default function Expenses() {
  const { currencies } = useSelector(({ wallet }) => wallet);
  return (
    <div>
      <form onSubmit>
        <label htmlFor="valor">
          Valor:
          <input data-testid="value-input" type="number" id="valor" />
        </label>
        <br />
        {' '}
        <br />
        <label htmlFor="despesa">
          Despesa:
          <input data-testid="description-input" type="text" id="despesa" />
        </label>
        <label htmlFor="Moeda">
          Moeda:
          <select id="Moeda">
            {currencies.map((element) => (
              <option key={ uuidv4() }>
                {element}
              </option>
            ))}
          </select>
        </label>
        Tipo de Pagamento:
        <label htmlFor="tipo">
          <select data-testid="method-input" id="tipo">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="cat">
          Categoria:
          <select data-testid="tag-input" id="cat">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    </div>
  );
}
