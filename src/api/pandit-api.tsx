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