<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import { ref } from 'vue';
import DataTable from '@/components/DataTable/DataTable.vue';
import columns from '@/components/DataTable/ColumnsObraSugeridas';

interface Data {
    id: number,
    Escritor: string,
    Livro: string
}

const data = ref<Data[]>([]);

// const data: Data[] = [
//     {
//         id: 1,
//         Escritor: '1',
//         Livro: '1'
//     },
//     {
//         id: 1,
//         Escritor: '1',
//         Livro: '1'
//     },
//     {
//         id: 1,
//         Escritor: '1',
//         Livro: '1'
//     },
//     {
//         id: 1,
//         Escritor: '1',
//         Livro: '1'
//     },
//     {
//         id: 1,
//         Escritor: '1',
//         Livro: '1'
//     },
// ]

const URL = 'http://localhost:5001';
export default defineComponent({
    name: 'ObraSugerida',
    components: {
        DataTable,
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
                Escritor: this.loadEditora(item.Escritor),
                Livro: this.loadLivro(item.idLivro )
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
     <main class="pb-16 pt-24 px-5full w-full h-">
        <DataTable :data="data" :columns="columns" />
        
     </main>
</template>