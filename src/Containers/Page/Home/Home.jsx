import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
        <div className='container'>
            <div className='container-nav'>
                <div className='nav'>
                    <div className='containerlogo'>
                        <h2>C13Antena</h2>
                    </div>
                    <div className='containerLinks'>

                        <a href='e' className='links' rel='nooponer'>Login</a>
                        <NavLink to='/User' className='links'>Registro</NavLink>
                    </div>
                </div>
                <div className='frase'>
                    <p>Conectando vidas, actualidad y personas, con los barrios y toda esta hermosa comunidad que nos rodea</p>
                </div>
                <div className='btonInfo'>
                    <button className='moreInfo'>Más información</button>
                </div>
            </div>
    </div>
    
  )
}

export default Home