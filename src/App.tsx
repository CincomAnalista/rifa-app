import { useEffect, useState } from 'react';
import { Hero, Navbar, Tab } from './components';
import { BackgroundLines } from './components/ui/background-lines';
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
      <BackgroundLines>
        <Navbar />
        <Hero />
        <div>ultima fecha de actualizacion: {date?.lastUpdate}</div>
        <Tab />
      </BackgroundLines>
    </>
  );
}

export default App;
