import Image from 'next/image';
import React from 'react';
import logo from '../../../public/Logo.png'
const Header = () => {
    const menu = [
        { name: "Services", color: "purple-700", "link": "#services" },
        { name: "Mints", color: "pink-600", "link": "#mint" },
        { name: "Staking", color: "blue-600", "link": "#staking" },
        { name: "Utilities", color: "teal-600", "link": "#utilities" },
        { name: "Partners", color: "green-700", "link": "#partners" },
    ]
    return (
        <header className='sticky top-0 z-30 w-full px-2 sm:px-4 py-4 bg-black text-white'>
            <div className='flex items-center justify-between mx-auto max-w-7xl'>
                <a href="#home">
                    <div class="ml-2 flex flex-row">
                        <div className='h-[50px] w-[50px]'>
                            <Image
                                src={logo}
                                alt='hand logo'
                            />
                        </div>
                        <span class="font-bold ml-1 mb-1 text-2xl py-2">Bangla Launchpad</span>
                    </div>
                </a>
                <div className='flex items-center space-x-7'>
                <ul className="hidden space-x-7 md:inline-flex rounded">
                    
                </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;