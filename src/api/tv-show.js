import axios from "axios";
import { fake_data, fake_recommendation } from "./fake-data";
import {base_url, header, base_url_recommendation, params, headers, base_url_search, params2, base_url_trailer} from "../config"




  

export class TVShowAPI {

    static async fetchPopulars(){
        const config1 = {
            method: 'get',
            url: base_url,
            headers: header
            };
           const response =  await axios(config1);
           return response.data.results;
    }

    static async fetchRecommendations(tvShowId){

        const config2 = {
            method: 'get',
            url: `${base_url_recommendation}${tvShowId}/recommendations`,
            params: params,
            headers: headers
        };

        const response =  await axios(config2);
        return response.data.results;

        
    }

    static async fetchByTitle(title){

        const config2 = {
            method: 'get',
            url: `${base_url_search}`,
            params: {query: title, include_adult: 'false', language: 'en-US', page: '1'},
            headers: header
        };

        const response =  await axios(config2);
        console.log(response);
        return response.data.results;

        
    }

    static async fetchTrailer(id){

        const config2 = {
            method: 'get',
            url: `${base_url_trailer}${id}/season/1/videos`,
            params: {language: 'en-US'},
            headers: header
        };

        const response =  await axios(config2);
        return response.data.results;

        
    }
    
}

