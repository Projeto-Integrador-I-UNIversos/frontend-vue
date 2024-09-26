<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import LivroItem from '@/components/LivroItem.vue';
import Button from '@/components/ui/button/Button.vue';
import TokenService from '@/service/sorage.service';
import axios from 'axios';
import router from '@/router';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import EditoraItem from '@/components/EditoraItem.vue';
import DataTable from '@/components/DataTable/DataTable.vue';
import columns from '@/components/DataTable/ColumnsUser';
import { UserService } from '@/service/user.service';

export interface Data {
    id: string
    email: string,
    tipo: string
  }

  const data = ref<Data[]>([]);

  const URL = 'http://localhost:5001';

export default defineComponent({
  name: 'HomeView',
  components: {
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
      id: '' as string | null,
      data,
      URL,
       columns
    }  
  },
  setup() {

    async function loadItems(items: any) {
        try {
            const response = await axios.get(`${URL}/usuarios`)
        
          items = response.data.map((item:any) => ({
            id: item.idUsuario,
            email: item.email,
            tipo: item.tipo
          }))
          
          return items;
        } catch (error) {
          console.error("Erro ao carregar os itens:", error);
        }

      }

      onMounted(async () => {
          data.value = await loadItems(data)
      })

      watch(data, async () => {
          data.value = await loadItems(data)
      })

      return {
        loadItems,
        data
      }
  },
  
  methods: {

    async loadUser(id: number) {
      const response = await axios.get(`${URL}/usuarios/${id}`)
      return response.data.nome

    },

   
    handleClickAndRedirectToClientePage(id:string){
      console.log(id);
     
        // UserService.delete(id)
        // .then((response)=> console.log(response));
        // .catch((error)=> console.log(error));
        
       
    },
    removeUser(id:number) {
      axios.delete(`${URL}/deletar/${id}`)
          .then((response)=> {console.log(response.data.message)})
          .catch((error) => {
            if (error.response) {
                console.log(error.response.data.message); // Mensagem de erro do servidor
            } else {
                console.error("Erro ao deletar usuário:", error);
            }
          })
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

    <DataTable :data="data" :columns="columns" @remove-user-by-id="removeUser" />
    
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
