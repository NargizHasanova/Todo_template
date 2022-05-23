import axios from "axios";


export const Axios = axios.create({
    baseURL: "https://todos-2aa04-default-rtdb.firebaseio.com/"
})