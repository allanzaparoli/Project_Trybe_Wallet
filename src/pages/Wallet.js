import React from 'react';
import Expenses from '../components/Expenses';
import Header from '../components/Header';
import SearchWallet from '../components/SearchWallet';

export default function Wallet() {
  return (
    <div>
      <Header />
      <h1>TrybeWallet</h1>
      <SearchWallet />
      <Expenses />
    </div>
  );
}
