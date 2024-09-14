import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContextGlobal();

  const changeTemp = ()=>{
    dispatch({ type: "TOGGLE_THEME", payload: state.theme });
  }
  return (
    <nav className={'nav-'+ (!state.theme ? "dark" : "") }>
      <h2>DH Odonto</h2>
      <div className='content-links'>
      <Link to={'/'}><h4>Home</h4></Link>
      <Link to={'/Favorite'}><h4>Favoritos</h4></Link>
      <Link to={'/Contact'}><h4>Contact</h4></Link>
      <button className='btn-theme' onClick={changeTemp}>  { !state.theme ? '☀️' : '🌙' }</button>
      </div>
    </nav>
  )
}

export default Navbar