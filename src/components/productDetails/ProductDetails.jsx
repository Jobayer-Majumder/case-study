import React from 'react';
import ApiCall from '../apiCall/ApiCall';


const ProductDetails = () => {
    const [product, setProduct] = React.useState();
    const [loadingShimmer, setLoadingShimmer] = React.useState(true);

    React.useEffect(() => {
            const api = async () => {
                const response = new ApiCall();
                const pd = await response.api();
                const specificPd = pd.find(pd => pd.id === 1);
                setProduct(specificPd);
                setLoadingShimmer(false);
            }
            api();
    }, []);

    return (
        <>
            <section className='min-h-screen flex items-center'>
                <div className="container px-3 md:px-0 mx-auto py-5">
                    {
                        loadingShimmer ? <div className="py-16 px-12 m-auto shadow card">
                            <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="profilePic animate rounded-md w-full"></div>
                                <div className='wrapper'>
                                    <div className="mt-8 rounded-md animate w-4/5 h-8"></div>
                                    <div className="mt-8 rounded-md animate h-8"></div>
                                    <div className="mt-8 rounded-md animate h-8"></div>
                                    <div className="mt-8 rounded-md animate h-8"></div>
                                    <div className="mt-8 rounded-md animate h-8"></div>
                                </div>
                            </div>
                        </div>
                            :
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-1 bg-gray-100 rounded flex justify-center items-center">
                                    <img src={product?.imgUrl} alt="" className='w-3/4' />
                                </div>
                                <div className="p-1 text-gray-500">
                                    <h1 className='text-2xl py-2' data-testid='title'>{product?.title}</h1>
                                    <h1>AED {product?.price}</h1>
                                    <h3 className='py-5'>Available Sizes {product?.availableSizes.map(s => <span className='px-2' key={Math.random()}>{s}</span>)}</h3>
                                    <h3>Colors</h3>
                                    <div className="inline-block h-12 w-12 border bg-red-500 rounded mr-2"></div>
                                    <div className="inline-block h-12 w-12 border bg-black rounded mr-2"></div>
                                    <div className="inline-block h-12 w-12 border bg-white rounded mr-2"></div>
                                    <div className="inline-block h-12 w-12 border bg-indigo-800 rounded"></div>
                                    <div className='w-full h-16 bg-gray-100 rounded my-3'></div>
                                    <p>{product?.description}</p>
                                </div>
                            </div>
                    }
                </div>
            </section>
        </>
    );
};

export default ProductDetails;