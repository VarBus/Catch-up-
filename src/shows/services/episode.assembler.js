import {Episode} from "../models/episode.entity.js";

export class EpisodeAssembler {
    static toEntityFromResource(resource){
         return new Episode({...resource});

    }

    static toEntitiesFromResponse(response){
        return response.data.map(resource => this.toEntityFromResource(resource));
    }
}