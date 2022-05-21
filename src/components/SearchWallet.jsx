import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchWallet from '../services/api';

export default function DataWallet() {
  const { currencies } = useSelector(({ wallet }) => wallet);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchWallet()
      .then((result) => {
        delete result.USDT;
        dispatch({ type: 'CURRENCIES', payload: Object.keys(result) });
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    console.log(currencies);
  }, [currencies]);
  return (
    <div>
      <h3>SearchWallet</h3>
    </div>
  );
}
