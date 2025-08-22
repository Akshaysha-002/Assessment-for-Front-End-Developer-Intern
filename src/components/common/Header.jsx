import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-header-1 rounded-[20px] px-4 sm:px-6 lg:px-[24px] py-[16px] sm:py-[24px] lg:py-[32px] mt-[12px] sm:mt-[18px] lg:mt-[24px]">
      <div className="w-full max-w-[1392px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-[18px] sm:text-[22px] lg:text-[25px] font-gilroy font-light leading-[22px] sm:leading-[28px] lg:leading-[31px] text-left uppercase text-header-1">
              <span className="italic">JULIA</span>
              <span className="font-medium"> HUANG</span>
            </h1>
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="block sm:hidden p-2" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className="block w-5 h-0.5 bg-header-1 mb-1"></span>
              <span className="block w-5 h-0.5 bg-header-1 mb-1"></span>
              <span className="block w-5 h-0.5 bg-header-1"></span>
            </div>
          </button>

          {/* Navigation Menu */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} sm:block w-full sm:w-auto mt-4 sm:mt-[4px]`}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-[48px] justify-center items-start sm:items-center">
              <button 
                role="menuitem"
                className="text-[14px] sm:text-[16px] font-gilroy font-light leading-[17px] sm:leading-[19px] text-left text-header-1 hover:opacity-70 transition-opacity duration-200"
              >
                PROJECTS
              </button>
              <button 
                role="menuitem"
                className="text-[14px] sm:text-[16px] font-gilroy font-light leading-[17px] sm:leading-[19px] text-left text-header-1 hover:opacity-70 transition-opacity duration-200"
              >
                ABOUT
              </button>
              <button 
                role="menuitem"
                className="text-[14px] sm:text-[16px] font-gilroy font-light leading-[17px] sm:leading-[19px] text-left text-header-1 hover:opacity-70 transition-opacity duration-200"
              >
                CONTACT
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;