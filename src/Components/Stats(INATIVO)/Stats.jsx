// Codigo fonte de sobre stats do site (INATIVO)!

import React from "react"

const stats = [
    { id: 1, name: 'De músicas em nosso site', value: '+2k' },
    { id: 2, name: 'De clientes satisfeitos', value: '+10k' },
    { id: 3, name: 'De pedidos feitos diariamente', value: '+1k' },
  ]
  
  export default function Stats() {
    return (
      <div className="bg-white py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  