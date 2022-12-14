import React from 'react';
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
      <nav className='nav'>
        <ul className='nav__list'>
            <li className='nav__item'>
              <h1>news</h1>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
            </li>
        </ul>
      </nav>
    );
}

export default Navigation;
