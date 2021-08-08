<template>
<div>
    <p class="musicTotalVote"> {{ totalVote }}</p>

</div>
</template>

<script>
export default {
    data(){
        return{
            tmpId: 1
        }
    },
    props: ['musicId', 'totalVote']
}
</script>

<style>
.musicTotalVote{
    margin:0px;
}
</style>