import React from 'react';
import Stake from './Stake';
import Heading from '../Shared/Heading';
import stakesdata from '../../api/stakes.json'

const Stakes = () => {
    const stakes = stakesdata.stakes
    return (
        // stakes section 
        <div id='staking' className='py-4 px-12 pt-8'>
            <Heading heading={"LIVE STAKING"} subheading={"Tired of high staking fees?"} />
            {/* Stakes grid  */}
            <div className='grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {/* stakes iteration  */}
                {
                    stakes?.map((stake) => <Stake key={stake.id} stake={stake} />)
                }
            </div>
        </div>
    );
};

export default Stakes;