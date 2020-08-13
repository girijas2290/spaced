import axios from 'axios';


export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`https://api.spacexdata.com/v3/launches?limit=30&q=${this.query}`);
            this.result = res.data;
            console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}
