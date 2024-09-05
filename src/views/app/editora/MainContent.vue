<script lang="ts">
import { defineComponent } from 'vue';
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
      livros: [] as Livro[],
      id: '' as string | null,
      data: [
        {
          titulo: "O pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          titulo: "O pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          titulo: "O pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          titulo: "O pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          titulo: "O pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          titulo: "O pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          titulo: "O pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          titulo: "O pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          titulo: "O pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          titulo: "O pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          titulo: "O pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },

        {
          titulo: "O pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          titulo: "O pequeno Principe",
          escritor: "Antoine de Saint-Exupery",
          capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
          id: 1 as number
        },
        {
          titulo: "O pequeno Principe",
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
  <main class="pb-16 pt-24 px-10">

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
    <div class="grid grid-flow-row-dense grid-cols-2 grid-rows-1 justify-center mt-14">
      <div class="border shadow m-4 grid bg-indigo-400 grid-flow-row-dense grid-cols-3 grid-rows-2 items-center">
        <img :src="caminhoCompletoCapa" width="200px" class="image row-span-2 col-span-1"/>
        <div class="row-span-2 col-span-2 py-6 px-8 text-left	items-center">
          <p class="text-xl text-white font-bold">As flores do mal</p>
          <p class="text-sm text-white py-2">Autor: Charles Baudelaire</p>
          <p class="text-sm text-white">As Flores do Mal é um livro escrito pelo poeta francês Charles Baudelaire, considerado um marco da poesia moderna e simbolista. As Flores do Mal reúnem, de modo exemplar, uma série de motivos da obra do poeta: a queda; a expulsão do paraíso; o amor; o erotismo; a decadência; a morte; o tempo; o exílio e o tédio.</p>
        </div>
      </div>
      <div class="border shadow m-4 grid bg-indigo-400 grid-flow-row-dense grid-cols-3 grid-rows-2 items-center">
        <img :src="caminhoCompletoCapa" width="200px" class="image row-span-2 col-span-1"/>
        <div class="row-span-2 col-span-2 py-6 px-8 text-left	items-center">
          <p class="text-xl text-white font-bold">As flores do mal</p>
          <p class="text-sm text-white py-2">Autor: Charles Baudelaire</p>
          <p class="text-sm text-white">As Flores do Mal é um livro escrito pelo poeta francês Charles Baudelaire, considerado um marco da poesia moderna e simbolista. As Flores do Mal reúnem, de modo exemplar, uma série de motivos da obra do poeta: a queda; a expulsão do paraíso; o amor; o erotismo; a decadência; a morte; o tempo; o exílio e o tédio.</p>
        </div>
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
                    <LivroItem 
                      class="w-44 h-60 mb-[40px]"
                      :titulo="livro.titulo"
                      :escritor="livro.escritor"
                      :capaLivro="livro.capa"
                      :idLivro="livro.id"
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
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-2">
        <!--LivroItem 
            class="w-44 h-60"
            v-for="livro in livros" 
            :titulo="data.titulo"
            :capaLivro="data.capa"
            :idLivro="livro.idLivro"
        /-->
        <LivroItem 
            class="w-44 h-60 mb-[40px]"
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
