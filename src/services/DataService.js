import axios from 'axios';

class DataService {
    static async getProjects() {
        var returnData = {};
        await axios.get("https://apps.aecom-digital.com/excellence/projects")
            .then(function (successResponse) {

                // Logic to get all unique categories
                let categories = [], textCat = [];
                successResponse.data.map(item => {
                    item.categories.map(category => {
                        if (textCat.indexOf(category.Category_title) === -1) {
                            categories.push(category);
                            textCat.push(category.Category_title);
                            category.projects=[];
                        }
                    })
                })

                // Logic to group all projects by categories
                successResponse.data.map(project => {
                    project.categories.map(cat=>{
                        let i = textCat.indexOf(cat.Category_title);
                        categories[i].projects.push(project);
                    })
                })

                returnData = categories;
            })
            .catch(function (failedResponse) {
                console.error(failedResponse);
            })
            .finally(function () { });
        return returnData;
    }
}

export default DataService;