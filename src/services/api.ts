import axios from 'axios';

export const getMovies = async (value: string) => {
   
    const resp = await axios.get(`${process.env.REACT_APP_API_URL}/?s=${value}`, {
        params:{
            "apiKey": process.env.REACT_APP_API_KEY,
        }
    });

    return resp;

}