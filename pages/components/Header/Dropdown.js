import React from 'react';

const Dropdown = ({ dropdown, menu }) => {
    return (
        <div className="absolute top-0 left-0 right-0 flex flex-col p-2 pb-4 m-2 space-x-3 bg-black rounded shadow" >
            <button className="self-end px-2 ml-2" onClick={dropdown}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span className="sr-only">Close Menu</span>
            </button>
            <ul className="space-y-2">
                {
                    menu?.map((item, index) =>
                        <li key={index} className='flex-grow'>
                            <a href={item?.link} className={`px-4 py-2 font-semibold  hover:text-green-600`}>
                                {item.name}
                            </a>
                        </li>)
                }
            </ul>
        </div>
    );
};

export default Dropdown;