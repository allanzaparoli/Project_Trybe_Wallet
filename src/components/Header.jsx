import React from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  const takeEmail = useSelector(({ user }) => user);
  console.log(takeEmail);
  return (
    <div>
      <h3>
        Olá,
        { ' ' }
        <span data-testid="email-field">{takeEmail.email}</span>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </h3>
    </div>
  );
}
