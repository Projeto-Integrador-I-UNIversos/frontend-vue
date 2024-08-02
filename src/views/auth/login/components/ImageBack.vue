<template>

    <div class="container-fluid">
        <img className='image' :src="universe" width="100%" height="100%"/>
    </div>

</template>

<script>
import universe from '../../../../assets/imagens/universe.png'

export default {
    data() {
        return {
            universe
        }
    }
}
</script>

<style scoped>
.container-fluid {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
}
</style>