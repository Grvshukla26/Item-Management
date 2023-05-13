
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar';
import Home from './component/Home';
import AddItem from './component/AddItem';
import EditItem from './component/EditItem';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/AddItem' element={<AddItem />}></Route>
        <Route path='/EditItem/:id' element={<EditItem />}></Route>

      </Routes>
    </>




  );
}

export default App;
