<script>
import {Episode} from "../models/episode.entity.js";
export default {
  name: "episode-item.component.vue",
  props: {
    episode: {type: Episode, required: true}
  }
}
</script>

<template>
  <pv-card class="m-3 shadow-2">
    <template #header>
      <img
          :alt="episode.name"
          :src="episode.image.medium"
          class="w-full h-60 object-cover"
      />
    </template>

    <template #title>
      <h3 class="text-xl font-bold m-0">{{ episode.name }}</h3>
    </template>

    <template #subtitle>
      <p class="text-sm text-gray-600 mb-1">
        Season {{ episode.season }} | Episode {{ episode.number }}
      </p>
    </template>

    <template #content>
      <p v-html="episode.summary" class="text-sm text-gray-800" />
    </template>

    <template #footer>
      <div class="flex justify-end">
        <a
            :href="episode.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary font-medium hover:underline"
            aria-label="Read more about the episode"
        >
          Read more
        </a>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.p-spacer {
  flex: 1 1 auto;
}

.image-fit {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

pv-card {
  margin: 1rem;
}
</style>