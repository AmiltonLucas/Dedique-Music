// Codigo fonte de historico de pedidos/compras!

import React from 'react';

const orders = [
  { id: '1234', date: '2025-01-05', status: 'Entregue' },
  { id: '1236', date: '2025-01-01', status: 'Cancelado' },
  { id: '1237', date: '2024-12-25', status: 'Entregue'},
];

export default function UserComponentHistorico() {
  return (
    <div className="flex flex-col mx-auto p-6 md:max-w-4xl">
      <h1 className="text-2xl text-center font-semibold text-gray-200 mb-6">Histórico de Músicas</h1>
      <table className="min-w-screen bg-white shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-4 text-left text-gray-700">ID do Pedido</th>
            <th className="py-3 px-4 text-left text-gray-700">Data</th>
            <th className="py-3 px-4 text-left text-gray-700">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-4 text-gray-600">{order.id}</td>
              <td className="py-3 px-4 text-gray-600">{order.date}</td>
              <td className="py-3 px-4 text-gray-600">
                <span
                  className={`${
                    order.status === 'Entregue'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-red-100 text-red-600'
                  } py-1 px-3 rounded-full text-sm`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
