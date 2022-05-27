import React from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  const takeEmail = useSelector(({ user }) => user);
  const takeValue = useSelector(({ wallet }) => wallet.expenses);
  console.log(takeValue);
  const somaValores = takeValue.reduce(
    (accum, curr) => accum + (+curr.value * +curr.exchangeRates[curr.currency].ask), 0,
  );
  return (
    <div>
      <h3>
        Olá,
        { ' ' }
        <span data-testid="email-field">{takeEmail.email}</span>
        <p data-testid="total-field">{somaValores.toFixed(2)}</p>
        <p data-testid="header-currency-field">BRL</p>
      </h3>
    </div>
  );
}
