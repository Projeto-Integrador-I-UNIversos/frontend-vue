<template>
  <aside class="bg-gray-700 p-0 h-full w-60 border-r-2 border-gray-100 bg-white z-10 pt-60" style="background-color: #6807d2;">     

    <ul class="px-4">

      <li class="active flex py-3 bg-slate-50 bg-opacity-25 pl-4 rounded-md">
        <House color="#FFF" class="mr-3"/>
        <p class="text-base text-white">Home</p>
      </li>

      <li class="flex py-3 pl-4">
        <BookmarkCheck color="#FFF" class="mr-3"/>
        <p class="text-base text-white">Salvos</p>
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
aside {
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}

.active {
  border-radius: 10px;
}

</style>
