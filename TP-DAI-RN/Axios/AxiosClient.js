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
    return axiosClient
    .get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${PlatoBuscado}`,{})
    .then(function(res){
        console.log(res.data.results)
        return res.data.results
    })
    .catch(function(){
        throw "Error"
    })
}