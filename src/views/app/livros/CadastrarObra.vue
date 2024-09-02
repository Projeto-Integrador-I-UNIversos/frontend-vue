<script lang="ts">
import { defineComponent } from 'vue';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import Label from '@/components/ui/label/Label.vue';
import Button from '@/components/ui/button/Button.vue';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Checkbox from '@/components/ui/checkbox/Checkbox.vue';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import banner from '@/assets/imagens/5432299.jpg'

export default defineComponent({
    name: 'CadastrarObra',
    components: {
        Input,
        Label,
        Button,
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuLabel,
        DropdownMenuRadioGroup,
        DropdownMenuRadioItem,
        DropdownMenuSeparator,
        DropdownMenuTrigger,
        Checkbox,
        Select,
        SelectContent,
        SelectGroup,
        SelectItem,
        SelectLabel,
        SelectTrigger,
        SelectValue,
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
            generos: '',
            
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
    <div class="banner pt-20 flex justify-center bg-violet-500 h-[95vh]">
       <div class="flex justify-center" >
            <img src="@/assets/imagens/universe-4.svg" class="w-[100%] h-[100%] mr-[50px] mt-[-50px]" />
       </div>
        <form class=" px-20 flex-center rounded-[20px] pt-[50px] mb-[30px] w-[50%] mr-[6%]" @submit.prevent="loadUser">

            <p class="text-2xl text-white">Cadastrar novo Livro</p>
            <div  class="" >
                <div class="relative w-full min-w-[200px] h-10">
                    <input
                    class="peer w-full h-full bg-transparent text-white font-sans 
                    font-normal outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 transition-all placeholder-shown:border 
                    placeholder-shown:border-white placeholder-shown:border-t-white border focus:border-2 border-t-transparent 
                    focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-white focus:border-white"
                    placeholder=" " /><label
                    class=" flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate 
                    peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent 
                    peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px]
                     peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] 
                     before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-[10px] before:border-t
                      peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all 
                      peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5
                       after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-[10px] after:border-t 
                       peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all
                        peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-white 
                        before:border-red-200 peer-focus:before:!border-white  after:border-white peer-focus:after:!border-white peer-focus:!rounded-[10px]"
                        style="border-radius: 10px;">Titulo
                    </label>
                </div>
            </div>
               
            <div class="">
                <Label class="text-white flex text-left py-3" for="capaLivro">Capa Livro</Label>
                <Input id="capaLivro" type="file" @change="(e:any) => capaLivro = e.target.files[0]" class="input text-white" required/>
            </div>
            <div class="flex flex-row">
                <div class="w-96 pr-1">
                    <Label class="text-white flex text-left py-3" for="idioma">Idioma</Label>
                    <Input type="text" placeholder="Idioma" v-model="idioma" class="input text-white" required/>
                </div>
                <div class="w-96 pl-1">
                    <Label class="text-white flex text-left py-3" for="quantPaginas">Paginas</Label>
                    <Input type="number" placeholder="Paginas" v-model="QuantPaginas" class="input text-white" required/>
                </div>
                <div class="w-96 pl-2">
                    <Label class="text-white flex text-left py-3" for="pais">Pais</Label>
                    <Input type="text" placeholder="Pais" v-model="pais" class="input text-white" required/>
                </div>
            </div>
            
            <div class="">
            <Label class="text-white flex text-left py-3" for="descricao">Descricao</Label>
            <Input type="text" placeholder="Descricao" v-model="descricao" class="input text-white" required/>
            </div>
            <div class="flex flex-row">
                <div class="w-96 pl-1">
                    <Label class="text-white flex text-left py-3" for="status">Status</Label>
                    <!--Input type="text" placeholder="Status" v-model="status" class="input text-white" required/-->
                    <Select class="bg-white w-[100px]" >
                        <SelectTrigger class="w-[180px] text-white">
                        <SelectValue placeholder="Escolha o status" class="text-white"/>
                        </SelectTrigger>
                        <SelectContent class="bg-white">
                        <SelectGroup>
                            <SelectLabel>status</SelectLabel>
                            <SelectItem value="concluido">
                            Concluido
                            </SelectItem>
                            <SelectItem value="andamento">
                            Em andamento
                            </SelectItem>
                        </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div class="w-96 pl-2">
                    <Label class="text-white flex text-left py-3 text-white" for="generos">Generos</Label>
                    <!--Input type="text" placeholder="Generos" v-model="generos" class="input text-white" required/-->
                    <DropdownMenu>
                        <DropdownMenuTrigger as-child>
                        <Button variant="outline" class="w-full text-white">
                            
                        </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent class="w-56 bg-white">
                        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup v-model="generos">
                            <DropdownMenuRadioItem value="top">
                            Top
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="bottom">
                            Bottom
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="right">
                            Right
                            </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                                
                </div>
            </div>
            
            <div class="">
                <Label class="text-white flex text-left py-3" for="pdfLivro">PDF Livro</Label>
                <Input id="pdfLivro" type="file" @change="(e:any) => PdfLivro = e.target.files[0]" class="input text-white placeholder-white" required/>
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
    border-radius: 6px;
}

.button {
    border-radius: 10px;
}

.banner {
    background-image: url("@/assets/imagens/5432299.jpg");
}

.input-group input {
  background: transparent;
}

.input-group label {
  position: relative;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 16px;
  color: #fff;
  padding: 0 5px;
  pointer-events: none;
}

.input-group input:focus~label {
background: #000;
font-size: 12px;
}

</style>
