import axios, {AxiosResponse, AxiosError} from "axios";
import TokenService from "./sorage.service";

import router from "@/router";

const API_URL = 'https://localhost:5001'

const UserService = new class{

    public login (email: string, senha: string) {
        return new Promise<any>((resolve, reject) => {
            if (email && senha) {
                console.log(email , "+",senha );
                
                axios.post(`${API_URL}/login`, {email, senha})
                    .then(response => {
                        resolve(response.data)

                        TokenService.saveToken(response.data.token);
                        router.push({name: 'App'})
                    })
                    .catch((error: AxiosError) => reject(error))
            }
        })  
    }

    public cadastrar(data:[]) {
        return new Promise<any>((resolve, reject) => {
            if (data) {
                axios.post(`${API_URL}/cadastro`, {data})
                    .then(response => {resolve(response.data)})
                    .catch((error: AxiosError) => reject(error))
            }
        })
    }

}


export {UserService}