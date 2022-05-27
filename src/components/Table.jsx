import React from 'react';
import '../styles/Table.css';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export default function Table() {
  const takeTable = useSelector(({ wallet }) => wallet.expenses);
  console.log(takeTable);
  return (
    <div>
      <table border="1px solid black">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
          takeTable?.map(
            (element) => (
              <tr key={ uuidv4() }>
                <td>{ element.description }</td>
                <td>{ element.tag }</td>
                <td>{ element.method }</td>
                <td>{ (+element.value).toFixed(2) }</td>
                <td>{ element.exchangeRates[element.currency].name }</td>
                <td>{ (+element.exchangeRates[element.currency].ask).toFixed(2) }</td>
                <td>
                  {
                    ((element.exchangeRates[element.currency].ask)
                    * (element.value)).toFixed(2)
                  }
                </td>
                <td>Real</td>
                <td>Editar/Excluir</td>
              </tr>
            ),
          )
          }
        </tbody>
      </table>
    </div>
  );
}
