// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Crawl from "App/Services/Crawl";

export default class WordsController {
    public async show({response}){
        const crawl = new Crawl();

        const result = await crawl.handle('table');
 
        return result;
    }
}
