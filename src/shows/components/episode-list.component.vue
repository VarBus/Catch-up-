<script>
import EpisodeItemComponent from "./episode-item.component.vue";

export default {
  name: "episode-list.component",
  components: {
    EpisodeItemComponent
  },
  props: {
    episodes: {type: Array, required: true}
  }
}
</script>

<template>
  <div v-for="episode in episodes">
    <episode-item-component :episode="episode"></episode-item-component>
  </div>
</template>

<style scoped>

</style>