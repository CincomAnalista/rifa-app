import { Hero, Navbar, Tab } from './components';
import { BackgroundLines } from './components/ui/background-lines';

function App() {
  return (
    <>
      <BackgroundLines>
        <Navbar />
        <Hero />
        <Tab />
      </BackgroundLines>
    </>
  );
}

export default App;
