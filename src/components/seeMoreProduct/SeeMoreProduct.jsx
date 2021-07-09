import React from 'react';


const SeeMoreProduct = () => {
    const [product, setProduct] = React.useState([]);
    const [loadingShimmer, setLoadingShimmer] = React.useState(true);

    React.useEffect(() => {
        fetch(`https://gentle-anchorage-42278.herokuapp.com/getProduct`)
            .then(res => res.json())
            .then(pd => {
                setProduct(pd)
                setLoadingShimmer(false)
            })
    }, [])

    return (
        <>
            <section>
                <div className="container mx-auto py-5">
                    <h1 className="text-lg md:text-2xl py-3 text-gray-500">SEE MORE PRODUCTS</h1>
                    {
                        loadingShimmer ? <div class="py-16 px-12 m-auto shadow card">
                                <div className='wrapper grid grid-cols-4 gap-4'>
                                    <div className="mt-12 rounded-md animate h-32"></div>
                                    <div className="mt-12 rounded-md animate"></div>
                                    <div className="mt-12 rounded-md animate"></div>
                                    <div className="mt-12 rounded-md animate"></div>
                                </div>
                            </div>
                            :
                            <div className="grid grid-cols-4 gap-4">
                                {
                                    product.map((pd, index) => <div className='p-2 rounded bg-gray-200' key={index++}>
                                        <img src={pd.imgUrl} alt="" />
                                    </div>
                                    )
                                }
                            </div>
                    }

                </div>
            </section>

        </>
    );
};

export default SeeMoreProduct;