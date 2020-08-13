import axios from 'axios';


export default class launchyear {
    constructor(query) {
        this.query = query;
    }

    async getYears() {
        try {
            const res = await axios(`https://api.spacexdata.com/v3/launches?limit=30&launch_year=${this.query}`);
            this.result = res.data;
            console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }

    parseSpacecraft() {
            const years = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
            

            const Yeardata = res.data.map(el => {
                
                const filteryear=years.filter((year, i) => {
                    return year.includes(years[i]);
                });



            });

            if(Yeardata.length>0)
            {
                console.log(Yeardata);
            }
    
            
        }
    
}
