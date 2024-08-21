<template>
  <aside class="bg-gray-700 p-0 h-full w-60 border-r-2 border-gray-100 bg-white z-10">
    <div class="p-10 content-usuario bg-stone-200 w-52 h-72 mt-10 border-2 rounded-mg flex flex-col" style="border-top-right-radius: 20px; border-bottom-right-radius: 20px;">
      <div class="w-32 h-32" >
        <img src="../../public/assets/images/rayssa.jpg" style="border-radius: 20px;"/>  
      </div>
      <p class="mt-4 text-black">Editora</p>
      <p class="text-xl text-black">Rayssa Leal</p>
    </div>

    <ul class="p-10">

      <li class="flex py-3">
        <House color="#000" class="mr-3"/>
        <p class="text-xl text-black">Home</p>
      </li>

      <li class="flex py-3">
        <User color="#000" class="mr-3"/>
        <p class="text-xl text-black">Escritores</p>
      </li>

      <li class="flex py-3">
        <BookmarkCheck color="#000" class="mr-3"/>
        <p class="text-xl text-black">Salvos</p>
      </li>
    </ul>

  </aside>
</template>

<script lang="ts">
import { House, User, BookmarkCheck } from 'lucide-vue-next';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Sidebar',
  components: {
    House,
    User, 
    BookmarkCheck
  }
})
</script>

<style scoped>


</style>
