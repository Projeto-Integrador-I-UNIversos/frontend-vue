<template>
  <div class="bg-white text-white h-screen w-60 py-3 pl-3">
  <div class="border-[2px] border-inherit rounded-[20px] h-[96vh] px-4">
    <div class="mt-8">
    <ul class="space-y-4">
      <li>
        <AlignJustify color="#000" class="mb-32"/>
      </li>
      <li>
        <a href="#" class="flex items-center gap-4">
         <House color="#000"/>
          <span class="text-gray-700">Home</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex items-center gap-4">
         <MessageCircleMore color="#000"/>
          <span class="text-gray-700">Mensagens</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex items-center gap-4">
          <BellDot color="#000"/>
          <span class="text-gray-700">Notifications</span>
          <span class="bg-red-500 text-white rounded-full px-2 py-1 ml-2">2</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex items-center gap-4">
          <UsersRound color="#000"/>
          <span class="text-gray-700">Escritores</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex items-center gap-4">
          <BookOpenText color="#000"/>
          <span class="text-gray-700">Livros</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex items-center gap-4">
          <Heart color="#000"/>
          <span class="text-gray-700">Favoritos</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex items-center gap-4">
          <Settings color="#000"/>
          <span class="text-gray-700">Configuracoes</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex items-center gap-4">
          <UserRound color="#000"/>
          <span class="text-gray-700">Perfil</span>
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
