// Fetch ou Axios
import axios from "axios";
// import "dotenv/config";

// const NODE_ENV = process.env.NODE_ENV;
// const URL = NODE_ENV === "development" ? "http://localhost:3000/api" : "/api";
const URL = "https://projeto-spotify-fullstack.onrender.com/api"; // URL no ambiente do deploy

// const URL = "http://localhost:3000/api"; Variável de ambiente de desenvolvimento

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);
// console.log(responseArtists.data);
// console.log(responseSongs.data);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

