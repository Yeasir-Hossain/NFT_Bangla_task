import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
// stats data 
import stats from './statsdata'

const Stats = () => {
    return (
        // launchpad stats
        <div className='text-gray-200 px-8 mt-6'>
            <div className="container px-5 py-2 mx-auto">
                <div className="flex flex-col text-center w-full mb-3">
                    <h1 className="font-sans font-extrabold text-4xl">LIVE STATS</h1>
                    <p className="leading-relaxed subtitle text-lg py-2">Solana is in beta, so are we!</p>
                </div>
                <div className='flex justify-center flex-wrap -m-4 text-center'>
                    {/* stats iteration  */}
                    {
                        stats?.map((stat, index) =>
                            <div key={index} className='p-4 w-full sm:1/2 md:w-1/4'>
                                <div className='bg-[#22252B] 
				  border-gray-200 px-4 py-6 rounded-lg
				  hover:-translate-y-2 duration-300'>
                                    {stat?.svg}
                                    {/* counter for the stats
                                visibility sensor package for detecting the visible area of h2
                                */}
                                    <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                                        {({ isVisible }) => (
                                            <h2 className='font-medium text-3xl text-gray-200 h-10'>
                                                {isVisible ? <CountUp end={stat?.status} /> : null}
                                            </h2>
                                        )}
                                    </VisibilitySensor>
                                    <p className='leading-relaxed'>{stat?.description}</p>
                                </div>
                            </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Stats;