<template>
<div>
    <p class="musicTotalVote"> {{ $store.state.musicTotalVotes[musicId-1].totalVote }}</p>
</div>
</template>

<script>
export default {
    data(){
        return{
            tmpId: 1
        }
    },
    props: ['musicId'],
}
</script>

<style>
.musicTotalVote{
    margin:0px;
}
</style>