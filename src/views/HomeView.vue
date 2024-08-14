<script lang="ts">
import { defineComponent } from 'vue';
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import MainContent from './MainContent.vue';
import { ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'HomeView',
  components: {
    Header,
    Sidebar,
    MainContent
  },
  data() {
    return {
      data: ''
    }  
  },
  methods: {
    loadItems() {

      const URL = 'http://localhost:5001';
      const response =  axios.post(`${URL}/usuarios`)
    }
  }
})

</script>

<template>
    <main class="">
      <div class="h-screen w-screen flex grid grid-flow-row-dense grid-cols-3 grid-rows-3">
        <Sidebar class="row-span-2 absolute"/>
          <div class="col-span-3 m-0 ">
            <Header />
            <RouterView/>
            <div v-for="item in data">
              <p>{{ item }}</p>
            </div>
          </div>
        
      </div>
    </main>
</template>