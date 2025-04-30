import {Episode} from "../models/episode.entity.js";

export class EpisodeAssembler {
    static toEntityFromResource(resource){
         return new Episode({...resource});

    }

    //el primer data es del axios
    // donde empieza el [] pones un data
    static toEntitiesFromResponse(response){
        return response.data.map(resource => this.toEntityFromResource(resource));
    }
}