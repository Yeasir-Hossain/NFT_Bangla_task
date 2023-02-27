import Image from 'next/image';
import React from 'react';
import banner from '../../../public/banner.png'
const Banner = () => {
    return (
        //banner 
        <div id='home' class="text-center py-0 px-12">
            <div className='justify-center'>
                <Image
                    src={banner}
                    alt='Bengal Tiger'

                />
            </div>
            {/* <img class="justify-center" src="" /> */}
            <h2 class="title font-bold text-4xl pt-4">Hello Degen!</h2>
            <p class="subtitle text-lg py-2">Bangla Launchpad is secretly
                building a Web 3.0 technology hub for artists &amp; creators currently residing in
                crypto-restricted countries, specially in South Asia. We aim to fight censorship &amp; liberate artists
                so that they
                can showcase the diverse art, culture &amp; history from all around the world!</p>
        </div>

    );
};

export default Banner;