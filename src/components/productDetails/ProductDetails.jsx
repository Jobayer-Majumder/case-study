import React from 'react';
import logo from '../../images/red t-shirt.png';
import data from '../pdData/productData.json'

const ProductDetails = () => {

    const firstPd = data.find(pd => pd.id === 1)
    console.log(firstPd)

    return (
        <>
            <section>
                <div className="container mx-auto py-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-1 bg-gray-100 rounded flex justify-center items-center">
                            <img src={logo} alt="" className='w-3/4'/>
                        </div>
                        <div className="p-1">
                            <h1 className='text-2xl py-2'>{firstPd.title}</h1>
                            <h1>AED {firstPd.price}</h1>
                            <h3 className='py-5'>Available Sizes S M L XL</h3>
                            <h3>Colors</h3>
                            <div className='w-full h-16 bg-gray-100 rounded'></div>
                            <p>{firstPd.description}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetails;