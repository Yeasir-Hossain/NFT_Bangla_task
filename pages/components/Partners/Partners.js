/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Partners = () => {
    const partners = [
        {
            "image": "/partners/BT.png"
        },
        {
            "image": "/partners/DTF.png"
        },
        {
            "image": "/partners/RIC.webp"
        },
        {
            "image": "/partners/APL.png"
        },
        {
            "image": "/partners/MONET.png"
        },
        {
            "image": "/partners/thumbnail-min.png"
        },
        {
            "image": "/partners/MooDoo.png"
        },
        {
            "image": "/partners/PRSPCTR.png"
        },
        {
            "image": "/partners/THBB.png"
        },
    ]
    return (
        // partners section
        <div id='partners' className='px-12'>
            <div className='2xl:mx-auto 2xl:container lg:px-20 md:px-6 px-4'>
                <div className='w-full flex flex-col justify-center items-center'>
                    <div class="flex flex-col justify-center items-center text-center space-y-2">
                        <h1 class="text-4xl lg:text-4xl font-extrabold leading-9 md:leading-7 lg:leading-9">
                            TRUSTED PARTNERS</h1>
                        <p class="text-lg leading-6 text-center w-full md:w-10/12">
                            <b>Staking, WL Mint Site, Holder Verification-Sales-Listings-Rarity Bots</b> &amp; more
                            utilities!
                        </p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 justify-items-around gap-x-6 gap-y-6 xl:gap-x-8 mt-6'>
                        {
                            partners?.map((partner, index) =>
                                <div key={index} className='w-full focus:outline-none border focus:border-gray-800 border-transparent bg-[#22252B] rounded-xl flex justify-center items-center flex-col text-center py-14 px-12 space-y-6 hover:-translate-y-2 duration-300'>
                                    <img src={partner.image} alt="partner image" />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Partners;