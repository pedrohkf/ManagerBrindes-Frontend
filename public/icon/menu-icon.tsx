import * as React from "react";

const MenuIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='22'
    height='22'
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='2'
    className='lucide lucide-menu-icon lucide-menu'
    viewBox='0 0 24 24'
  >
    <path d='M4 5h16M4 12h16M4 19h16'></path>
  </svg>
);

export default React.memo(MenuIcon);
