<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 entry-day fw-bold">15</span>
            <span class="mx-1 fs-3 entry-month">Julio</span>
            <span class="mx-2 fs-4 entry-date fw-light ">2022, jueves</span>
        </div>

        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>

            <button class="btn btn-primary">
                Subir Foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>
    <hr>

    <div class="d-flex flex-column px-3 h-75">
            <textarea  placeholder="¿Que sucedio hoy?"></textarea>
    </div>
        
    <Fab icon="fa-save"/>
    <img src="https://cdn.pixabay.com/photo/2023/02/06/00/21/scooter-7770871_960_720.png" class="img-thumbn ail" alt="entry-picture">
</template>

<script>
import Fab from "../components/Fab.vue"
export default {
    components: {
        Fab
    }
}
</script>

<style lang="scss" scoped>
    button{
        width: 6rem;
    }


    textarea{
        font-size: 20px;
        border: none;
        height: 100%;

        &:focus{
            outline: none;
        }
    }

    img{
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: .2);
    }
</style>