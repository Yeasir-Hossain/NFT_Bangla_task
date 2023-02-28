import React from 'react';

const Utility = ({ util }) => {
    return (
        <div className='p-4 w-full sm:w-1/2 lg:w-1/3'>
            <div className='flex items-center justify-between p-4 rounded-lg bg-black shadow-gray-800 shadow-sm duration-300 hover:-translate-y-2'>
                <div className='flex flex-col items-center'>
                    <h2 className='text-lg font-bold'>
                        {util?.title}
                    </h2>
                    <h3 className='mt-2 text-center text-xl font-bold'>
                        <span class="line-through text-gray-300">{util?.originalprice}</span>
                        <span class="text-teal-600"> {util?.offerprice} SOL</span>
                    </h3>
                    <p class="text-sm font-semibold text-gray-400 text-center">Per Collection</p>
                    <button class="text-sm mt-6 px-4 py-2 bg-teal-700 text-white rounded-lg tracking-wider hover:bg-teal-800 outline-none">
                        {util?.button}
                    </button>
                </div>
                <div className='bg-gradient-to-tr from-teal-600 to-teal-900 w-32 h-32  rounded-full shadow-teal-600 border-white border-dashed border-2 flex justify-center items-center'>
                    <div>
                        {util?.svg}
                        <h1 class="text-white font-bold text-lg">{util?.svgdescription}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Utility;