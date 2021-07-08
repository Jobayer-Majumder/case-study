import React from 'react';
import data from '../pdData/productData.json';


const SeeMoreProduct = () => {
    return (
        <>
            <section>
                <div className="container mx-auto">
                    <h1 className="text-lg md:text-2xl py-3 text-gray-500">SEE MORE PRODUCTS</h1>
                    <div className="grid grid-cols-4 gap-4">
                        {
                            data.map((pd, index) => <div className='p-2 rounded bg-gray-200' key={index++}>
                                <img src={pd.imgUrl} alt="" />
                            </div>
                            )
                        }
                    </div>
                </div>
            </section>
            
        </>
    );
};

export default SeeMoreProduct;