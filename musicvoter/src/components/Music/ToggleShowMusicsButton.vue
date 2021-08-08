<template>
<div>
    <button @click="toggleShowMusics" class="toggleShowMusicsButton">
        <span v-if="showMusics" class="hide">Hide Musics</span>
        <span v-else class="show">Show Musics</span>
    </button>

</div>
</template>

<script>
export default {
    props: ['showMusics'],
    methods: {
        toggleShowMusics(){
            this.$emit('toggleShowMusics')
        },
    }
}
</script>

<style>
.toggleShowMusicsButton{
    padding:0;
    background: rgb(62, 60, 60);
    border-radius: 50px;
    border: none;
}
.hide, .show{
    border: none;
    width: 100px;
    height: 40px;
    display: block;
    padding: 12px 42px;
    text-align: center;
    font-size: 20px;
    transform: translate(2px,-5px);
    color: white;
    border-radius: 50px;
}
.show{
    background: rgb(0,155,255);
    background: linear-gradient(90deg, rgba(0,155,255,1) 0%, rgba(65,198,182,1) 61%, rgba(120,208,226,0.9727241238292192) 100%);
}
.hide{
    background: rgb(255,12,0);
    background: linear-gradient(90deg, rgba(255,12,0,1) 0%, rgba(198,80,65,1) 61%, rgba(226,136,120,0.9727241238292192) 100%);
}
.toggleShowMusicsButton:hover .show{
    transform: translate(-2px);
    transition-duration: 500ms;
}
.toggleShowMusicsButton:hover .hide{
    transform: translate(-2px);
    transition-duration: 500ms;
}
</style>