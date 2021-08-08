<template>
<div>
    <button class="upVoteButton" @click="$store.dispatch('upVoteMusicVote', {musicId})"></button>
</div>
</template>

<script>
import upvote_icon from '../../assets/upvote_icon.png'
export default {
    props: ['musicId'],
    mounted(){
        var upvoteButtons = document.getElementsByClassName('upVoteButton')
        upvoteButtons.forEach(upvoteButton => {
            upvoteButton.style.background = 'url("'+upvote_icon+'")';
            
        });
    }
}
</script>

<style>
.upVoteButton{
    width: 35px;
    height: 35px;
    padding: 0;
    border: none;
    margin-top: -10px;
    background-repeat: no-repeat !important;
    background-size: 35px 35px !important;
}
.upVoteButton:hover{
    cursor: pointer;
}
</style>