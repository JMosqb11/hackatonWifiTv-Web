import React from 'react'
import './style.css'
import './Pay.css'
import { useNavigate } from 'react-router-dom'

const Pay = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/")
  }

  return (
    <>
      <div className="container-form-tarjet" onSubmit={handleSubmit}>
        <form action="" id="formulario-tarjeta" className="formulario-tarjeta">
          <h1>Metodo de Pago</h1>
          <div className="grupo">
            <label htmlFor="inputNumero">Número Tarjeta</label>
            <input type="text" id="inputNumero" maxLength="19" autoComplete="off" pattern='^(?:(\d{4}\s?){4}|(\d{4,6}\s?){3})$' required/>
          </div>
          <div className="grupo">
            <label htmlFor="inputNombre">Nombre</label>
            <input type="text" id="inputNombre" maxLength="19" autoComplete="off" required/>
          </div>
          <div className="flexbox">
            <div className="grupo expira">
              <label htmlFor="expired-day">Fecha de Expiracion</label>
              <div className="flexbox">
                <input type="text" id='expired-day' required/>
              </div>
            </div>

            <div className="grupo ccv">
              <label htmlFor="inputCCV">CCV</label>
              <input type="text" id="inputCCV" maxLength="3" required/>
            </div>
          </div>
          <button type="submit" className="btn-enviar">Enviar</button>
        </form>
      </div>
  </>
  )
}

export default Pay