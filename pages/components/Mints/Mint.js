import Image from 'next/image';
import React from 'react';

const Mint = ({ mint }) => {
    const handlemintclick = (id) => {
        console.log(id);
    }
    return (
        <div className='text-center flex flex-2 flex-col my-2 rounded shadow-sm shadow-black bg-black duration-300 hover:-translate-y-2 justify-between'>
            {/* whole div clickable to see details  */}
            <button onClick={() => handlemintclick(mint?.id)}>
                {/* image of mint  */}
                <div className='relative h-72 w-full '>
                    <Image
                        src={mint?.image}
                        alt={mint?.title}
                        fill
                        className='rounded-lg object-cover'
                    />
                </div>
                {/* title and description of mint  */}
                <div className='p-4'>
                    <h4 className='text-2xl mb-4 font-bold leading-relaxed text-white'>{mint?.title}</h4>
                    <p className='text-clip leading-5 text-lg text-white'>{mint?.description}</p>
                </div>
            </button>
            <button onClick={() => handlemintclick(mint?.id)} className='mt-2 bg-pink-600 hover:bg-pink-800 hover:shadow-lg font-bold text-lg text-white py-2 px-6 rounded'>
                Mint
            </button>

        </div>
    );
};

export default Mint;