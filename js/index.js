const pdImg = document.getElementById('pdImg');


const getData = () => {
        fetch(`../productData.json`)
                .then(res => res.json())
                .then(data => showData(data))
}
getData()

const showData = data => {
        const seeMoreParent = document.getElementById('see-more')
        data.forEach(element => {
                const imgParent = document.createElement('div')
                const createHtml = `
                        <img onClick="getSingleProduct(${element.id})" src="${element.imgUrl}" alt="">
                `
                imgParent.innerHTML = createHtml;
                imgParent.classList = 'see-more'
                seeMoreParent.appendChild(imgParent)
        });
}

const getSingleProduct = id => {
        fetch(`../productData.json`)
                .then(res => res.json())
                .then(data => {
                        const singlePd = data.find(data => data.id === id)
                        productDetails(singlePd)
                })
        
}

const productDetails = data => {
        pdImg.src = data.imgUrl
        console.log(pdImg.src)


}