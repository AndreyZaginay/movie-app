import axios from "axios";

export default class MovieService {
    key;
    constructor() {
        this.key = '2e5de327';
    }
    static async getMovieByTitle(titleName) {
        const respose = await axios.get(`http://www.omdbapi.com/?t=${titleName}&apikey=2e5de327`);
        return respose;
    }
}