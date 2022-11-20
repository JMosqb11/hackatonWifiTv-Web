import Facture from '../Page/Facture/Facture';
import './App.css';
import Home from '../Page/Home/Home';
import { Routes, Route } from 'react-router-dom';
import User from '../Page/User/User';
import Pay from '../Page/Pay/Pay';

// import Header from '../../Components/Header';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/User" element={<User/>}/>
        <Route path='/Facture' element={<Facture/>}/>
        <Route path='/Pay' element={<Pay/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
