import React from 'react';

const Services = () => {

    // services information 
    const services = [
        {
            "title": "Brand Design",
            "description":
                [
                    "Identity & Outlook", "Logo & Website", "Frontend UI/UX", "Graphics & Artwork"
                ],
            "svg": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-purple-700">
                <path fill-rule="evenodd" d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.472l3.386-5.079A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497.75.75 0 00-.7 1.123 5.25 5.25 0 009.8-2.62 3.75 3.75 0 00-3.75-3.75z" clip-rule="evenodd"></path>
            </svg>
        },
        {
            "title": "Project Kickstart",
            "description":
                [
                    "Collection Launch", "Token & Staking", "Discord Bots", "Raffles (coming soon)"
                ],

            "svg": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-purple-700">
                <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z"></path>
            </svg>
        },
        {
            "title": "Growth Strategy",
            "description":
                [
                    "Custom Utility", "Bot Innovation", "Comic Art (coming soon)", "Animation (coming soon)"
                ],
            "svg": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-purple-700">
                <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 01.878.645 49.17 49.17 0 01.376 5.452.657.657 0 01-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 01-.595 4.845.75.75 0 01-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 01-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 01-.658.643 49.118 49.118 0 01-4.708-.36.75.75 0 01-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 005.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82.75.75 0 01.83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 00.657-.642z"></path>
            </svg>
        }
    ]
    return (
        // services section 
        <div id='services' className='m-4 md:m-8'>
            <div className="container mx-auto p-4 text-center">
                <h2 className="text-4xl font-extrabold uppercase">core services</h2>
            </div>
            <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-1 lg:grid-cols-3">
                {/* services iteration  */}
                {
                    services.map((service, index) => <div key={index} className='flex flex-col items-center p-4 hover:-translate-y-2 duration-300'>
                        {service.svg}
                        <h3 className="my-3 text-3xl font-semibold">{service.title}</h3>
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