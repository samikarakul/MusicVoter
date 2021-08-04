<template>
  <div class="home">
    <button @click="$store.dispatch('fetchMusics')">Fetch</button>

    <ToggleShowMusicsButton v-if="$store.state.musics.length != 0" :showMusics="showMusics" @toggleShowMusics="toggleShowMusics"/>
    <Musics v-if="showMusics"/>
  </div>
</template>

<script>
import Musics from '../components/Music/Musics.vue'
import ToggleShowMusicsButton from '../components/Music/ToggleShowMusicsButton.vue'

export default {
  name: 'Home',
  components: { Musics, ToggleShowMusicsButton },
  data(){
    return{
      showMusics: true
    }
  },
  methods: {
    toggleShowMusics(){
      this.showMusics = !this.showMusics
    },
  }
}
</script>

<style>
.home div .musics{
  border: solid 2px black;
  margin: 10px;
  margin-left: 20%;
  margin-right: 20%;
}
</style>