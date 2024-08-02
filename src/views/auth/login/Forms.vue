<template>
    <div class="d-flex flex-row">
        <ImageBack/>
        <FormsLogin/>
    </div>
</template>

<script lang="ts">
import ImageBack from './components/ImageBack.vue';
import { defineComponent } from 'vue';
import FormsLogin from './components/FormsLogin.vue';


export default defineComponent({
    name: 'Forms',
    components: {
        FormsLogin,
        ImageBack
    }
})

</script>

<style>
.d-flex{
 display: flex;
 flex-direction: row;
 
}
</style>