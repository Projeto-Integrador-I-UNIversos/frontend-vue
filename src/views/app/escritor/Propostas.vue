<script lang="ts">
import { defineComponent } from 'vue';
import DataTablePropostas from '@/components/DataTable/DataTable.vue';
import columns from '@/components/DataTable/ColumnsProposta';
import axios from 'axios';
import { ref } from 'vue';


interface Data {
    id: number,
    editora: string,
    livro: string
}

const data = ref<Data[]>([]);

const URL = 'http://localhost:5001';
export default defineComponent({
    name: 'Proposta',
    components: {
        DataTablePropostas,
    },
    data() {
        return {
            data,
            columns,
            URL
        }
    },
    async mounted() {
        data.value = await this.loadItems(data)
        console.log(data.value);
        
    },
    methods: {
        async loadItems(items:any){
            try {
                const response = await axios.get(`${URL}/propostas`)

                items = response.data.map((item: any) => ({
                    id: item.idProposta,
                    editora: item.idEditora,
                    // escritor: this.loadLivro(item.idEscritor )
                    livro: item.idLivro
                }));
        return items;
            }
            catch(error) {
                console.log(error);
                
            }
        },
        async loadEditora(id:number) {
            const response = await axios.get(`${URL}/editoras/${id}`)

            const items = response.data.map((item:any) => ({
                nome: item.nome,
                id: item.idEditora
            }))

            return items.id
        },
        async loadLivro(id:number){
            const response = await axios.get(`${URL}/livros/${id}`)

            const items = response.data.map((item:any) => ({
                titulo: item.titulo
            }))

            return items.titulo
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
    }
})

</script>

<template>
     <main class="pb-16 pt-24 px-5 h-[85.4vh] w-full ">
        <DataTablePropostas :data="data" :columns="columns" />
        
     </main>
</template>