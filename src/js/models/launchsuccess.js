import axios from 'axios';


export default class launchsuccess {
    constructor(query) {
        this.query = query;
    }

    async getSuccess() {
        try {
            const res = await axios(`https://api.spacexdata.com/v3/launches?limit=30&launch_success=${this.query}`);
            this.result = res.data;
            console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }

    parseLaunch()
    {
        const success = ["true","false"];
                    
        const filteredsuccess = success.filter((value,i) => {
               const searchTextMatch = value.text.includes(success[i]);
                                       
               return searchTextMatch;
            });
    
            res.data=filteredsuccess;   
            
    }
    
    
}
