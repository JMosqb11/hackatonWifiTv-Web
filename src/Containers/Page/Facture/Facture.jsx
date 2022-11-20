import React from 'react'
import Header from '../../../Components/Header'
import './style.css'

const Facture = () => {
  return ( 
    <div>
  <Header/>
    <div className='container-padre'>
       <h1> Factura de Pago</h1>
       </div>

          <div className='container-1'>
            <h3>Nombre :</h3>
            <h3>Direccion :</h3>
            <h3>Contrato :</h3>
          </div>

          <div className='container-2'>
            <h3>Fecha :</h3>
          </div>

          <div>
            <h3 className='cuadro-1'>Internet Tv :</h3>
            <h3 className='cuadro-2'>Valor :</h3>
          </div>

          <div className='container-3'>
            <button>Pagar</button>
          </div>

    </div>

  )
}

export default Facture