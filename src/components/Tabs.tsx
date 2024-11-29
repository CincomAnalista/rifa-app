import { useEffect, useState } from 'react';
import {
  CustomersRemaining,
  CustomersTicket,
  Grid,
  Tabs,
  TabSkeleton,
  Div
} from '../components';
import { getClients, CustomersProps, getTime } from '../data';

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
  },
  {
    title: 'NUMEROS',
    value: 'Numeros Disponibles',
    content: (
      <Div tittle="NUMEROS DISPONIBLES:">
        <Grid data={data} />
      </Div>
    )
  }
];

export function Tab() {
  const [data, setData] = useState<CustomersProps[]>([]);
  const [dataTime, setDataTime] = useState<CustomersProps>();
  const [loading, setLoading] = useState<boolean>(true);

  console.log(loading);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [data, time] = await Promise.all([getClients(), getTime()]);
        setData(data);
        setDataTime(time);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <TabSkeleton />;
  }

  return (
    <div className="flex flex-col max-w-7xl mx-auto w-full items-center justify-center lg:my-2">
      <div className="text-center text-xl mb-3">
        ultima fecha de actualizacion: {dataTime?.lastUpdate}
      </div>
      <Tabs tabs={TabsItems(data)} />
    </div>
  );
}