import axios from "axios";


const apiUrl = "https://vedic-pandit-server.onrender.com/get-vedic-pandits";

export const panditApi = async () => {

    try {

        const response = await axios.get('https://vedic-pandit-server.onrender.com/get-vedic-pandits');

        return response.data

    } catch (error) {

        console.error('Error fetching data:', error);

    }

};


const apiUrl2 ="https://vedic-pandit-server.onrender.com/get-youtube-video";

export const bhajanApi = async () => {
    
    try {
        const response = await axios.get("https://vedic-pandit-server.onrender.com/get-youtube-video");

        return response.data
        
    } catch (error) {

        console.error('Error fetching data:', error);
        
    }
}

const apiUrl3 =  "https://vedic-pandit-server.onrender.com/get-product";

export const productApi = async()=>{

    try {
        
        const response=await axios.get("https://vedic-pandit-server.onrender.com/get-product");

        return response.data 

    } catch (error) {
        
        console.error('Error fetching data:', error);
    }
}

const apiUrl4 = "https://vedic-pandit-server.onrender.com/get-all-poojas";

export const poojaApi = async () => {

    try {
        
        const response = await axios.get(apiUrl4)

        return response.data

    } catch (error) {
        console.error('Error fetching data:', error);
    }
    
}

const apiUrl5 = "https://vedic-pandit-server.onrender.com/get-all-poojas";

export const poojaIdApi = async () => {

    try {
        
        const response = await axios.get(apiUrl5)

        return response.data

    } catch (error) {
        console.error('Error fetching data:', error);
    }
    
}

const apiUrl6 = "https://vedic-pandit-server.onrender.com/get-blogs";

export const blogApi = async () => {

    try {
        
        const response = await axios.get(apiUrl6)

        return response.data

    } catch (error) {
        console.error('Error fetching data:', error);
    }
    
}

const apiUrl7 = "https://vedic-pandit-server.onrender.com/get-quotes";

export const quotesApi = async () => {

    try {
        
        const response = await axios.get(apiUrl7)

        return response.data

    } catch (error) {
        console.error('Error fetching data:', error);
    }
    
}

const apiUrl8 = "https://vedic-pandit-server.onrender.com/get-all-samagri-category";

export const samagrihCatApi = async () => {

    try {
        
        const response = await axios.get(apiUrl8)

        return response.data

    } catch (error) {
        console.error('Error fetching data:', error);
    }
    
}