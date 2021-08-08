<template>
  <div class="home">  
    <button @click="fetchMusics" class="fetchMusicButton">
      <span class="fetchMusicSpan">Fetch</span>
    </button>

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
      showMusics: true,
    }
  },
  methods: {
    toggleShowMusics(){
      this.showMusics = !this.showMusics
    },
    fetchMusics(e){
      this.$store.dispatch('fetchMusics')
      e.target.parentElement.disabled = true
      e.target.style.transform = "translateY(-5px)"
    }
  }
}
</script>

<style>
.home div .musics{
  border: solid 2px black;
  margin: 10px;
  margin-left: 20%;
  border-radius: 50px;
  margin-right: 20%;
  background: rgb(101,139,133);
  background: linear-gradient(90deg, rgba(101,139,133,1) 0%, rgba(37,223,221,1) 54%, rgba(38,155,159,0.9727241238292192) 100%);
}
.fetchMusicButton{
  margin-top: 50px;
  margin-bottom: 30px;
  border: none;
  padding: 0;
  background:#56BD94;
  border-radius: 30px;
}
.fetchMusicSpan{
  border: 0;
  background: #6EE5B5;
  transform: translate(2px, -8px);
  width: 100px;
  height: 40px;
  display: block;
  padding: 12px 42px;
  line-height: 40px;
  text-align: center;
  font-size: 20px;
  border-radius: 30px;
}
.fetchMusicButton:hover span{
  transform: translateY(-5px);
  transition-duration: 500ms;
}
.fetchMusicButton:active span{
  transform: translateY(-2px);
  
  transition-duration: 500ms;
}
</style>