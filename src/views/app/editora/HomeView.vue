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
import { ComboboxAnchor, ComboboxContent, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxItemIndicator, ComboboxLabel, ComboboxRoot, ComboboxSeparator, ComboboxTrigger, ComboboxViewport } from 'radix-vue'
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
  
} from 'lucide-vue-next';


const v = ref('')
const options = ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple']
const vegetables = ['Aubergine', 'Broccoli', 'Carrot', 'Courgette', 'Leek']



export default defineComponent({
  name: 'HomeView',
  components: {
    Header,
    Sidebar,
    MainContent,
    LivroItem,
    Button,
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
    ComboboxAnchor, 
    ComboboxContent, 
    ComboboxEmpty, 
    ComboboxGroup, 
    ComboboxInput, 
    ComboboxItem, 
    ComboboxItemIndicator, 
    ComboboxLabel, 
    ComboboxSeparator, 
    ComboboxTrigger, 
    ComboboxViewport
  },
  data() {
    return {
      livros: [],
      id: '' as string | null,
      ComboboxRoot,
      v,
      options,
      vegetables
    }  
  },
  methods: {
    loadItems() {

    }
  }
})

</script>

<template>
  <div class="layout app ">
      <div class="flex w-full flex-row z-[1000px] bg-[#49117a] absolute inset-x-0 top-0 fixed pl-60 fixed pt-20">
          <div class="w-[30vh] py-3 px-5 fixed ml-[-30vh] bg-[#49117a] h-full ">
              <div class="mt-32 pl-3">
                  <div class="">
                    <ul class="space-y-4">
                        
                        <li>
                          <RouterLink :to="{name: 'Escritor.Home'}" class="flex items-center gap-4">
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
                          <RouterLink :to="{name: 'Escritor.Proposta'}" class="flex items-center gap-4">
                            <UsersRound color="#fff"/>
                            <span class="text-white">Propostas</span>
                          </RouterLink>
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
          </div>
          <div class="flex w-full flex-col pr-5 ">
              <div class="flex justify-start items-center h-[10vh] py-2 px-10 bg-[#49117a] text-white fixed mt-[-10vh] w-full">
                  <!--div>
                      <p class="inter-bold text-xl w-[30vh]">Olá, Lara</p>
                  </div-->
                  <div>
                    <div class="px-2 w-96 mr-[116vh]">
                    
                    </div>
                  </div>
                  <div class="w-full flex justify-end ml-[80vh]">
                      <RouterLink :to="{name: 'Escritor.CadastroObra'}" class="lex bg-white text-[#49117a] flex items-center  rounded-[30px] py-2 px-3">
                          <Plus/>
                          <p class="ml-2">Adicionar Livro</p>
                      </RouterLink>
                  </div>
                  <div class="w-full flex justify-end"></div>
              </div>
              <div class=" w-full bg-[#f9f9f9] h-full  flex justify-center  px-5 pb-10 ">
                  <router-view/>
              </div>
            
          </div>
          
          
      </div>
      
  </div>

</template>

<style scoped>

.banner{
  background-image: url('../../../assets/imagens/background.jpeg');
  background-repeat: no-repeat, repeat;
  background-size: cover;
}

</style>
