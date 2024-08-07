import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'fe3834d8cd2f43f6b621dc2261058a06'
    }
})