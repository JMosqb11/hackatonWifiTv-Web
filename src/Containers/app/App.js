<<<<<<< HEAD
import Facture from '../Page/Facture/Facture';
=======
// import Buy from '../Page/Buy';
>>>>>>> 6bcd99deeb79952b17c7cae3a28f6ed700f8566a
import './App.css';
import Home from '../Page/Home/Home';
import { Routes, Route } from 'react-router-dom';
import User from '../Page/User/User';

// import Header from '../../Components/Header';

function App() {
  return (
    <div>
<<<<<<< HEAD

      {/* <Home/> */}
      {/* <Header/> */}
        <Facture/>
=======
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/User" element={<User/>}/>
        {/* <Header/>
        <Buy/> */}
      </Routes>
      
>>>>>>> 6bcd99deeb79952b17c7cae3a28f6ed700f8566a
    </div>
  );
}

export default App;
