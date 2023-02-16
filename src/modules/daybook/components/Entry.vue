<template>
  <div class="entry-container mb-3 pointer p-2" @click="$router.push({name: 'Entry', params: {id: 10}})">
    <div class="entry-title d-flex">
        <span class="text-success fs-3  fw-bold">15</span>
        <span class="mx-1 fs-3">Julio</span>
        <span class="mx-2 fs-4 fw-light">2022, miercoles</span>
    </div>

    <div class="entry-container-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores doloremque praesentium voluptatem. Beatae modi iusto ut reprehenderit magnam expedita deserunt esse labore est, error, voluptas nostrum perspiciatis molestiae? Corporis?
    </div>
  </div>
</template>

<script>
export default {
    
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