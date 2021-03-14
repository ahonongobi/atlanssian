import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
export function Button() {
  return (
    <Link className="menus" to='sign-up'>
        
      <button className='btn btn-outline-success mb-3'>Espace membres <i className="fa fa-user"></i> </button>
      <button  className='btn btn-outline-success mb-3 ml-2 btn-2'>Tester l'essai gratuit <i className="fa fa-user"></i> </button>

    </Link>
  );
}