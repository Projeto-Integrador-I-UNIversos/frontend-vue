<script lang="ts">
import { defineComponent, ref } from 'vue';
import LivroItem from '@/components/LivroItem.vue';
import Button from '@/components/ui/button/Button.vue';
import TokenService from '@/service/sorage.service';
import axios from 'axios';
import router from '@/router';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-vue-next';

interface Livro {
  titulo: string;
  idioma: string;
  QuantPaginas: number;
  pais: string;
  descricao: string;
  capaLivro: string;
  idEscritor: number;
  status: string;
  PdfLivro: string;
  idLivro: string;
}

interface Data {
  id: 1,
  titulo: '',
  capa: '',
  escritor: ''

}

const data = ref<Data[]>([]);

export default defineComponent({
  name: 'HomeView',
  components: {
    LivroItem,
    Button, 
    Carousel, 
    CarouselContent, 
    CarouselItem, 
    CarouselNext, 
    CarouselPrevious,
    Card, 
    CardContent,
    ArrowRight
  },
  data() {
    return {
        id: '' as string | null,
        data
    }  
  },
  async mounted() {
    data.value = await this.loadItems(data); 
    this.id
  },
  methods: {
    async getEscritor(idEscritor:number) {
          try {
            const URL = 'http://localhost:5001';
            const response = await axios.get(`${URL}/escritores/${idEscritor}`)
            console.log(response);
            
            return response.data.nome
          }
          catch (error) {
            console.error("Erro ao carregar os itens:", error);
          }
      },
    async loadItems(items:any) {

      try {
        const URL = 'http://localhost:5001';
        const response = await axios.get(`${URL}/livros`)
        TokenService.saveName(response.data.id)

        console.log(response.data);
        
        const items = await Promise.all(
          response.data.map(async (item: any) => ({
            id: item.idLivro,
            titulo: item.titulo,
            capa: item.capaLivro,
            escritor: await this.getEscritor(item.idEscritor) // Espera a resposta de getEscritor
          })));
                
        return items;
        

      } catch (error) {
        console.error("Erro ao carregar os itens:", error);
      }
      
      
    },
    handleClickAndRedirectToClientePage(){
      return router.push({path: `/app/livros/${this.id}/editar`});
    },

  },
  computed: {
    caminhoCompletoCapa(): string {
      // Construa o caminho completo usando um caminho absoluto a partir da pasta public
      const caminho =  `../../public/assets/imagens/4ca57f64ac94eec2493375e59bf45784.jpg`;
      console.log(caminho);
      
      return caminho;
    }
  }
})
</script>

<template>
  <main class="pb-16 pt-24 px-10 w-full h-full">

    <div class=" h-[50vh]  bg-[#f4d747] rounded-[30px] flex py-4 px-10 grid grid-cols-2">
      <div class="flex items-center justify-center flex-col">
        <p class="inter-bold text-[#640eca] text-[30px]" >Encontre Escritores que se encaixem <br/> no perfil da sua Editora</p>
        <p class="inter-base text-[#640eca] text-[20px] pt-4" >Universos Literarios: O melhor amigo do mercado Editorial</p>
      </div>
      <div class="flex items-end justify-center">
        <img src="../../../assets/imagens/image-1.svg" width="60%">
      </div>
      
    </div>
    <div class="flex mt-14 mb-10">
      <p class="text-left pr-2">Mostrar Todos os Livros</p>
    </div>
   
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-2">
        <!--LivroItem 
            class="w-44 h-60"
            v-for="livro in livros" 
            :titulo="data.titulo"
            :capaLivro="data.capa"
            :idLivro="livro.idLivro"
        /-->
        <LivroItem 
            class="w-44 h-60 mb-[40px] hover:border-[1px] hover:border-indigo-600 hover:rounded-[10px]"
            v-for="livro in data"
            :titulo="livro.titulo"
            :escritor="livro.escritor"
            :capaLivro="livro.capa"
            :idLivro="livro.id"
        />
        <!--router-link :to="`/app/livros/${id}/editar`">Editar</router-link-->
    </div> 
    
</main>
</template>



<style scoped>

.banner {
  border-radius: 10px;
  background-color: #6807d2;
}
.image  {
  margin-top: -26px;
  margin-left: 25px;
  margin-bottom: 16px;
  border-radius: 10px;
}

.border {
  border-radius: 10px;
}

.bg {
  background-color: #6807d2;
}

.carroussel {
  border-radius: 50%;
}
</style>
