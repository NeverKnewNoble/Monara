import axios from "axios";
import { backendUrl } from "@/services/main";
import { categoryCreateParams } from "@/types/categories"

export default class Categories {
    /** 
     * * Function to get the category by categories id
     * @params id
     * @returns
     */
    static async getCategory(id: string) {
        try{
            const response = await axios.get(`${backendUrl}/categories/${id}`)

            if(!response || !response.data){
                return console.log("Failed to get a resposne");
            }

            console.log(JSON.stringify(response.data.user)); // log to check data returned
            
            return response.data;
        }catch(err) {
            console.error(err, "Unable to establish connection with server")
        }
    }

    /**
     * * Funtions to create a category
     * @params 
     * @returns 
     */
    static async createCategory(categoryDetials: categoryCreateParams) {
        try{
            const response = await axios.put(`${backendUrl}/categories`, categoryDetials)

            if(!response || !response.data){
                return console.log("Failed to get a resposne");
            }

            console.log(`category ${categoryDetials.name} created succesfully`);
            return 
        }catch(err){
            console.error("Unable to connec to server", err);
        }
    }
}