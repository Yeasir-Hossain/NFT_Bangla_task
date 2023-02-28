import React from 'react';
import Mint from './Mint';
import Heading from '../Shared/Heading';

// mints data from json file
import mintsdata from '../api/mints.json'

const Mints = () => {
    const mints = mintsdata.mints
    return (
        // mint list section 
        <div id='mint' className='py-4 px-12 pt-12'>
            {/* heading of mints section  */}
            <Heading heading={"LIVE MINTS"} subheading={"Need custom mint-launch solutions?"} />
            {/* mints grid  */}
            <div className='grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {/* mint iteration  */}
                {
                    mints?.map((mint) => <Mint key={mint.id} mint={mint} />)
                }
            </div>
        </div>
    );
};

export default Mints;

