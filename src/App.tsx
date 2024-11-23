import { useEffect, useState } from 'react';
import { Hero, Navbar } from './components/common';
import { Tab } from './components';
import { getTime } from './data/api';

interface Props {
  _id: string;
  lastUpdate: string;
}

function App() {
  const [date, setDate] = useState<Props>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Props = await getTime();
        if (data) {
          setDate(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="text-center text-xl mb-3">
        ultima fecha de actualizacion: {date?.lastUpdate}
      </div>
      <Tab />
    </>
  );
}

export default App;
