import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";

export class GalaxyController extends BaseController {
    constructor() {
        super('api/galaxy')
        this.router
            .get('', this.getGalaxies)
    }
    /**
  * @param {import("express").Request} request
  * @param {import("express").Response} response
  * @param {import("express").NextFunction} next
  */
    async getGalaxies(request, response, next) {
        try {
            const galaxies = await galaxiesService.getGalaxies()
            response.send(galaxies)
        } catch (error) {
            next(error)
        }
    }



}