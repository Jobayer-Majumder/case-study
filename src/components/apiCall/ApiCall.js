class ApiCall {
    api(){
        return fetch(`https://gentle-anchorage-42278.herokuapp.com/getProduct`)
                .then(res => {
                    return res.json()
                });
    }
}

export default ApiCall;