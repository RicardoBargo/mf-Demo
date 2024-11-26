import React from 'react';
import { navigateToUrl } from 'single-spa';
import { useLocation } from 'react-router-dom';
import Logo from '../assets/img/logomkt.png'

const SideMenu = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    const baseClasses = "text-white no-underline flex justify-center items-center p-2 rounded-md transition duration-200";
    const activeClasses = "bg-blue-400 text-blue-800";
    const hoverClasses = "hover:bg-blue-400 hover:text-white";

    if (location.pathname === path || location.pathname.startsWith(path)) {
      return `${baseClasses} ${activeClasses}`;
    }

    return `${baseClasses} ${hoverClasses}`;
  };


  return (
    <div className="w-full h-[auto] fixed bg-blue-900 box-border p-4 shadow-md">
      <div className="text-center text-blue-800 text-xl font-semibold">
        <a href="/" onClick={navigateToUrl} >
          <img src={Logo} alt="logo" className="mx-auto w-72" />
        </a>
      </div>
      <ul className="flex justify-center space-x-4">
        <li>
          <a href="/angular" onClick={navigateToUrl} className={getLinkClass('/angular')}>Arturo Calle</a>
        </li>
        <li>
          <a href="/react" onClick={navigateToUrl} className={getLinkClass('/react')}>Colore</a>
        </li>
      </ul>
    </div>

  );
};

export default SideMenu;
