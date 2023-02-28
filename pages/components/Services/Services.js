import React from 'react';

// services data 
import services from './servicesdata'

const Services = () => {
    return (
        // services section 
        <div id='services' className='m-4 md:m-8'>
            <div className="container mx-auto p-4 text-center">
                <h2 className="text-4xl font-extrabold uppercase">core services</h2>
            </div>
            {/* services grid  */}
            <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-1 lg:grid-cols-3">
                {/* services iteration  */}
                {
                    services?.map((service, index) => <div key={index} className='flex flex-col items-center p-4 hover:-translate-y-2 duration-300'>
                        {service?.svg}
                        <h3 className="my-3 text-3xl font-semibold">{service?.title}</h3>
                        {/* services details iteration  */}
                        <div className='space-y-1 leading-tight text-center'>
                            {
                                service?.description?.map((para, index) => <p key={index}>{para}</p>)
                            }
                        </div>

                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Services;