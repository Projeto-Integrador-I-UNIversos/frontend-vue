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
            paginas : '',
            pais : '',
            descricao : '',
            idEscritor : '',
            status : '',
            pdflivro: '',
            generos: ''
        }
    },
    mounted(){
    },
    methods: {
        loadUser(){
            console.log('CLICK');
            const URL = 'http://localhost:5000';

            axios.post(`${URL}/usuario/login`, {
                titulo : this.titulo,
                idioma : this.idioma,
                paginas : this.paginas,
                pais : this.pais,
                descricao : this.descricao,
                idEscritor : this.idEscritor,
                status : this.status,
                pdflivro: this.pdflivro,
                generos: this.generos,
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
        <p>cadastrar obra</p>
        <Label for="email">Titulo</Label>
        <Input type="text" placeholder="Titulo"/>
        <Label for="email">Iidoma</Label>
        <Input type="text" placeholder="Idioma"/>
        <Label for="email">Paginas</Label>
        <Input type="text" placeholder="Paginas"/>
        <Label for="email">Pais</Label>
        <Input type="text" placeholder="Pais"/>
        <Label for="email">Descricao</Label>
        <Input type="text" placeholder="Descricao"/>
        <Label for="email">Status</Label>
        <Input type="text" placeholder="status"/>
        <Label for="email">Generos</Label>
        <Input type="text" placeholder="Generos"/>
        <Label for="email">PDF Livro</Label>
        <Input id="picture" type="file" />
    </div>
</template>