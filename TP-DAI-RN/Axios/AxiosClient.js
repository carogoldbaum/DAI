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
    return axiosClient.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=9eaeb970a14747a4a1bbd15270b5b441&query=${PlatoBuscado}`,{})
    .then(function(res){
        return res.data.results
    })
    .catch(function(){
        throw "Error"
    })
}

export const GetPlatosCompleto= async (id) =>{
    return axiosClient.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=9eaeb970a14747a4a1bbd15270b5b441`,{})
    .then(function(res){
        return res.data
    })
    .catch(function(){
        throw "Error"
    })
}