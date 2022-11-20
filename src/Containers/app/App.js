// import Buy from '../Page/Buy';
import './App.css';
import Home from '../Page/Home/Home';
import { Routes, Route } from 'react-router-dom';
import User from '../Page/User/User';

// import Header from '../../Components/Header';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/User" element={<User/>}/>
        {/* <Header/>
        <Buy/> */}
      </Routes>
      
    </div>
  );
}

export default App;
