import React from 'react';
import Utility from './Utility';
import Heading from '../Shared/Heading';
// utilities data 
import utils from './utilitiesdata'

const Utilities = () => {
    return (
        // utilities section 
        <div id='utilities' className='container px-5 py-4 mx-auto'>
            {/* project utilities heading   */}
             <Heading heading={"PROJECT UTILITIES"} />
             {/* utilities iteration  */}
            <div className='flex justify-center flex-wrap m-2'>
                {
                    utils?.map((util, index) => <Utility key={index} util={util} />)
                }
            </div>
        </div>
    );
};

export default Utilities;