<template>
    <div class="home">
        {{$t('home.HOME')}}
        <div @click="loginin">dsds</div>
    </div>
</template>

<style lang="scss">
    .home{
        display: grid;
        height: 100%;

    }
</style>

<script>
import {login} from '../../api'
export default {
    data () {
        return {}
    },
    methods: {
        loginin(){
            login().then(data => {
                console.log(data)
            })
        }
    }
}
</script>
