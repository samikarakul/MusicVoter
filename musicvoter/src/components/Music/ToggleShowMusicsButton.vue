<template>
<div>
    <button @click="toggleShowMusics">
        <span v-if="showMusics">Hide Musics</span>
        <span v-else>Show Musics</span>
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

</style>