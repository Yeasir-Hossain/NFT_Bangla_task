import React from 'react';

const Heading = ({ heading, subheading }) => {
    // component for the section headings and sub headings 
    // subheading may not be present(as in project utils section ) so it is conditional 
    return (
        <div className="text-center">
            <h2 className='font-sans font-extrabold text-4xl'>{heading}</h2>
            {
                subheading && <h4 className='font-sans text-lg py-2'>{subheading}</h4>
            }

        </div>
    );
};

export default Heading;