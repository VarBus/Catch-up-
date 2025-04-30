<script>
import {Toolbar as PvToolbar} from "primevue";
import LanguageSwitcher from "./language-switcher.component.vue";

export default {
  name: "toolbarcontent.component",
  components: {LanguageSwitcher, PvToolbar}
}
</script>

<template>
<pv-toolbar  style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem; margin: 3rem">
  <template #start>

    <h1>{{$t('title')}}</h1>
  </template>

  <template #end>
    <language-switcher></language-switcher>
  </template>
</pv-toolbar>
</template>

<style scoped>

</style>