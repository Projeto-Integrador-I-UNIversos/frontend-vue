<script lang="ts">
import { defineComponent } from 'vue';
import LivroItem from '@/components/LivroItem.vue';
import Button from '@/components/ui/button/Button.vue';
import TokenService from '@/service/sorage.service';
import axios from 'axios';
import router from '@/router';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import EditoraItem from '@/components/EditoraItem.vue';

interface Livro {
  editora: string;
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
    CardContent,
    EditoraItem
  },
  data() {
    return {
      livros: [] as Livro[],
      id: '' as string | null,
      data: [
        {
          editora: "Editora pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          editora: "Editora pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          editora: "Editora pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          editora: "Editora pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          editora: "Editora pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          editora: "Editora pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          editora: "Editora pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          editora: "Editora pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          editora: "Editora pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          editora: "Editora pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          editora: "Editora pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },

        {
          editora: "Editora pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          editora: "Editora pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          editora: "Editora pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
    ],
    generos: [
      {
          titulo: "O pequeno Principe",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          titulo: "O pequeno Principe",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          titulo: "O pequeno Principe",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          titulo: "O pequeno Principe",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          titulo: "O pequeno Principe",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          titulo: "O pequeno Principe",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          titulo: "O pequeno Principe",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          titulo: "O pequeno Principe",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          titulo: "O pequeno Principe",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          titulo: "O pequeno Principe",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          titulo: "O pequeno Principe",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          titulo: "O pequeno Principe",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          titulo: "O pequeno Principe",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          titulo: "O pequeno Principe",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
    ]
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
  <main class="pb-16 pt-24 px-5 rounded-[30px]">

    <div class="bg-violet-700 h-[300px]  banner flex">
      <div class="">
        <img src="../assets/imagens/livro-2.png" width="22.3%">
      </div>
      <div class="flex items-end justify-end mt-14">
      </div>
      
    </div>
    <div class="flex justify-center my-10" >
      <h1 class="flex text-xl" >Generos</h1>
      <div class="mt-10 flex justify-center ml-[-60px]">
      
        <Carousel
          class="relative w-[160vh]"
          :opts="{
            align: 'start',
          }"
        >
          <CarouselContent class="w-[170vh]">
            <CarouselItem v-for="(generos, index) in generos" :key="generos.id" class="md:basis-1/2 lg:basis-1/12 mx-4 ">
              <div class="py-1 px-3">
                <Card class="w-40 border-0">
                  <CardContent class="border-0 flex flex-col aspect-square items-center justify-center p-6 ">
                      <img :src="generos.capa" width="150px" class="w-[80px] h-[80px] rounded-[100%]"/>
                      <p>Genero</p>
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
   
    <div class="flex mt-14">
      <p class="text-left pr-2">Mostrar Todos os Livros</p>
      <ArrowRight/>
    </div>
    <div class="flex justify-center" >
      <Carousel
          class="relative w-[160vh]"
          :opts="{
            align: 'start',
          }"
          v-bind:autoplay="true" v-bind:loop="true"
        >
          <CarouselContent class="w-[170vh]">
            <CarouselItem v-for="(livro, index) in data" :key="livro.id" class="md:basis-1/2 lg:basis-40 mx-4 ">
              <div class="py-1 px-3">
                <Card class="w-20 border-0	">
                  <CardContent class="flex aspect-square items-center justify-center p-6">
                    <EditoraItem 
                      class="w-44 h-60 mb-[40px]"
                      :editora="livro.editora"
                      :capaLivro="livro.capa"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
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
