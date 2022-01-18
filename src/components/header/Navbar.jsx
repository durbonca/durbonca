import React from 'react';
import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../../images/logo.png';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavbarItem = ({ title, classProps, link, setToggleMenu }) => {
  return (
    <Link to={link}>
      <li onClick={() => setToggleMenu(false)} className={`mx-4 cursor-pointer ${classProps}`}>
        {title}
      </li>
    </Link>
  );
};

const menuList = ['Portfolio Projects', 'CV Resume', 'Contact'];
const menuLink = ['/Projects', '/CVResume', '/Contact'];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        </Link>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {menuList.map((title, index) => {
          return <NavbarItem link={menuLink[index]} key={index} title={title} classProps="text-white" />;
        })}
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        ) : (
          <HiMenuAlt4 className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <ul
            className="z-20 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden flex flex-col
                       blue-glassmorphism text-white flex-initial list-none justify-start items-end rounded-md"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {menuList.map((title, index) => {
              return (
                <NavbarItem
                  setToggleMenu={setToggleMenu}
                  link={menuLink[index]}
                  key={index}
                  title={title}
                  classProps="my-2 text-white text-lg"
                />
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

NavbarItem.propTypes = {
  title: PropTypes.string.isRequired,
  classProps: PropTypes.string.isRequired,
};

export default Navbar;
