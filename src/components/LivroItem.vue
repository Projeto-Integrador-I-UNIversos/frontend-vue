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
    capaLivro: { type: String, required: true },
    idLivro: { type: String, required: true }
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
  <div class="flex justify-center p-0 m-0 w-40">
  <div class="mt-5 p-0">
    <img :src="caminhoCompletoCapa" alt="Capa do livro" width="150px" class="border ml-2"/>
    <div class="">
      <h3 class="flex text-center pl-5 pt-2 pb-1">{{ titulo }}</h3>
      <Button class="border-indigo-600 text-sm w-36 button h-8">Ver Livro</Button>
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
