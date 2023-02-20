<template>
  <div class="entry-container mb-3 pointer p-2" @click="$router.push({name: 'Entry', params: {id: entry.id}})">
    <div class="entry-title d-flex">
        <span class="text-success fs-3  fw-bold">{{day}}</span>
        <span class="mx-1 fs-3">{{month}}</span>
        <span class="mx-2 fs-4 fw-light">{{yearDay}}</span>
    </div>

    <div class="entry-container-description">
        {{shortText}}
    </div>
  </div>
</template>

<script>
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']
export default {
    props:{
        entry:{
            type: Object,
            requiered: true
        }
    },
    computed:{
        shortText(){
            return ( this.entry.text.length > 30 ) 
            ? this.entry.text.substring(0,130) + '...' 
            : this.entry.text
        },
        day(){
            const date = new Date(this.entry.date)
            return date.getDate();
        },
        month(){
              const date = new Date(this.entry.date)
            return months[  date.getMonth() ]
        },
        yearDay(){
              const date = new Date(this.entry.date)
            return `${date.getFullYear()}, ${ days[ date.getDay() ] }`
        }

    }
}
</script>

<style lang="scss" scoped>

.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: .3s all ease-in;

    &:hover{
        background: lighten($color: grey, $amount: 25);
        transition: .3s all ease-in;

    }
    &-description{
        font-size: 14px;
    }
}
</style>