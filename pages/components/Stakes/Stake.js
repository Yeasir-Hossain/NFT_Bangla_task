import Image from 'next/image';
import React from 'react';

const Stake = ({ stake }) => {
    return (
        <div key={stake?.id} className='text-center flex flex-2 flex-col my-2 rounded shadow-sm shadow-black bg-black duration-300 hover:-translate-y-2 justify-between'>
            {/* whole div clickable to see details  */}
            <button onClick={() => handlemintclick(stake?.id)}>
                {/* image of mint  */}
                <div className='relative h-72 w-full '>
                    <Image
                        src={stake?.image}
                        alt={stake?.title}
                        fill
                        className='rounded-lg object-cover'
                    />
                </div>
                {/* title and description of mint  */}
                <div className='p-4'>
                    <h4 className='text-2xl mb-4 font-bold leading-relaxed text-white dark:text-gray-400'>{stake?.title}</h4>
                    <p className='text-clip leading-5 text-lg text-white'>{stake?.description}</p>
                </div>
            </button>
            <button onClick={() => handlemintclick(stake?.id)} className='mt-2 bg-blue-600 hover:bg-blue-700 hover:shadow-lg font-bold text-lg text-white py-2 px-6 rounded mb-0'>
                Stake
            </button>

        </div>
    );
};

export default Stake;