import Image from 'next/image';
import React from 'react';
import Mint from './Mint';

const Mints = () => {
    const mints = [
        {
            "id": "1",
            "title": "Celebrity Catz",
            "description": "Celebrity Catz are also getting fcked as part of the Fcked Catz ecosystem",
            "image": "/mints/catz.gif",
        },
        {
            "id": "2",
            "title": "Bengal Tigers",
            "description": "1971 Bengal Tigers is the first historical NFT collection on any blockchain",
            "image": "/mints/nftbangla.png",
        },
        {
            "id": "3",
            "title": "Cryptonian Ghosts",
            "description": "444 unique ghosts are joining the cryptonians world",
            "image": "/mints/cryptonian.png",
        },
        {
            "id": "4",
            "title": "Meta Foxes",
            "description": "1000 Meta Foxes rise from the ashes of the internet foxes rugpull",
            "image": "/mints/metafoxes.webp",
        },
    ]
    const handlemintclick = (id) => {
        console.log(id);
    }
    return (
        // mint list section 
        <div id='mint' className='py-4 px-12 pt-12'>
            <div className="text-center">
                <h2 className='font-sans font-extrabold text-4xl'>LIVE MINTS</h2>
                <h4 className='font-sans text-lg py-2'>Need custom mint-launch solutions?</h4>
            </div>
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