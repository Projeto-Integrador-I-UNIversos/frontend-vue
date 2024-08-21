<template>
  <main class="p-4">
    <h2 class="text-2xl">Main Content</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <LivroItem 
                v-for="livro in livros" 
                :key="livro.idLivro" 
                :titulo="livro.titulo"
                :idioma="livro.idioma"
                :QuantPaginas="livro.QuantPaginas"
                :pais="livro.pais"
                :descricao="livro.descricao"
                :capaLivro="livro.capaLivro"
                :idEscritor="livro.idEscritor"
                :status="livro.status"
                :PdfLivro="livro.PdfLivro"
                :idLivro="livro.idLivro"
              />
              <!--router-link :to="`/app/livros/${id}/editar`">Editar</router-link-->
            </div>  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LivroItem from '@/components/LivroItem.vue';
import Button from '@/components/ui/button/Button.vue';
import TokenService from '@/service/sorage.service';
import axios from 'axios';
import router from '@/router';

export default defineComponent({
  name: 'HomeView',
  components: {
    LivroItem,
    Button
  },
  data() {
    return {
      livros: [],
      id: '' as string | null
    }  
  },
  mounted() {
    this.loadItems(); 
    this.id = TokenService.getId();
  },
  methods: {
    async loadItems() {

      try {
        const URL = 'http://localhost:5001';
        const response = await axios.get(`${URL}/livros`)
        console.log(response.data);
        this.livros = response.data
        if (this.livros.length > 0) {
          TokenService.saveID(this.livros[0].idLivro) 
          console.log('ID do primeiro livro:', this.id);
          //this.handleClickAndRedirectToClientePage(this.livros[0].idLivro)
        }

        

      } catch (error) {
        console.error("Erro ao carregar os itens:", error);
      }
      
      
    },
    handleClickAndRedirectToClientePage(){
      return router.push({path: `/app/livros/${this.id}/editar`});
}
  }
})
</script>

<style scoped>
/* Estilos especÃ­ficos para o conteÃºdo principal */
</style>
