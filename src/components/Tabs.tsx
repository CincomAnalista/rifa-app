import { useEffect, useState } from 'react';
import {
  CustomersTicket,
  CustomersRemaining,
  Tabs,
  Skeleton,
  Div
} from '../components';
import { getClients, CustomersProps } from '../data';

const TabsItems = (data: CustomersProps[]) => [
  {
    title: 'CLIENTES',
    value: 'Clientes que cuentan con tickets',
    content: (
      <Div tittle="CLIENTES CON BOLETAS:">
        <CustomersTicket data={data} />
      </Div>
    )
  },
  {
    title: 'CLIENTES FALTANTES',
    value: 'Clientes proximos a tener tickets',
    content: (
      <Div tittle="DINERO FALTANTE:">
        <CustomersRemaining data={data} />
      </Div>
    )
  }
];

export function Tab() {
  const [data, setData] = useState<CustomersProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getClients();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div className="flex flex-col max-w-7xl mx-auto w-full items-center justify-center lg:my-2">
      <Tabs tabs={TabsItems(data)} />
    </div>
  );
}
