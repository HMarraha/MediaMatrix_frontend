import axios from "axios"


const elasticClient = axios.create({
    baseURL: 'http://localhost:9200',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default elasticClient