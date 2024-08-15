<script lang="ts">
import { defineComponent } from 'vue';
import { Input } from '../../components/ui/input';
import axios from 'axios';
import Label from '../../components/ui/label/Label.vue';

export default defineComponent({
    name: 'CadastrarObra',
    components: {
        Input,
        Label
    },
    data() {
        return {
            titulo: '',
            idioma: '',
            QuantPaginas: '',
            pais: '',
            descricao: '',
            capaLivro: null as File | null,
            idEscritor: 3,
            status: '',
            PdfLivro: null as File | null,
            generos: ''
        }
    },
    methods: {
        async loadUser() {
            console.log('CLICK');
            const URL = 'http://localhost:5001';
            console.log(this.titulo);

            // Criar um FormData para enviar os dados
            const formData = new FormData();
            formData.append('titulo', this.titulo);
            formData.append('idioma', this.idioma);
            formData.append('QuantPaginas', this.QuantPaginas);
            formData.append('pais', this.pais);
            formData.append('descricao', this.descricao);
            formData.append('capaLivro', this.capaLivro as File);
            formData.append('idEscritor', this.idEscritor.toString());
            formData.append('status', this.status);
            formData.append('PdfLivro', this.PdfLivro as File);

            try {
                const response = await axios.post(`${URL}/cadastroLivro`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log(response.data);
            } catch (error) {
                console.error('Erro:', error);
            }
        }
    }
})
</script>


<template>
    <div>
        <form class="form" @submit.prevent="loadUser">
            <p>Cadastrar Obra</p>
            <Label for="titulo">Titulo</Label>
            <Input type="text" placeholder="Titulo" v-model="titulo"/>
            <Label for="idioma">Idioma</Label>
            <Input type="text" placeholder="Idioma" v-model="idioma"/>
            <Label for="quantPaginas">Paginas</Label>
            <Input type="number" placeholder="Paginas" v-model="QuantPaginas"/>
            <Label for="pais">Pais</Label>
            <Input type="text" placeholder="Pais" v-model="pais"/>
            <Label for="descricao">Descricao</Label>
            <Input type="text" placeholder="Descricao" v-model="descricao"/>
            <Label for="status">Status</Label>
            <Input type="text" placeholder="Status" v-model="status"/>
            <Label for="generos">Generos</Label>
            <Input type="text" placeholder="Generos" v-model="generos"/>
            <Label for="capaLivro">Capa Livro</Label>
            <Input id="capaLivro" type="file" @change="(e:any) => capaLivro = e.target.files[0]"/>
            <Label for="pdfLivro">PDF Livro</Label>
            <Input id="pdfLivro" type="file" @change="(e:any) => PdfLivro = e.target.files[0]"/>
            <div>
                <button class="bg-sky-500" type="submit">Salvar</button>
            </div>
        </form>
    </div>
</template>
