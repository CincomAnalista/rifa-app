import { CustomersTicket, CustomersRemaining } from './';
import { Tabs } from './ui/tabs';
import data from '../data/data.json';

import { ReactNode } from 'react';

const Div = ({ children, tittle }: { children: ReactNode; tittle: string }) => {
  return (
    <div className="w-full h-[30rem] md:h-[60rem] relative  overflow-x-auto mb-2 rounded-2xl p-6 text-base sm:p-8 sm:text-lg md:p-10 md:text-xl lg:text-2xl xl:text-4xl font-bold text-white bg-gradient-to-br from-green-600 to-green-800">
      <h1 className="mb-10">{tittle}</h1>
      {children}
    </div>
  );
};

const TabsItems = [
  {
    title: 'Clientes',
    value: 'Clientes que cuentan con tickets',
    content: (
      <Div tittle="Clientes que cuentan con Boleta">
        <CustomersTicket data={data} />
      </Div>
    )
  },
  {
    title: 'Clientes sin tickets',
    value: 'Clientes proximos a tener tickets',
    content: (
      <Div tittle="Dinero faltante del cliente para obtener tickest">
        <CustomersRemaining data={data} />
      </Div>
    )
  }
];

export function Tab() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto w-full items-center justify-center  sm:my-28 md:my-36 lg:my-40">
      <Tabs tabs={TabsItems} />
    </div>
  );
}
