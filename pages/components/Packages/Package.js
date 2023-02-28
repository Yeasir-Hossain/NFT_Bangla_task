import React from 'react';

const Package = ({ pkg }) => {
    return (
        // per package div 
        <div className="flex flex-col relative p-6 mx-auto max-w-lg text-center text-gray-200 bg-[#22252B] rounded-lg border-2 border-gray-200 shadow xl:p-8 hover:-translate-y-2 duration-300">
            <h3 className="mb-4 text-4xl font-bold">{pkg.title}</h3>
            <p className="font-light text-gray-400 sm:text-lg"><i>{pkg.desc}</i></p>
            <div className="flex justify-center items-baseline my-4">
                <span className="mr-2 text-3xl font-bold"><s>{pkg.previousprice}</s><br />{pkg.newprice}</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
                {pkg.items.map((item, index) =>
                    <li key={index} className="flex items-center space-x-3">
                        {item.avail ?
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                            :
                            <svg className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>}
                        {item.info}
                    </li>)}
            </ul>
            <button type="button" className="mt-2 bg-blue-600 hover:bg-blue-700 hover:shadow-lg font-bold text-lg text-white py-2 px-6 rounded mb-0">
                <a href="https://discord.com/invite/tqkErZEgjP" target="_blank">Contact Us</a>
            </button>
        </div>
    );
};

export default Package;