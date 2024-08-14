<script lang="ts">
import { defineComponent } from 'vue';
import { Input } from '../../components/ui/input';
import axios from 'axios';
import Label from '../../components/ui/label/Label.vue';
/**
 * titulo
 * idioma
 * paginas
 * pais
 * descricao
 * idEscritor
 * status
 * pdf livro 
 */


export default defineComponent({
    name: 'CadastrarObra',
    components: {
        Input,
        Label
    },
    data() {
        return {
            titulo : '',
            idioma : '',
            QuantPaginas : '',
            pais : '',
            descricao : '',
            capaLivro: '',
            idEscritor : '',
            status : '',
            PdfLivro: '',
            generos: ''
        }
    },
    mounted(){
    },
    methods: {
        loadUser(){
            console.log('CLICK');
            const URL = 'http://localhost:5001';

            axios.post(`${URL}/cadastroLivro`, {
                titulo : this.titulo,
                idioma : this.idioma,
                QuantPaginas : this.QuantPaginas,
                pais : this.pais,
                descricao : this.descricao,
                capaLivro: this.capaLivro,
                idEscritor : 30,
                status : this.status,
                PdfLivro: this.PdfLivro,
                /**
                 * titulo, 
                 * idioma, 
                 * QuantPaginas,
                 *  pais,
                 *  descricao, 
                 * capaLivro,
                 *  idEscritor, 
                 * status,
                 *  PdfLivro
                 */
                //generos: this.generos,
                // titulo : "Dom Casmurro",
                // idioma : "portugues",
                // QuantPaginas : 256,
                // pais : "Brasil",
                // descricao : "Um romance",
                // capaLivro: "url/para/a/capa/do/livro.jpg",
                // idEscritor : 3,
                // status : "Disponicel",
                // PdfLivro: "url/para/o/pdf/do/livro.pdf",
               // generos: this.generos,
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Erro:', error);
            });
        }
    }
})

</script>

<template>
    <div>
        <form class="form" @submit.prevent="loadUser">
            <p>cadastrar obra</p>
            <Label for="email">Titulo</Label>
            <Input type="text" placeholder="Titulo" v-model="titulo"/>
            <Label for="email">Idioma</Label>
            <Input type="text" placeholder="Idioma" v-model="idioma"/>
            <Label for="email">Paginas</Label>
            <Input type="text" placeholder="Paginas" v-model="QuantPaginas"/>
            <Label for="email">Pais</Label>
            <Input type="text" placeholder="Pais" v-model="pais"/>
            <Label for="email">Descricao</Label>
            <Input type="text" placeholder="Descricao" v-model="descricao"/>
            <Label for="email">Status</Label>
            <Input type="text" placeholder="status" v-model="status"/>
            <Label for="email">Generos</Label>
            <Input type="text" placeholder="Generos" v-model="generos"/>
            <Label for="email">Capa Livro</Label>
            <Input id="picture" type="file" v-model="capaLivro"/>
            <Label for="email">PDF Livro</Label>
            <Input id="picture" type="file" v-model="PdfLivro"/>
            <div >
                <button class="bg-sky-500" type="submit">Entrar</button>
            </div>
        </form>
    </div>
</template>