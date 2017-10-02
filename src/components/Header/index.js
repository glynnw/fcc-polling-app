import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () =>
  <header>
    <nav>
      <ul>
        <li><NavLink to='/poll/new'>New Poll</NavLink></li>
        <li><NavLink to='/signup'>Sign up</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
      </ul>
    </nav>
  </header>

export default Header