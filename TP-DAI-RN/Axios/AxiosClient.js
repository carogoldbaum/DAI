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
    .catch(function(err) {
        console.log("No funciona", err)
        throw err
    })
}

export const GetPlatos= async (PlatoBuscado) =>{
    return axiosClient.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=bb614d1a2cfe4751b4f2aea0a3844a1c&query=${PlatoBuscado}`,{})
    .then(function(res){
        return res.data.results
    })
    .catch(function(){
        throw "Error"
    })
}

export const GetPlatosCompleto= async (id) =>{
    return axiosClient.get(`https://api.spoonacular.com/recipes/{id}/information/complexSearch?apiKey=bb614d1a2cfe4751b4f2aea0a3844a1c`,{})
    .then(function(res){
        return res.data.results
    })
    .catch(function(){
        throw "Error"
    })
}