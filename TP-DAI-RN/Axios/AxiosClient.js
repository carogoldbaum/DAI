import axios from "axios";
import {TokenService} from '../services/TokenServices.js';

TokenService.getToken();

const axiosClient = axios.create ({
    basedURL:"https://conapp2.herokuapp.com/",

})

export const createUsuario = async () => {
    return axiosClient.post('/rubro', {
        headers: {
            Authorization: 'Bearer ' + TokenService.getToken()
        }
    }).then(response => {
        if(response.status < 300) {
            return response.data
    } else {
        console.log("La llamada salio bien")
    }
    }).catch(error => {
        console.log(error);
        return error;
    });
}

export const getRubro = async () => {
    return axiosClient.post('/rubro', {
        headers: {
            Authorization: 'Bearer ' + TokenService.getToken()
        }
    }).then(response => {
        if(response.status < 300) {
            return response.data
    } else {
        console.log("La llamada salio bien")
    }
    }).catch(error => {
        console.log(error);
        return error;
    });
}