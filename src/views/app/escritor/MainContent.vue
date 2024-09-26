<script lang="ts">
import { defineComponent, ref } from 'vue';
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

interface Data {
  idEditora: 1,
  nome: '',
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
    EditoraItem
  },
  data() {
    return {
      livros: [] as Livro[],
      data,
    }  
  },
  async mounted() {
    data.value = await this.loadItems(data); 
    console.log(data.value);
      },
  methods: {
    async loadItems(items:any) {

      try {
        const URL = 'http://localhost:5001';
        const response = await axios.get(`${URL}/editoras`)
        
        console.log(response.data);
        
        items = response.data.map((item: any) => ({
            idEditora: item.idEditora,
            nome: item.nome
        }));
        return items;
        

      } catch (error) {
        console.error("Erro ao carregar os itens:", error);
      }

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
  <main class="pb-16 pt-24 px-5 rounded-[30px]">

    <div class=" h-[50vh]  bg-[#f4d747] rounded-[30px] flex py-4 px-10 grid grid-cols-2">
    
      <div class="flex items-center justify-center flex-col">
        <p class="inter-bold text-[#640eca] text-[30px]" >Encontre a melhor Editora que se encaixe <br/> no seu perfil</p>
        <p class="inter-base text-[#640eca] text-[20px] pt-4" >Universos Literarios: O melhor amigo dos Escritores</p>
      </div>

      <div class="flex items-end justify-center">
        <img src="../../../assets/imagens/image-2.svg" width="60%">
      </div>
      
    </div>
   
    <div class="flex mt-14">
      <p class="text-left pr-2">Todos as Editoras</p>
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
            <CarouselItem v-for="(editora, index) in data" :key="editora.id" class="md:basis-1/2 lg:basis-40 mx-4 ">
              <div class="py-1 px-3">
                <Card class="w-[25vh] border-0 p-0	">
                  <CardContent class="flex aspect-square items-center justify-center">
                    <EditoraItem 
                      class="w-44 h-[25vh]"
                      :editora="editora.nome"
                      :idEditora="editora.idEditora"
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
