import axios from 'axios';

export const getMovies = async (value: string) => {

    const resp = await axios.get(`http://www.omdbapi.com/?s=${value}&apikey=697b7aae`);

    return resp;

}