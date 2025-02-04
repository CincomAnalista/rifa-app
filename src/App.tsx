// import { Navbar } from './components/common';
import { Route, Routes } from 'react-router-dom';
import { Home, AddNumbers } from './pages';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-numbers" element={<AddNumbers />} />
      </Routes>
    </>
  );
}

export default App;
