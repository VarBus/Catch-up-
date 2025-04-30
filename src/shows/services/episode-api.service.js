import axios from 'axios';

const episodeApi = 'https://api.tvmaze.com/shows/1/episodes'

const http = axios.create({
    baseURL: episodeApi
})

export class EpisodeApiService {
    static getEpisodes() {
        return http.get(episodeApi)
    }
}