import React from 'react';
import '../styles/Table.css';

export default function Table() {
  return (
    <div>
      <h4>Gastos</h4>
      <table border="solid 2px" className="tableDescription">
        <th>
          Descrição
        </th>
        <th>Tag</th>
        <th>Método de pagamento</th>
        <th>Valor</th>
        <th>Moeda</th>
        <th>Câmbio utilizado</th>
        <th>Valor convertido</th>
        <th>Moeda de conversão</th>
        <th>Editar/Excluir</th>
        <tr>
          <td>teste</td>
          <td>teste</td>
          <td>teste</td>
          <td>teste</td>
          <td>teste</td>
          <td>teste</td>
          <td>teste</td>
          <td>teste</td>
          <td>teste</td>
        </tr>
      </table>
    </div>
  );
}
