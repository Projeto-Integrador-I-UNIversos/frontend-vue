<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import LivroItem from '@/components/LivroItem.vue';
import Button from '@/components/ui/button/Button.vue';
import axios from 'axios';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import EditoraItem from '@/components/EditoraItem.vue';
import DataTable from '@/components/DataTable/DataTable.vue';
import columns from '@/components/DataTable/ColumnsLivros';
interface Data {
    id: number,
    titulo: string,
    escritor: string,
}

const data = ref<Data[]>([]);

const URL = 'http://localhost:5001';

export default defineComponent({
  name: 'LivroList',
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
      columns,
      data: [] as Data[]
    }  
  },
  async mounted() {
  },
  setup() {
    async function loadItems(items: any) {
      try {
        const URL = 'http://localhost:5001';
        const response = await axios.get(`${URL}/livros`);

        items = response.data.map((item: any) => ({
          id: item.idLivro,
          titulo: item.titulo,
          escritor: item.idEscritor 
        }));
        return items;
      } catch {
        alert("Ops, não foi possível listar os livros");
      }
    }

    onMounted(async () => {
        data.value = await loadItems(data)
    })

    return {
      data,
    }
  },
  methods: {
    
    handleClickAndRedirectToClientePage(id: number) {
      console.log(id);
      // const URL = 'http://localhost:5001';
      // axios.post(`${URL}/deletar`)
      //   .then(response => { console.log(response) })
      //   .catch(error => { console.log(error) });
    },

    removeLivro(id: number) {
      const URL = 'http://localhost:5001';
      axios.post(`${URL}/livros/deletar/${id}`)
        .then(response => { console.log(response) })
        .catch(error => { console.log(error) });
    }
  },
  computed: {
    caminhoCompletoCapa(): string {
      const caminho =  `../../public/assets/imagens/4ca57f64ac94eec2493375e59bf45784.jpg`;
      console.log(caminho);
      return caminho;
    }
  }
});
</script>

<template>
  <main class="pb-16 pt-24 px-5 full w-full h-full">
    <DataTable :data="data" :columns="columns" @remove-user-by-id="removeLivro" />
  </main>
</template>

<style scoped>
/* seu estilo aqui */
</style>
