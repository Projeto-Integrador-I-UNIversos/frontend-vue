<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import Label from '@/components/ui/label/Label.vue';
import Button from '@/components/ui/button/Button.vue';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Checkbox from '@/components/ui/checkbox/Checkbox.vue';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Heart } from 'lucide-vue-next';
import banner from '@/assets/imagens/5432299.jpg'
import pequeno_principe from '@/assets/imagens/o-pequeno-principe.png'
import TokenService from '@/service/sorage.service';

export default defineComponent({
    name: 'Obra',
    components: {
        Input,
        Label,
        Button,
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuLabel,
        DropdownMenuRadioGroup,
        DropdownMenuRadioItem,
        DropdownMenuSeparator,
        DropdownMenuTrigger,
        Checkbox,
        Select,
        SelectContent,
        SelectGroup,
        SelectItem,
        SelectLabel,
        SelectTrigger,
        SelectValue,
        Heart
    },
    data() {
      return {
        data: {
          id: 1,
          titulo: 'Pequeno Principe',
          autor: 'Antoine de Saint-Exupéry',
          descricao: 'O pequeno príncipe é um famoso livro da literatura infantil europeia. Narra acontecimentos vividos por um menino originário do asteroide B 612. Após a queda de um avião no deserto do Saara, o piloto faz amizade com essa sábia criança, que consegue ver o que os adultos são incapazes.A obra possui tempo cronológico e um narrador personagem. Apresenta personagens solitários em busca de um sentido para as suas existências. Publicado, pela primeira vez, em 1943, esse livro apresenta elementos fantásticos e procura valorizar as coisas simples da vida.',
          capa: pequeno_principe,
          generos: [
            {id: 1, nome:'Literatura infantil'},
            {id: 2, nome:'Fábula'},
            {id: 3, nome: 'Novela'},
            {id: 4, nome:'Ficção especulativa'},
        ]
        }
      }
    },
    setup() {
      const Entity = ref({
        id: 1,
        titulo: '',
        escritor: '',
        descricao: '',
        capa: '',
        genero: ''
      })

      function loadItems() {
        const URL = 'http://localhost:5001';


        const id = TokenService.getName();
        axios.get(`${URL}/livro/${id}`)
          .then((response) => {
            const escritor = response.data.idEscritor

            Entity.value.titulo = response.data.titulo;
            Entity.value.escritor = escritor
            Entity.value.descricao = response.data.descricao;
            Entity.value.capa = response.data.capa;
            Entity.value.genero = response.data.genero;
          })
          .catch((error) => {console.log(error);
          })
      }

      async function getEscritor(id:any) {
      try {
        const URL = 'http://localhost:5001';
        const response = await axios.get(`${URL}/escritores/${id}`)
        return response.data.nome;
      }
      catch (error) {
        console.error("Erro ao carregar os itens:", error);
      }
      
    }

      onMounted(() => {
        loadItems()
      })

      return {
        Entity
      }
    }



})
</script>


<template>
    <div class="flex flex-col pt-20 flex justify-center bg-[#f9f9f9] h-[95vh]">
      <div class="flex flex-row justify-center px-[10%]">
        <div class="flex w-[70%] flex-col text-left text-[#6208b8]">
          <h1 class="inter-base pb-4" >{{ Entity.titulo }}</h1>
          <p class="inter-base pb-2" >{{ Entity.escritor }}</p>
          <div class="flex" >
            <div>
              <div class="flex mr-2 my-2 bg-[#e8d6fa] py-1 px-3 rounded-[20px]" >{{ Entity.genero }}</div>
            </div>
          </div>
         
          <p class="inter-light mt-3" >{{ Entity.descricao }}</p>
          <div class="flex my-10 items-center" >
            <Button class="bg-indigo-400 hover:bg-indigo-500 text-white inter-base rounded-[30px] w-[40%]" >Enviar Proposta</Button>
            <Button class="bg-indigo-400 hover:bg-indigo-500 text-white inter-base rounded-[30px] w-[40%] mx-3" >Download PDF</Button>
            <Heart class="mx-10 cursor-pointer" />
          </div>
        </div>
        <div class="flex justify-center">
          <img :src="Entity.capa" width="60%"  class="rounded-[20px]">
        </div>
      </div>
     
  </div>
</template>

<style>
.form {
    width: 100vh;
}

.input {
    border-radius: 6px;
}

.button {
    border-radius: 10px;
}

.banner {
    background-image: url("@/assets/imagens/5432299.jpg");
}

.input-group input {
  background: transparent;
}

.input-group label {
  position: relative;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 16px;
  color: #fff;
  padding: 0 5px;
  pointer-events: none;
}

.input-group input:focus~label {
background: #000;
font-size: 12px;
}

</style>
