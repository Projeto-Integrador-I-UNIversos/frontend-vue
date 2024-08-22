<script lang="ts">
import { defineComponent } from 'vue';
import { Input } from '../../components/ui/input';
import axios from 'axios';
import Label from '../../components/ui/label/Label.vue';
import Button from '@/components/ui/button/Button.vue';

export default defineComponent({
    name: 'CadastrarObra',
    components: {
        Input,
        Label,
        Button
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
                alert("Cadastro Livro concluido")
            } catch (error) {
                console.error('Erro:', error);
            }
        }
    }
})
</script>


<template>
    <div class="pt-20 flex justify-center ">
        <form class="form px-20 flex-center" @submit.prevent="loadUser">

            <p class="text-2xl">Cadastrar novo Livro</p>
            <div class="">
            <Label class="flex text-left py-3" for="titulo text-black">Titulo</Label>
            <Input type="text" placeholder="Titulo" v-model="titulo" class="input" required/>
            </div>
            <div class="flex flex-row">
                <div class="w-96 pr-1">
                    <Label class="flex text-left py-3" for="idioma">Idioma</Label>
                    <Input type="text" placeholder="Idioma" v-model="idioma" class="input" required/>
                </div>
                <div class="w-96 pl-1">
                    <Label class="flex text-left py-3" for="quantPaginas">Paginas</Label>
                    <Input type="number" placeholder="Paginas" v-model="QuantPaginas" class="input" required/>
                </div>
            </div>
            <div class="">
            <Label class="flex text-left py-3" for="pais">Pais</Label>
            <Input type="text" placeholder="Pais" v-model="pais" class="input" required/>
            </div>
            <div class="">
            <Label class="flex text-left py-3" for="descricao">Descricao</Label>
            <Input type="text" placeholder="Descricao" v-model="descricao" class="input" required/>
            </div>
            <div class="">
            <Label class="flex text-left py-3" for="status">Status</Label>
            <Input type="text" placeholder="Status" v-model="status" class="input" required/>
            </div>
            <Label class="flex text-left py-3" for="generos">Generos</Label>
            <Input type="text" placeholder="Generos" v-model="generos" class="input" required/>
            <div class="">
            <Label class="flex text-left py-3" for="capaLivro">Capa Livro</Label>
            <Input id="capaLivro" type="file" @change="(e:any) => capaLivro = e.target.files[0]" class="input" required/>
            </div>
            <div class="">
                <Label class="flex text-left py-3" for="pdfLivro">PDF Livro</Label>
            <Input id="pdfLivro" type="file" @change="(e:any) => PdfLivro = e.target.files[0]" class="input" required/>
            </div>
            <div class="pt-3">
                <Button class="bg-indigo-500 button text-white w-32 hover:text-indigo-500" type="submit">Salvar</Button>
            </div>
        </form>
    </div>
</template>

<style>
.form {
    width: 100vh;
}

.input {
    border-radius: 10px;
}

.button {
    border-radius: 10px;
}
</style>
