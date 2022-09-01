import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://challenge-react.alkemy.org/"
})

export const PostLogIn= async (userState) =>{
    return axiosClient.post('', {
        ...userState
    }).then(response =>{
        if(response.status < 300){
            return response.data
        }
        else {
            console.log("Algo no funciona")
        }
    })
    .catch(function(){
        throw "Error"
    })
}

export const GetPlatos= async (PlatoBuscado) =>{
    return axiosClient.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=c8283de8994a476085d2549275d23f5d&query=${PlatoBuscado}`,{})
    .then(function(res){
        return res.data.results
    })
    .catch(function(){
        throw "Error"
    })
}

export const GetPlatosCompleto= async (id) =>{
    return axiosClient.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=c8283de8994a476085d2549275d23f5d`,{})
    .then(function(res){
        return res.data
    })
    .catch(function(){
        throw "Error"
    })
}