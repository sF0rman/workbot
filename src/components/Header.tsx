import React from 'react';
import Button from './Button/Button';
import { Link } from 'react-router-dom';

const Header = () => {

  const links = [
    {
      title: 'About',
      link: '/about',
    }, {
      title: 'Services',
      link: '/services'
    }, {
      title: 'FAQ',
      link: '/faq'
    }, {
      title: 'Contact',
      link: '/contact'
    }
  ];


  return (
    <header>
      <div>
        <Link to="/" className="logo">Workbot</Link>
        {links && links.map(link => (<Link key={link.title} className="menuOption" to={link.link}> {link.title} </Link>))}
      </div>
      <div>
        <Button>LOGIN</Button>
        <Button useSecondary={true}>REGISTER</Button>
      </div>
    </header>
  )
}

export default Header;