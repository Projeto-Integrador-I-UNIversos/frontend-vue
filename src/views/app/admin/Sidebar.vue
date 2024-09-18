<script lang="ts">
import { 
  House, 
  User, 
  BookmarkCheck, 
  AlignJustify, 
  MessageCircleMore, 
  BellDot,
  UsersRound,
  BookOpenText,
  Heart,
  UserRound,
  Settings,
  Book
} from 'lucide-vue-next';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Sidebar',
  components: {
    House,
    User, 
    BookmarkCheck,
    AlignJustify,
    MessageCircleMore,
    BellDot,
    UsersRound,
    BookOpenText,
    Heart,
    UserRound,
    Settings,
    Book
  }
})
</script>

<template>
  <div class="text-white h-screen w-60 pl-3 pt-4">
  <div class="border-[2px] border-white h-[96vh] px-6 bg-[#7325bd] rounded-[20px]">
    <div class="mt-8">
    <ul class="space-y-4">
      <li class="mb-32">
        <div class="">
          <AlignJustify color="#000" class="border-[1px] w-10 border-gray-300 rounded-[20px] h-10 p-2 bg-white ml-[98%]"/>
        </div>
        
      </li>
      <li>
        <RouterLink to="escritor" class="flex items-center gap-4">
         <House color="#fff"/>
          <span class="text-white">Home</span>
        </RouterLink>
      </li>
      <li>
        <a href="#" class="flex items-center gap-4">
         <MessageCircleMore color="#fff"/>
          <span class="text-white">Mensagens</span>
        </a>
      </li>
      <!--li>
        <a href="#" class="flex items-center gap-4">
          <BellDot color="#fff"/>
          <span class="text-white">Notifications</span>
          <span class="bg-red-500 text-white rounded-full px-1 py-1 ml-2">2</span>
        </a>
      </li-->
      <li>
        <RouterLink to="admin/list-users" class="flex items-center gap-4">
          <UsersRound color="#fff"/>
          <span class="text-white">Usuarios</span>
        </RouterLink>
      </li>
      <li>
        <router-link to="admin/list-livros" class="flex items-center gap-4">
          <BookOpenText color="#fff"/>
          <span class="text-white">Livros</span>
        </router-link>
      </li>
      <!--li>
        <a href="#" class="flex items-center gap-4">
          <Heart color="#fff"/>
          <span class="text-white">Favoritos</span>
        </a>
      </li-->
      <!--li>
        <a href="#" class="flex items-center gap-4">
          <Settings color="#fff"/>
          <span class="text-white">Configuracoes</span>
        </a>
      </li-->
      <li>
        <a href="#" class="flex items-center gap-4">
          <UserRound color="#fff"/>
          <span class="text-white">Perfil</span>
        </a>
      </li>
    </ul>
  </div>
</div>
  <div class="mt-16 flex justify-between items-center">
    
   
  </div>
</div>
</template>


<style scoped>
aside {
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}

.active {
  border-radius: 10px;
}

</style>
