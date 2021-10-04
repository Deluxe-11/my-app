// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Crawl from 'App/Services/Crawl'

export default class WordsController {
  public async show({ request, response }) {
    const crawl = new Crawl()

    const word = request.param('word')

    let result: any = null

    try {
      result = await crawl.handle(word)
    } catch (e) {
      return response.status(400).send({
        message: 'Lay that bai',
        data: null,
      })
    }

    return {
      message: 'Lấy thành công',
      data: result,
    }
  }
}
