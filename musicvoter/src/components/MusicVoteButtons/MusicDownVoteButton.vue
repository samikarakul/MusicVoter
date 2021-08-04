<template>
<div>
    <button class="downVoteButton" @click="$store.dispatch('downVoteMusicVote', {musicId})"></button>
</div>
</template>

<script>
import downvote_icon from '../../assets/downvote_icon.png'
import upvote_icon from '../../assets/upvote_icon.png'


export default {
    props: ['musicId'],
    mounted(){
        var downVoteButtons = document.getElementsByClassName('downVoteButton')
        downVoteButtons.forEach(downVoteButton => {
            downVoteButton.style.background = 'url("'+downvote_icon+'")';
            
        });
    }
}
</script>

<style>
.downVoteButton{
    width: 35px;
    height: 35px;
    padding: 0;
    border: none;
    margin-top: -6px;
    /* margin-right: -50px; */
    background-repeat: no-repeat !important;
    background-size: 35px 35px !important;
}
.downVoteButton:hover{
    cursor: pointer;
}
</style>