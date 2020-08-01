import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './menu.css';
import Button from '../Button';
// eslint-disable-next-line import/order
import { Link } from 'react-router-dom';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="BookFlix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
