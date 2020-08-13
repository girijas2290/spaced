import axios from 'axios';

export default class Spacecraft {
    constructor(id) {
        this.id = id;
    }

    async getSpacecraft() {
        try {
            const res = await axios(`https://api.spacexdata.com/v3/launches?limit=30&q=${this.id}`);
            console.log(res);
            this.mission_name = res.data.mission_name;
            this.flight_number = res.data.flight_number;
            this.img = res.data.links.mission_patch_small;
            this.launch_year=res.data.launch_year;
            this.launch_success=res.data.launch_success;
            
        } catch (error) {
            console.log(error);
            alert('Something went wrong :(');
        }
    }

    // parseSpacecraft() {
    //     const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
    //     const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
    //     const units = [...unitsShort, 'kg', 'g'];

    //     const newIngredients = this.ingredients.map(el => {
    //         // 1) Uniform units
    //         let ingredient = el.toLowerCase();
    //         unitsLong.forEach((unit, i) => {
    //             ingredient = ingredient.replace(unit, unitsShort[i]);
    //         });

    //         // 2) Remove parentheses
    //         ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

    //         // 3) Parse ingredients into count, unit and ingredient
    //         const arrIng = ingredient.split(' ');
    //         const unitIndex = arrIng.findIndex(el2 => units.includes(el2));

    //         let objIng;
    //         if (unitIndex > -1) {
    //             // There is a unit
    //             // Ex. 4 1/2 cups, arrCount is [4, 1/2] --> eval("4+1/2") --> 4.5
    //             // Ex. 4 cups, arrCount is [4]
    //             const arrCount = arrIng.slice(0, unitIndex);
                
    //             let count;
    //             if (arrCount.length === 1) {
    //                 count = eval(arrIng[0].replace('-', '+'));
    //             } else {
    //                 count = eval(arrIng.slice(0, unitIndex).join('+'));
    //             }

    //             objIng = {
    //                 count,
    //                 unit: arrIng[unitIndex],
    //                 ingredient: arrIng.slice(unitIndex + 1).join(' ')
    //             };

    //         } else if (parseInt(arrIng[0], 10)) {
    //             // There is NO unit, but 1st element is number
    //             objIng = {
    //                 count: parseInt(arrIng[0], 10),
    //                 unit: '',
    //                 ingredient: arrIng.slice(1).join(' ')
    //             }
    //         } else if (unitIndex === -1) {
    //             // There is NO unit and NO number in 1st position
    //             objIng = {
    //                 count: 1,
    //                 unit: '',
    //                 ingredient
    //             }
    //         }

    //         return objIng;
    //     });
    //     this.ingredients = newIngredients;
    // }

}