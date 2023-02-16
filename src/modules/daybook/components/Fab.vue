<template>
    <div>
        <button class="btn btn-primary">
            <!-- <i class="fa fa-2x fa-save" ></i> -->
            <i class="fa fa-2x"  :class="icon" ></i>
        </button>
    </div>
</template>

<script>
export default {
    props:{
        icon:{
            type: String,
            default: 'fa-plus'
        }
    }
}
</script>

<style lang="scss" scoped>
    button{
        border-radius: 100%;
        bottom: 2rem;
        width: 80px;
        height: 80px;
        position: fixed;
        right: 20px;
         transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 400ms;
  transform: scale(1.1, 1.1) translate3d(0, 0, 0);
  transition: .3s;

    &:hover{
        transform: scale(1.2, 1.2) translate3d(0, 0, 0);
    }
    }
   
</style>