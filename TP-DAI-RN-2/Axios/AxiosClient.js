import axios from "axios";


export const GetClima = async (latitud, longitud) => {
    return axios.get(`http://api.weatherunlocked.com/api/current/${latitud},${longitud}?app_id=b41e596c&app_key=34dfbb0f77a5b4dce5abd6ac27eb741d`)
        .then(function (res) {
            console.log('response', res)
            return res.data
        })
        .catch(function (err) {
            console.log("errorrr", err)
            throw err
        })
}

export const GetLocation = async (latitud, longitud) => {
    return axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitud}&lon=${longitud}&apiKey=cf1e8bbba33e47c2b5b5acaf8f124d8b`)
        .then(function (res) {
            console.log('response', res)
            return res.data
        })
        .catch(function (err) {
            console.log("errottttrrr", err)
            throw err
        })
}
