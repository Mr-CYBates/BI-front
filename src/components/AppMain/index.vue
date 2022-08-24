<template>
    <div>
        <app-link></app-link>
        <router-view></router-view>
    </div>

</template>

<script>
    import AppLink from './AppLink.vue'
    export default {
        components:{
            AppLink,
        },
        name: "index"
    }
</script>

<style scoped>

</style>
