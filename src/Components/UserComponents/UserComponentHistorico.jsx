import React from 'react';

const orders = [
  { id: '1234', date: '2025-01-05', status: 'Entregue', total: 99.99 },
  { id: '1235', date: '2025-01-03', status: 'Em Processamento', total: 45.50 },
  { id: '1236', date: '2025-01-01', status: 'Cancelado', total: 20.00 },
  { id: '1237', date: '2024-12-25', status: 'Entregue', total: 120.75 },
];

export default function UserComponentHistorico() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-gray-200 mb-6">Histórico de Músicas</h1>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-4 text-left text-gray-700">ID do Pedido</th>
            <th className="py-3 px-4 text-left text-gray-700">Data</th>
            <th className="py-3 px-4 text-left text-gray-700">Status</th>
            <th className="py-3 px-4 text-left text-gray-700">Valor</th>
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
                      : order.status === 'Em Processamento'
                      ? 'bg-yellow-100 text-yellow-600'
                      : 'bg-red-100 text-red-600'
                  } py-1 px-3 rounded-full text-sm`}
                >
                  {order.status}
                </span>
              </td>
              <td className="py-3 px-4 text-gray-600">R$ {order.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
