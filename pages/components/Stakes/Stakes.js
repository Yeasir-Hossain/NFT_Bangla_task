import React from 'react';
import Stake from './Stake';

const Stakes = () => {
    const stakes = [
        {
            "id": "1",
            "title": "Royal Ties",
            "description": "500 royal knights honor royal $TIES",
            "image": "/stakes/royalties.png",
        },
        {
            "id": "2",
            "title": "Royal Ivory Club",
            "description": "Mighty Royals quit day jobs to save $IVORY",
            "image": "/stakes/royalivory.webp",
        },
        {
            "id": "3",
            "title": "Fcked Catz",
            "description": "Fcked Catz getting fat on big $BUX",
            "image": "/stakes/fckedcatz.gif",
        },
        {
            "id": "4",
            "title": "Bengal Tigers",
            "description": "1971 Bengal Tigers is the first historical NFT collection on any blockchain",
            "image": "/stakes/bengaltigers.png",
        },
    ]
    return (
        <div id='staking' className='py-4 px-12 pt-8'>
            <div className="text-center">
                <h2 className='font-sans font-extrabold text-4xl'>LIVE STAKING</h2>
                <h4 className='font-sans text-lg py-2'>Tired of high staking fees?</h4>
            </div>
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