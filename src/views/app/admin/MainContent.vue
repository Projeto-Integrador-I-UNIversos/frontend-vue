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
    EditoraItem,
    DataTable
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
  <main class="pb-16 pt-24 px-5full w-full h-">

    <DataTable/>
    
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
