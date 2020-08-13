import axios from 'axios';
import proxy from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`${proxy}https://api.spacexdata.com/v3/launches?limit=1&q=${this.query}`);
            this.result = res.data;
            console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}
