import React from 'react'
import Header from '../../../Components/Header'
import './Buy.css'

const Buy = () => {
  return (
    <div className='buy'>
        <Header/>
        
        <section>

          <div className='container-products'>

              <div className='product'>

                <select name="barrios" id="">
                  <option value="volvo">Productos</option>
                  <option value="volvo">Internet hogar</option>
                  <option value="volvo">Internet satelital</option>
                </select>
              

              <article className='Megas'>

                <div className='items-megas'>
                  <input type="checkbox" name="20mb" id="checkselectmb" className='checkbox'/>
                  <label htmlFor="checkselectmb">20 Megas</label>
                </div>

                <div className='items-megas'>
                  <input type="checkbox" name="40mb" id="checkselectmb" className='checkbox' />
                  <label htmlFor="checkselectmb">40 Megas</label>
                </div>

                <div className='items-megas'>
                  <input type="checkbox" name="60mb" id="checkselectmb" className='checkbox'/>
                  <label htmlFor="checkselectmb">60 Megas</label>
                </div>

                <div className='items-megas'>
                  <input type="checkbox" name="100mb" id="checkselectmb" className='checkbox'/>
                  <label htmlFor="checkselectmb">100 Megas</label>
                </div>

              </article>
                

              </div>

              <div className='selectTV'>
                <select name="" id="">
                  <option value="tv">Televición</option>
                  <option value="tv">Televisión hogar</option>
                  <option value="tv">Televisión movil</option>
                </select>
              </div> 
          </div>

          {/* separacion */}

        <article className='container-hogar'>
           <div>
                <select name="barrios" id="">
                    <option value="volvo">Barrio</option>
                    <option value="volvo">San Javier 1</option>
                    <option value="volvo">San Javier 2</option>
                    <option value="volvo">El corazón</option>
                    <option value="volvo">Betania</option>
                    <option value="volvo">Nuevos conquistadores</option>
                    <option value="volvo">La caseta</option>
                    <option value="volvo">Altos de San juan</option>
                    <option value="volvo">El salado</option>
                    <option value="volvo">Independencias 1</option>
                    <option value="volvo">Independencias 2</option>
                    <option value="volvo">Independencias 3</option>
                    <option value="volvo">Veinte de Julio</option>
                    <option value="volvo">Belencito</option>
                    <option value="volvo">El Socorro</option>
                    <option value="volvo">Eduardo Santos</option>
                    <option value="volvo">Antonio Nariño</option>
                    <option value="volvo">Guadarrama</option>
                    <option value="volvo">La Divisa</option>
                </select>
             </div>

            <div>
                <input className="adress" type="text" name="direccion" id="" placeholder='Dirección'/>
            </div>
        </article>

          {/* separacion dos */}
        
          <div className='container-resumen-pedido'>
            
          <button>Enviar</button>

          </div>

        </section>
    </div>
  )
}

export default Buy