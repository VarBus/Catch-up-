<script>
import EpisodeListComponent from "./shows/components/episode-list.component.vue";
import {Episode} from "./shows/models/episode.entity.js";
import {EpisodeAssembler} from "./shows/services/episode.assembler.js";
import {EpisodeApiService} from "./shows/services/episode-api.service.js";
import ToolbarcontentComponent from "./public/toolbarcontent.component.vue";

export default {
  name: 'App',
  components: {
    ToolbarcontentComponent,
    EpisodeListComponent
  },
  data(){
    return {
      episodes: [],
      episodeApi: new EpisodeApiService
    }
  },
  created(){
    this.getEpisodes();
  },
  methods: {
    async getEpisodes(){
      const response = await EpisodeApiService.getEpisodes();
      this.episodes = EpisodeAssembler.toEntitiesFromResponse(response);
    }
  }
}
</script>

<template>
  <ToolbarcontentComponent></ToolbarcontentComponent>
<EpisodeListComponent :episodes="episodes"></EpisodeListComponent>
</template>

<style scoped>

</style>
