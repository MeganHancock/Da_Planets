import { Auth0Provider } from "@bcwdev/auth0provider";
import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";

export class GalaxyController extends BaseController {
    constructor() {
        super('api/galaxy')
        this.router
            .get('', this.getGalaxies)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createGalaxy)
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

    /**
  * @param {import("express").Request} request
  * @param {import("express").Response} response
  * @param {import("express").NextFunction} next
  */
    async createGalaxy(request, response, next) {
        try {
            const galaxyData = request.body
            // @ts-ignore
            const userId = request.userInfo.id
            galaxyData.creatorId = userId
            const newGalaxy = await galaxiesService.createGalaxy(galaxyData)
            response.send(newGalaxy)
        } catch (error) {
            next(error)
        }
    }

}