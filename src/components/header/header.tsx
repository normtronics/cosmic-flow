'use client'

import React, { useState } from 'react';
import styles from './header.module.css';
import { MobileHeader } from './mobile-header';
// import SearchIcon from './SearchIcon'; // Import your SearchIcon component

const options = [
  {
    link: '/events',
    name: 'events'
  },
  // {
  //   link: '/mixes',
  //   name: 'mixes'
  // },
  {
    link: '/djs',
    name: 'djs'
  },
  {
    link: '/video',
    name: 'video'
  },
  {
    link: '/about',
    name: 'about'
  },
  {
    link: '/contact',
    name: 'contact'
  },
]

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [openNav, setOpenNav] = React.useState(false);

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const open = () => {
    document.body.classList.toggle('activeBurger')
    setOpenNav(true)
  }

  const close = () => {
    document.body.classList.toggle('activeBurger')
    setOpenNav(false)
  }
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <a href="/" className={styles.menuLogo}>In the cosmic flow</a>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.menuList}>
            {options.map((option, i) => (
              <li className={styles.menuItem} key={i}>
                <a href={option.link} className={styles.menuLink}>{option.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button className={styles.hamburger}>
          <div onClick={() => open()}>
            <img src='/hamburger.svg' alt="hamburger" className={styles.icon}/>
          </div>
        </button>
        <MobileHeader close={() => close()} isOpen={openNav}/>
      </div>
    </header>
  );
};