import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaDiscord } from 'react-icons/fa'
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'


const Footer = () => {
    return (
        // footer section 
        <footer className="text-center text-white bg-black">
            <div className="container text-xl p-2 pt-12 mx-auto">
                {/* social media icons  */}
                <div className="flex justify-center mb-2 space-x-9">
                    <a href="https://facebook.com/nftbangla" target="_blank" >
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com/nftbangla" target="_blank" >
                        <AiOutlineTwitter />
                    </a>
                    <a href="https://www.instagram.com/nftbangla/" target="_blank" >
                        <AiOutlineInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/nft-bangla-1835a1243/" target="_blank" >
                        <FaLinkedinIn />
                    </a>
                    <a href="https://discord.com/invite/tqkErZEgjP" target="_blank">
                        <FaDiscord />
                    </a>
                </div>
            </div>
            {/* copyright passage  */}
            <div className="text-center p-4">
                © 2022 Copyright:
                <a href="https://twitter.com/nftbangla" target="_blank">NFT Bangla Launchpad</a>
            </div>
        </footer>
    );
};

export default Footer;