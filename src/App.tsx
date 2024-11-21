import { Hero, Navbar, Tab } from './components';
import { BackgroundLines } from './components/ui/background-lines';

function App() {
  const fecha = new Date();
  return (
    <>
      <BackgroundLines>
        <Navbar />
        <Hero />
        <div>
          ultima fecha de actualizacion: {fecha.toLocaleDateString()} {fecha.toLocaleTimeString()}
        </div>
        <Tab />
      </BackgroundLines>
    </>
  );
}

export default App;
