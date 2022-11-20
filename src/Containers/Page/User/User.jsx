import React, {useState} from 'react';
import './User.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const User = () => {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [typeId, setTypeId] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [rol, setRol] = useState("");
  const [address, setAddress] = useState("");

  const addUser = async (newUser) =>{
        try {
          let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify(newUser);

    let reqOptions = {
      url: "https://servicios-internet-jvmm.herokuapp.com/api/users",
      method: "POST",
      headers: headersList,
      data: bodyContent,

    };

    let response = await axios.request(reqOptions);
    return response;
        } catch (error) {
          throw error
        }

    


  };


  const sendInformation = async (e) => {
      
    try {
      e.preventDefault();
      const newInfo = { name, lastName, typeId, id, email, password, role: "CLIENT_ROLE", address };
      const response = await addUser(newInfo);

      
      if (!response.status) {
        return;
      }



      setName(" ");
      setLastName(" ");
      setId(" ");
      setTypeId(" ");
      setEmail(" ");
      setPasword(" ");
      setRol(" ");
      setAddress(" ");
      alert('Se guardaron tus datos')

    } catch (error) {
      console.log('ocurrio un error')
    }


  };
 

  return (

    <div className='containerGeneral' >
        <section className='imageFondo'>
        </section>

        <section className='InputsSection'>

          <form onSubmit={ sendInformation }>
            <div className='personalName'>
                <input type="text" name="Name" id="" placeholder='Nombre' value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="text" name="lastName" id="" placeholder='Apellido' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </div>

            <div className='DocumentPersonal'>
                <div>
                  <select name="TypeDocument" id="" value={typeId} onChange={(e) => setTypeId(e.target.value)}>
                    <option value="type">Tipo de Documento</option>
                    <option value="C.C">Cedula de ciudadania</option>
                    <option value="C.E">Cedula de extrangeria</option>
                    <option value="T.E">Pasaporte</option>
                  </select>
                </div>

                <input type="text" name="NumberDocument" id="" placeholder='Número de documento' value={id} onChange={(e) => setId(e.target.value)}/>
            </div>

            <div className='personalHome'>
                <input type="email" name="email" id="" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" name="password" id="" placeholder='Contraseña' value={password} onChange={(e) => setPasword(e.target.value)}/>
            </div>

            <div className='usuar'>
              
                <select name="rol" id="" value={rol} readOnly={true} onChange={(e) => setRol(e.target.value)}>
                  <option value="rol">Cliente</option>
                </select>

              <input type="text" name="addrees" id="" placeholder='Dirección' value={address} onChange={(e) => setAddress(e.target.value)}/>
            </div>

            <div className='containerBtn'>
              <NavLink to="/Buy" type="submit" className='btn'> Send </NavLink>
            </div>

          </form>
            

        </section>
    </div>
  )
}

export default User