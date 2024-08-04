<script lang="ts">
import { defineComponent } from 'vue';
import { Input } from '../../components/ui/input';
import axios from 'axios';
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
        <Input type="text" placeholder="Titulo"/>
        <Input type="text" placeholder="Idioma"/>
        <Input type="text" placeholder="Paginas"/>
        <Input type="text" placeholder="Pais"/>
        <Input type="text" placeholder="Descricao"/>
        <Input type="text" placeholder="status"/>
        <Input type="text" placeholder="Generos"/>
        <Input id="picture" type="file" />
    </div>
</template>