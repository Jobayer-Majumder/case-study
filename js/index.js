


fetch(`https://gentle-anchorage-42278.herokuapp.com/getProduct`)
        .then(res => res.json())
        .then(pd => {
                showData(pd)
        })

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
        fetch(`https://gentle-anchorage-42278.herokuapp.com/getProduct`)
                .then(res => res.json())
                .then(data => {
                        const singlePd = data.find(data => data.id === id)
                        productDetails(singlePd)
                })

}

const productDetails = data => {
        const pdImg = document.getElementById('pdImg');
        pdImg.src = data.imgUrl
        let title = document.getElementById('pd-title');        
        title.innerText = data.title
        let pdPrice = document.getElementById('pd-price');        
        pdPrice.innerText = `AED ${data.price}`
}

