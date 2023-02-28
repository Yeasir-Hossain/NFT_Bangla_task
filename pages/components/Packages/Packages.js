import React from 'react';
import Package from './Package';

// packages data from data.js 
import packages from './packagesdata'

const Packages = () => {
    // packages section 
    return (
        <div className='px-6 pb-10'>
            <div className='py-2 px-4 mx-auto max-w-screen-xl lg:pt-6 lg:px-6'>
                <div className='mx-auto max-w-screen-md text-center mb-3 lg:mb-6'>
                    <h2 class="mb-3 text-4xl tracking-tight font-extrabold text-gray-200">
                        CUSTOM PACKAGES
                    </h2>
                    <p class="font-sans text-gray-200 sm:text-xl">Providing solutions to hardworking
                        builders who can&apos;t pay for <b><i>&quot;influencer collabs&quot;</i></b>. We believe our technology,
                        innovation &amp; support can drive long-term growth in smaller communities! <br />
                    </p>
                    <p class="text-2xl"><b><i>Organic growth &gt; Paid hype</i></b></p>
                </div>
                <div className='space-y-8 lg:grid 
			  		lg:grid-cols-3 lg:gap-6
					xl:gap-10 lg:space-y-0'>
                    {
                        packages?.map((pkg, index) => <Package key={index} pkg={pkg} />)
                    }

                </div>
            </div>
        </div>
    );
};

export default Packages;