import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3"
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDg2ODk1YTU0MWMwZDJhYzQzMTljYWI5ZjAzZWQwMiIsInN1YiI6IjY1NmIzMGQxODgwNTUxMDEzYTQ3YTllNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qvm0rC3G1XAyDi4mDKwvqGK4-_YlwtLkB_stRVbV8-c"


const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};