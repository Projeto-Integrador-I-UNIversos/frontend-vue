<script lang="ts">
import { defineComponent } from 'vue';
import DataTablePropostas from '@/components/DataTable/DataTable.vue';
import columns from '@/components/DataTable/ColumnsProposta';
import axios from 'axios';
import { ref } from 'vue';


interface Data {
    id: number,
    Editora: string,Livro: string
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
    },
    methods: {
        async loadItems(items:any){
            try {
                const response = await axios.post(`${URL}/propostas`)

                items = response.data.map((item: any) => ({
                    id: item.id,
                    Editora: this.loadEditora(item.Editora),
                    Escritor: this.loadLivro(item.idEscritor )
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
                nome: item.nome
            }))

            return items.nome
        },
        async loadLivro(id:number){
            const response = await axios.get(`${URL}/livros/${id}`)

            const items = response.data.map((item:any) => ({
                titulo: item.titulo
            }))

            return items.titulo
        }
    }
})

</script>

<template>
     <main class="pb-16 pt-24 px-5 h-[85.4vh] w-full ">
        <DataTablePropostas :data="data" :columns="columns" />
        
     </main>
</template>