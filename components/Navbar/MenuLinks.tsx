'use client'
import Link from 'next/link';
import React, { useState } from 'react';

interface NavLinkProps {
  href: string;
  buttonName: string;
  activeButton: string | null;
  handleButtonClick: (buttonName: string) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, buttonName, activeButton, handleButtonClick }) => (
  <Link href='/'
  
      onClick={() => handleButtonClick(buttonName)}
  >
    
      <button className={`border border-zinc-700 opacity-90 rounded-full px-3 py-1.5 hover:px-5 hover:bg-white transition-all ease-in-out ${activeButton === buttonName ? ' bg-zinc-200' : ''}`}>
        {buttonName}
      </button>
    
  </Link>
);

const MenuLinks: React.FC = () => {
  const [activeButton, setActiveButton] =useState<string | null>('Home');

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(activeButton === buttonName ? null : buttonName);
  };

  return (
    <div>
      <ul className='flex items-center justify-center gap-2'>
        <NavLink href="/" buttonName="Home" activeButton={activeButton} handleButtonClick={handleButtonClick} />
        <NavLink href="/blog" buttonName="Blog" activeButton={activeButton} handleButtonClick={handleButtonClick} />
        <NavLink href="/about" buttonName="About" activeButton={activeButton} handleButtonClick={handleButtonClick} />
        <NavLink href="/contact" buttonName="Contact" activeButton={activeButton} handleButtonClick={handleButtonClick} />
      </ul>

      <style jsx>{`
        .button-link {
          text-decoration: none;
          color: inherit;
        }

        .button-link:hover {
          background-color: #f0f0f0;
        }

        .button-link.active {
          background-color: #d4d4d4;
        }
      `}</style>
    </div>
  );
}

export default MenuLinks;
