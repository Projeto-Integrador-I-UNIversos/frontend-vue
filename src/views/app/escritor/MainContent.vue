<script lang="ts">
import { defineComponent } from 'vue';
import LivroItem from '@/components/LivroItem.vue';
import Button from '@/components/ui/button/Button.vue';
import TokenService from '@/service/sorage.service';
import axios from 'axios';
import router from '@/router';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

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
    CardContent
  },
  data() {
    return {
      livros: [] as Livro[],
      id: '' as string | null
    }  
  },
  mounted() {
    this.loadItems(); 
    this.id
  },
  methods: {
    async loadItems() {

      try {
        const URL = 'http://localhost:5001';
        const response = await axios.get(`${URL}/livros`)
        console.log(response.data);
        this.livros = response.data;
        this.id = response.data.idLivro
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
  <main class="pb-16 pt-24 px-5">

    <div class="bg-violet-700 h-[300px]  banner flex">
      <div class="">
        <img src="../assets/imagens/livro-2.png" width="22.3%">
      </div>
      <div class="flex items-end justify-end mt-14">
      </div>
      
    </div>
    <div class="flex justify-center my-10" >
      <h1 class="flex text-xl" >Generos</h1>
      <div class="pt-10">
      
        <Carousel
          class="relative w-[150vh]"
          :opts="{
            align: 'start',
          }"
        >
          <CarouselContent class="w-[150vh]">
            <CarouselItem v-for="(_, index) in 20" :key="index" class="md:basis-1/2 lg:basis-1/12 mx-4 ">
              <div class="py-1 px-3">
                <Card class="w-20 carroussel">
                  <CardContent class="flex aspect-square items-center justify-center p-6 ">
                    <span class="text-3xl font-semibold">{{ index + 1 }}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
   
    
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2">
        <LivroItem 
            class="w-44 h-60"
            v-for="livro in livros" 
            :titulo="livro.titulo"
            :capaLivro="livro.capaLivro"
            :idLivro="livro.idLivro"
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
