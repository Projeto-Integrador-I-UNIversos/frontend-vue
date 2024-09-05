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
export default defineComponent({
  name: 'LivroItem',
  components: {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Button
  },
  props: {
    titulo: { type: String, required: true },
    escritor: {type: String, required: true},
    capaLivro: { type: String, required: true },
    idLivro: { type: Number, required: true }
  },
  computed: {
    caminhoCompletoCapa(): string {
      // Construa o caminho completo usando um caminho absoluto a partir da pasta public
      const caminho =  `../../public/assets/imagens/${this.capaLivro}`;
      console.log(caminho);
      
      return caminho;
    }
  }
})
</script>

<template>
  <!--div class="livro-item border p-4 m-4 shadow-lg rounded-lg cursor-pointer" @click="$router.push(`/app/livros/${idLivro}/editar`)">
    <img :src="caminhoCompletoCapa" alt="Capa do Livro" class="object-cover mb-4"/>

    <h2 class="text-xl font-bold">{{ titulo }}</h2>
    <p>{{ idLivro }}</p>
    <div>
    </div>
  </div-->
  <div class="flex justify-center p-0 m-0 w-44 z-1">
  <div class="mt-5 p-0 justify-center flex flex-col">
    <img :src="caminhoCompletoCapa" alt="Capa do livro" width="150px" class="border ml-2"/>
    <div class="">
      <h3 class="flex text-center pl-5 pt-2 pb-1 text-[13px]">{{ titulo }}</h3>
      <p class="text-[11px] text-center ml-2 mb-2">{{ escritor }}</p>
      <Button class="border-indigo-600 text-sm w-36 button h-8 ml-3 hover:bg-indigo-600 hover:text-white">Ver Livro</Button>
    </div>
  </div>
  </div>
</template>

<style>

.border {
  border-radius: 10px;
}

.button {
  border-radius: 30px;
}

</style>
