import React from 'react';
import logo from '../../images/New Project (4).png';


const Navbar = () => {
    return (
        <>
            <nav>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-200 py-2">
                        <div className="p-1 flex justify-center md:justify-start items-center">
                            <img src={logo} alt="" className='w-1/3' />
                        </div>
                        <div className="p-1 col-span-2 md:flex justify-end items-center">
                            <div className="p-1">
                                <input type="search" className="px-2 py-3 w-full shadow rounded outline-none focus:ring-1" placeholder='SEARCH...'/>
                            </div>
                            <div className="text-gray-500 flex justify-between">
                                <a href="/" className='px-2'>MAN</a>
                                <a href="/" className='px-2'>WOMAN</a>
                                <a href="/" className='px-2'>KIDS</a>
                                <a href="/" className='px-2'>WTF</a>
                                <a href="/" className='px-2'>ACCESSORIES</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;