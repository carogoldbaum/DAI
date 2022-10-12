import axios from "axios";


export const GetClima= async (latitud, longitud) =>{
    return axios.get(`http://api.weatherunlocked.com/api/current/${latitud},${longitud}?app_id=b41e596c&app_key=34dfbb0f77a5b4dce5abd6ac27eb741d`,{})
    .then(function(res){
        return res.data
    })
    .catch(function(){
        throw "Error"
    })
}
