import axios from "axios";
import { backendUrl } from "@/services/main";
import { signUpParams, loginParams } from "@/types/auth"

export default class Authentication {    
    /**
     * * This function calls signup api for user signup and returns a JWT upon successful signup
     * @param credentials
     * @returns
     */
    static async signupRequest(credentials: signUpParams) {
        try {
            // console.log("Sending signup request with credentials:", credentials); // log to show data sent to server
            const response = await axios.post(`${backendUrl}/auth/register`, credentials, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // console.log(`backend response: ${JSON.stringify(response.data)}`)  // Console to check resposne of server on signup
            if (!response || !response.data) {
                return console.log("Failed to get a resposne");
            }

            // Store the JWT token and user data in local storage
            localStorage.setItem('token', response.data.access_token);
            localStorage.setItem('user', JSON.stringify(response.data.user));

            console.log("Signed up succesfully!!")
            return { ...response.data.user };
        } catch (err) {
            console.error(`Unable to communicate with the server, ${err}`);
            throw err;
        }
    }


    /**
     * * This function calls login api for user login
     * @param credentials 
     * @returns 
     */
    static async loginRequest(credentials: loginParams) {
        try {
            const response = await axios.post<loginParams>(`${backendUrl}/auth/login`, credentials);
            
            if (!response || !response.data) {
                return console.log("Failed to get a resposne")
            }

            console.log("Logged in successfully")
            return response.data;
        } catch (err) {
            console.error(err, "Unable to login, try again");
        }
    }
}
