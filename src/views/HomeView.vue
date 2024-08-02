<script lang="ts">
import { defineComponent } from 'vue';
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import MainContent from './MainContent.vue';


export default defineComponent({
  name: 'HomeView',
  components: {
    Header,
    Sidebar,
    MainContent
  }
})

</script>

<template>
    <main class="">
      <div class="h-screen w-screen bg-blue-500 flex grid grid-flow-row-dense grid-cols-3 grid-rows-3">
        <Sidebar class="row-span-2 absolute"/>
          <div class="col-span-3 m-0 ">
            <Header />
            <MainContent />
            <p>haha homeee</p>
          </div>
        
      </div>
    </main>
</template>
