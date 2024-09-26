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
import DataTable from '@/components/DataTable/DataTable.vue';
import { Data } from '@/components/DataTable/Data';
import columns from '@/components/DataTable/ColumnsUser';
import { UserService } from '@/service/user.service';

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

const data: Data[] = [
  {
    id: 'm5gr84i9',
    name: 'Lara Victoria',
    email: 'ken99@eeeee.com',
  },
  {
    id: '3u1reuv4',
    name: 'Lara Victoria',
    email: 'Abe45@gmail.com',
  },
  {
    id: 'derv1ws0',
    name: 'Lara Victoria',
    email: 'Monserrat44@gmail.com',
  },
  {
    id: '5kma53ae',
    name: 'Lara Victoria',
    email: 'Silas22@gmail.com',
  },
  {
    id: 'bhqecj4p',
    name: 'Lara Victoria',
    email: 'carmella@hotmail.com',
  },
]


export default defineComponent({
  name: 'UsersList',
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
    EditoraItem,
    DataTable
  },
  data() {
    return {
      livros: [] as Livro[],
      id: '' as string | null,
      columns,
      data
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
    remove(id:string){
      console.log(id);
      const URL = 'http://localhost:5001';
        // UserService.delete(id)
        // .then((response)=> console.log(response));
        // .catch((error)=> console.log(error));
        axios.post(`${URL}/deletar`)
          .then((response)=> {console.log(response)})
          .catch((error) => {console.log(error)})
       
    }
  },
  computed: {
    caminhoCompletoCapa(): string {
      const caminho =  `../../public/assets/imagens/4ca57f64ac94eec2493375e59bf45784.jpg`;
      console.log(caminho);
      
      return caminho;
    }
  }
})
</script>

<template>
  <main class="pb-16 pt-24 px-5full w-full h-">

    <DataTable :data="data" :columns="columns" @handle-click-get-id="remove" />
    
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
