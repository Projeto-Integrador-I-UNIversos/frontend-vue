<script lang="ts">
import { defineComponent } from 'vue';
import Button from './ui/button/Button.vue';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import image from '../assets/imagens/editora.jpg'

export default defineComponent({
  name: 'EditoraItem',
  components: {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Button
  },
  data() {
    return {
      image
    }
  },
  props: {
    editora: { type: String, required: true },
    idEditora: { type: Number, required: true }
    //capaLivro: { type: String, required: true },
  },
  computed: {
    // caminhoCompletoCapa(): string {
    //   // Construa o caminho completo usando um caminho absoluto a partir da pasta public
    //   const caminho =  `../../public/assets/imagens/${this.capaLivro}`;
    //   console.log(caminho);
      
    //   return caminho;
    // }
  }
})
</script>

<template>
  <!--div class="livro-item border p-4 m-4 shadow-lg rounded-lg cursor-pointer" @click="$router.push(`/app/livros/${EditoraLivro}/editar`)">
    <img :src="caminhoCompletoCapa" alt="Capa do Livro" class="object-cover mb-4"/>

    <h2 class="text-xl font-bold">{{ editora }}</h2>
    <p>{{ idLivro }}</p>
    <div>
    </div>
  </div-->
  <RouterLink :to="{name: 'Escritor.Editora', params:  {id : `${idEditora}`}}" class="flex w-full justify-center p-0 m-0 z-1 text-black ">
    <div class=" p-0 justify-center flex flex-col">
      <!--img :src="caminhoCompletoCapa" alt="Capa do livro" width="150px" class="border ml-2"/-->
      <img :src="image" alt="Capa do livro" width="150px" class="border"/>

      <div class=" flex justify-center">
        <h3 class="flex text-center pt-2  text-[13px]">{{ editora }}</h3>
      </div>
    </div>
  </RouterLink>
</template>

<style>

.border {
  border-radius: 10px;
}

.button {
  border-radius: 30px;
}

</style>
