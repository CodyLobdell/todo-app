import React from 'react';
import Login from '../../Context/auth/Login';
import './header.css';
function Header() {

  return (
    <div className='header'>
      <h1>My To-Do List</h1>
      <a href="/">Home</a>
      <a href="/settings">Settings</a>
      <Login />
    </div>
  )
}

export default Header;