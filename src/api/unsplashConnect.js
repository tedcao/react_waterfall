import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID a7e91a3a2ef9f318272b4eb12a08becfdb5b641eb95b3630cd9225e9e598c9ce"
  }
});
