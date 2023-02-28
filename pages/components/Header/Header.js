import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../../public/Logo.png'
import Dropdown from './Dropdown';
const Header = () => {
    //navbar links
    const menu = [
        { name: "Services", color: "bg-purple-700", hover: "hover:bg-purple-800", "link": "#services" },
        { name: "Mints", color: "bg-pink-600", hover: "hover:bg-pink-800", "link": "#mint" },
        { name: "Staking", color: "bg-blue-600", hover: "hover:bg-blue-800", "link": "#staking" },
        { name: "Utilities", color: "bg-teal-600", hover: "hover:bg-teal-800", "link": "#utilities" },
        { name: "Partners", color: "bg-green-700", hover: "hover:bg-green-800", "link": "#partners" }
    ]
    const [displayDropdown, setDisplayDropdown] = useState(false);

    const dropdown = () => {
        displayDropdown ? setDisplayDropdown(false) : setDisplayDropdown(true)
    }
    return (
        <header className='sticky top-0 z-30 w-full px-2 sm:px-4 py-4 bg-black text-white'>

            <div className='flex items-center justify-between mx-auto max-w-7xl'>
                {/* icon of bangla nft  */}
                <a href="#home">
                    <div className="ml-2 flex flex-row">
                        <div className='h-[50px] w-[50px]'>
                            <Image
                                src={logo}
                                alt='hand logo'
                            />
                        </div>
                        <span className="font-bold ml-1 mb-1 text-2xl py-2">Bangla Launchpad</span>
                    </div>
                </a>
                {/* menu for screens greater than tablets */}
                <div className='flex items-center space-x-7'>
                    <ul className="hidden space-x-7 md:inline-flex rounded">
                        {/* navbar links iteration  */}
                        {
                            menu.map((item, index) =>
                                <li key={index} className='flex-grow'>
                                    <a href={item?.link} >
                                        <button className={`px-4 py-2 font-semibold ${item?.color} ${item?.hover} rounded-md`}>{item.name}
                                        </button></a>
                                </li>)
                        }
                    </ul>
                    <div className="inline-flex md:hidden">
                        <button className='px-2' onClick={dropdown}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path>
                            </svg>
                            <span className="sr-only">Open Menu</span>
                        </button>
                        {/* menu for mobile and tablets  */}
                        {
                            displayDropdown && <Dropdown dropdown={dropdown} menu={menu} />
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;