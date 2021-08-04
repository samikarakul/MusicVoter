<template>
    <div>
        <div v-for="music in $store.state.musics" :key="music.musicId" class="musics">
            <Music :music="music" class="music"/>
            <div class="musicVoteAndButtons">
                <MusicUpVoteButton :musicId="music.musicId"/>
                 <MusicTotalVote :musicId="music.musicId" class="musicTotalVote_music"/>
                <MusicDownVoteButton :musicId="music.musicId"/>

            </div>
        </div>
    </div>
</template>

<script>
import Music from './Music.vue'
import MusicTotalVote from '../MusicTotalVote/MusicTotalVote.vue'
import MusicUpVoteButton from '../MusicVoteButtons/MusicUpVoteButton.vue'
import MusicDownVoteButton from '../MusicVoteButtons/MusicDownVoteButton.vue'

export default {
    data(){
        return{
            tmpId: 3
        }
    },
    components: {Music, MusicTotalVote, MusicUpVoteButton, MusicDownVoteButton}

}
</script>

<style>
.musicVoteAndButtons{
    float: right;
    margin-top: -75px;
    margin-right: 50px;
}
</style>