<template>
  <div class="bg-white text-white h-screen w-60 py-3 pl-3 ">
  <div class="border-[2px] border-inherit rounded-[20px] bg-[#7325bd] text-white h-[96vh] px-4">
    <div class="mt-8">
    <ul class="space-y-4">
      <li>
        <AlignJustify color="#FFF" class="mb-32"/>
      </li>
      <li>
        <RouterLink to="editora" class="flex items-center gap-4">
         <House color="#FFF"/>
          <span class="text-white">Home</span>
        </RouterLink>
      </li>
      <li>
        <a href="#" class="flex items-center gap-4">
         <MessageCircleMore color="#FFF"/>
          <span class="text-white">Mensagens</span>
        </a>
      </li>
      <li>
        <a href="editora/obras-sugeridas" class="flex items-center gap-4">
         <MessageCircleMore color="#FFF"/>
          <span class="text-white">Obras Sugeridas</span>
        </a>
      </li>
      <!--li>
        <a href="#" class="flex items-center gap-4">
          <BellDot color="#FFF"/>
          <span class="text-white">Notifications</span>
          <span class="bg-red-500 text-white rounded-full px-2 py-1 ml-2">2</span>
        </a>
      </li-->
      <li>
        <RouterLink to="editora/list-livros" class="flex items-center gap-4">
          <UsersRound color="#FFF"/>
          <span class="text-white">Livros</span>
        </RouterLink>
      </li>
      <!--li>
        <a href="#" class="flex items-center gap-4">
          <Heart color="#FFF"/>
          <span class="text-white">Favoritos</span>
        </a>
      </li-->
      <!--li>
        <a href="#" class="flex items-center gap-4">
          <Settings color="#FFF"/>
          <span class="text-white">Configuracoes</span>
        </a>
      </li-->
      <li>
        <a href="#" class="flex items-center gap-4">
          <UserRound color="#FFF"/>
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
  Settings
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
    Settings
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
