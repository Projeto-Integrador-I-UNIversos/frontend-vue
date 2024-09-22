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
import router from '@/router';

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
  },
  mathods: {
    goTo() {
      router.push({path: `livro/${this.idLivro}`})
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
  <RouterLink :to="{name: 'Editora.Livro', params: {id : `${idLivro}`}}" class="flex justify-center w-44 px-3 py-3 text-left cursor-pointer text-black">
    <div class=" justify-center flex flex-col">
      <img :src="caminhoCompletoCapa" alt="Capa do livro" width="100%" class="rounded-[15px] p-2"/>
      <div class="ml-2">
        <h3 class="flex pb-1 text-[13px]">{{ titulo }}</h3>
        <p class="text-[11px] mb-2">{{ escritor }}</p>
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
