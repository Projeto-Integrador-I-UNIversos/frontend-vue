<script lang="ts">
import { defineComponent } from 'vue';
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import MainContent from './MainContent.vue';
import { ref } from 'vue';
import axios from 'axios';
import LivroItem from '@/components/LivroItem.vue';
import TokenService from '@/service/sorage.service';
import router from '@/router/routes';
import Button from '@/components/ui/button/Button.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Header,
    Sidebar,
    MainContent,
    LivroItem,
    Button
  },
  data() {
    return {
      livros: [],
      id: '' as string | null
    }  
  },
})

</script>

<template>
    <main class="">
      <div class="h-screen w-screen flex grid grid-flow-row-dense grid-cols-3 grid-rows-3">
        <Sidebar class="row-span-2 absolute menu z-50"/>
          <div class="col-span-3 ml-60">
            <Header class="fixed"/>
            <div class="mt-10">
              <RouterView/>
              </div>
           
          </div>
        
      </div>
    </main>
</template>

<style>

.menu {
  position: fixed;
}
</style>
