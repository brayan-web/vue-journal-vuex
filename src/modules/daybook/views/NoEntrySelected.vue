<template>
    <div class="d-flex justify-content-center">
       <h1 class="align-self-center">No hay nada seleccionado</h1> 
    </div>

    <Fab  @set-entry="createEntry"/>
</template>

<script>
import Fab from '../components/Fab.vue'
export default {
    components:{
        Fab
    },
    methods: {
        createEntry(){
            this.$router.push({
                name: 'Entry',
                params:{
                    id: 'new'
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    div{
        
        height: 100vh;
    }
</style>