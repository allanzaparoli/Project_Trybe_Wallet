import React from 'react';
import Expenses from '../components/Expenses';
import Header from '../components/Header';
import SearchWallet from '../components/SearchWallet';
import '../styles/Wallet.css';

export default function Wallet() {
  return (
    <div>
      <h1 className="header">TrybeWallet</h1>
      <Header />
      <SearchWallet />
      <Expenses />
    </div>
  );
}
