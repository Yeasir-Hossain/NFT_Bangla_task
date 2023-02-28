import React from 'react';
import Package from './Package';


const Packages = () => {
    // packages data 
    const packages = [
        {
            "title": "Standard",
            "desc": "Best for first collection launch to kickstart your project",
            "previousprice": "20 SOL",
            "newprice": "TBD",
            "items": [
                {
                    "avail": false,
                    "info": <span>Logo + Website Artwork + UI Design</span>,
                },
                {
                    "avail": true,
                    "info": <span>Metadata Generation*</span>,
                },
                {
                    "avail": true,
                    "info": <span>Whitelist Token</span>,
                },
                {
                    "avail": false,
                    "info": <span>Bulk Airdrop</span>,
                },
                {
                    "avail": false,
                    "info": <span>Custom Mint Strategy</span>,
                },
                {
                    "avail": true,
                    "info": <span>Holder Verify</span>,
                },
                {
                    "avail": false,
                    "info": <span>Project Token + Tokenomics</span>,
                },
                {
                    "avail": true,
                    "info": <span>Staking</span>,
                },
                {
                    "avail": true,
                    "info": <span>Sales-Listings Bot</span>,
                },
                {
                    "avail": true,
                    "info": <span>Rarity Checker Bot</span>,
                },
                {
                    "avail": false,
                    "info": <span>Collection Merge</span>,
                },
                {
                    "avail": true,
                    "info": <span>Team Size: <b>1 developer</b></span>,
                },
                {
                    "avail": true,
                    "info": <span>Launch Support: <b>3 months</b></span>,
                },
            ]
    
        },
        {
            "title": "Premium",
            "desc": "Best for projects needing custom strategies to expand",
            "previousprice": "30 SOL",
            "newprice": "TBD",
            "items": [
                {
                    "avail": false,
                    "info": <span>Logo + Website Artwork + UI Design</span>,
                },
                {
                    "avail": true,
                    "info": <span>Metadata Generation*</span>,
                },
                {
                    "avail": true,
                    "info": <span>Whitelist Token</span>,
                },
                {
                    "avail": true,
                    "info": <span>Bulk Airdrop</span>,
                },
                {
                    "avail": true,
                    "info": <span>Custom Mint Strategy</span>,
                },
                {
                    "avail": true,
                    "info": <span>Holder Verify</span>,
                },
                {
                    "avail": true,
                    "info": <span>Project Token + Tokenomics</span>,
                },
                {
                    "avail": true,
                    "info": <span>Staking</span>,
                },
                {
                    "avail": true,
                    "info": <span>Sales-Listings Bot</span>,
                },
                {
                    "avail": true,
                    "info": <span>Rarity Checker Bot</span>,
                },
                {
                    "avail": false,
                    "info": <span>Collection Merge</span>,
                },
                {
                    "avail": true,
                    "info": <span>Team Size: <b>2 developers</b></span>,
                },
                {
                    "avail": true,
                    "info": <span>Launch Support: <b>3 months</b></span>,
                },
            ]
    
        },
        {
            "title": "Enterprise",
            "desc": "Best for projects looking to create brand identities",
            "previousprice": "150 SOL",
            "newprice": "Custom",
            "items": [
                {
                    "avail": true,
                    "info": <span>Logo + Website Artwork + UI Design</span>,
                },
                {
                    "avail": true,
                    "info": <span>Metadata Generation*</span>,
                },
                {
                    "avail": true,
                    "info": <span>Whitelist Token</span>,
                },
                {
                    "avail": true,
                    "info": <span>Bulk Airdrop</span>,
                },
                {
                    "avail": true,
                    "info": <span>Custom Mint Strategy</span>,
                },
                {
                    "avail": true,
                    "info": <span>Holder Verify</span>,
                },
                {
                    "avail": true,
                    "info": <span>Project Token + Tokenomics</span>,
                },
                {
                    "avail": true,
                    "info": <span>Staking</span>,
                },
                {
                    "avail": true,
                    "info": <span>Sales-Listings Bot</span>,
                },
                {
                    "avail": true,
                    "info": <span>Rarity Checker Bot</span>,
                },
                {
                    "avail": true,
                    "info": <span>Collection Merge</span>,
                },
                {
                    "avail": true,
                    "info": <span>Team Size: <b>1 developer</b></span>,
                },
                {
                    "avail": true,
                    "info": <span>Launch Support: <b>3 months</b></span>,
                },
            ]
    
        },
    ]
    // packages section 
    return (
        <div className='px-6 pb-10'>
            <div className='py-2 px-4 mx-auto max-w-screen-xl lg:pt-6 lg:px-6'>
                <div className='mx-auto max-w-screen-md text-center mb-3 lg:mb-6'>
                    <h2 className="mb-3 text-4xl tracking-tight font-extrabold text-gray-200">
                        CUSTOM PACKAGES
                    </h2>
                    <p className="font-sans text-gray-200 sm:text-xl">Providing solutions to hardworking
                        builders who can&apos;t pay for <b><i>&quot;influencer collabs&quot;</i></b>. We believe our technology,
                        innovation &amp; support can drive long-term growth in smaller communities! <br />
                    </p>
                    <p className="text-2xl"><b><i>Organic growth &gt; Paid hype</i></b></p>
                </div>
                <div className='space-y-8 lg:grid 
			  		lg:grid-cols-3 lg:gap-6
					xl:gap-10 lg:space-y-0'>
                    {/* packages iteration  */}
                    {
                        packages?.map((pkg, index) => <Package key={index} pkg={pkg} />)
                    }

                </div>
            </div>
        </div>
    );
};

export default Packages;