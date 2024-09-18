<script lang="ts">
import { defineComponent, ref } from 'vue';
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
import { TagsInput, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText } from '@/components/ui/tags-input'

import banner from '@/assets/imagens/5432299.jpg'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible/'

const isOpen = ref(false)

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
        TagsInput, 
        TagsInputInput, 
        TagsInputItem, 
        TagsInputItemDelete, 
        TagsInputItemText,
        Collapsible,
        CollapsibleContent,
        CollapsibleTrigger,
    },
    data() {``
        return {
            isOpen,
            Entity: {
                titulo: '',
                idioma: '',
                QuantPaginas: '',
                pais: '',
                descricao: '',
                capaLivro: null as File | null,
                idEscritor: 3,
                status: '',
                PdfLivro: null as File | null,
                selectedGeneros: [],
            },
            generos: [
                {name: 'Ficção'},
                {name: 'Não-ficção'},
                {name: 'Ficção Científica'},
                {name: 'Fantasia'},
                {name: 'Mistério'},
                {name: 'Suspense'},
                {name: 'Romance'},
                {name: 'Ficção Histórica'},
                {name: 'Biografia'},
                {name: 'Autoajuda'},
                {name: 'Terror'},
                {name: 'Aventura'},
                {name: 'Poesia'},
                {name: 'Drama'},
                {name: 'Memórias'},
                {name: 'Filosofia'},
                {name: 'Psicologia'},
                {name: 'Crime'},
                {name: 'Quadrinhos'},
                {name: 'Juvenil'}
            ],
        }
    },
    methods: {
        async loadUser() {
            console.log('CLICK');
            const URL = 'http://localhost:5001';

             // esse e um pouco mais complicado,
            // aqui eu formato os dados pra ficar no padrao que aceite arquivos
            // const formData = new FormData();
        //     formData.append('titulo', this.Entity.titulo);
        //     formData.append('idioma', this.Entity.idioma);
        //     formData.append('QuantPaginas', this.Entity.QuantPaginas);
        //     formData.append('pais', this.Entity.pais);
        //     formData.append('descricao', this.Entity.descricao);
        //     formData.append('capaLivro', this.Entity.capaLivro as File);
        //     formData.append('idEscritor', this.Entity.idEscritor.toString());
        //     formData.append('status', this.Entity.status);
        //     formData.append('PdfLivro', this.Entity.PdfLivro as File);

        //    // como nao utilizei service, usei o axios aqui mesmo
        //     try {
        //         const response = await axios.post(`${URL}/cadastroLivro`, formData, {
        //             headers: {
        //                 // aqui eu especifico que vou usar o formData
        //                 // se nao funcionar da mesma forma, voce pode alterar como desejar,
        //                 // mas e pra funcionar
        //                 'Content-Type': 'multipart/form-data'
        //             }
        //         });
        //         console.log(response.data);
        //         alert("Cadastro Livro concluido")
        //     } catch (error) {
        //         console.error('Erro:', error);
        //         alert("Cadastro Livro nao concluido")
        //     }
        }
    },
    setup() {
        
    }
})
</script>


<template>
    <div class=" pt-20 flex justify-center h-[95vh]">
       <div class="flex justify-center" >
            <img src="@/assets/imagens/universe-5.svg" class="w-[100%] h-[100%] mr-[50px] mt-[-50px]" />
       </div>
        <form class=" px-20 flex-center rounded-[20px] pt-[10px] mb-[30px] w-[50%] mr-[6%]" @submit.prevent="loadUser">

            <p class="text-4xl text-black mb-[10%]">Cadastrar novo Livro</p>
            <div class="" >
                <div  class="" >
                    <div class="relative  h-10 m-2">
                        <input v-model="Entity.titulo"
                            class="bg-[#f7effe] peer w-full h-full bg-transparent text-black font-sans 
                            font-normal outline outline-0 focus:outline-0 disabled:bg-black disabled:border-0 transition-all placeholder-shown:border 
                            placeholder-shown:border-indigo-400 placeholder-shown:border-t-indigo-400 border focus:border-2 border-t-transparent 
                            focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-indigo-400 focus:border-indigo-400"
                            placeholder=" " />
                        <label
                            class=" flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate 
                            peer-placeholder-shown:text-black leading-tight peer-focus:leading-tight peer-disabled:text-transparent 
                            peer-disabled:peer-placeholder-shown:text-black transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px]
                            peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] 
                            before:mr-3 peer-placeholder-shown:before:border-transparent before:rounded-tl-[10px] before:border-t
                            peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all 
                            peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5
                            after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-[10px] after:border-t 
                            peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all
                            peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-black peer-focus:text-indigo-400 
                            before:border-red-200 peer-focus:before:!border-indigo-400  after:border-indigo-400 peer-focus:after:!border-indigo-400 peer-focus:!rounded-[10px]"
                            style="border-radius: 10px;">Titulo
                        </label>
                    </div>
                </div>
                
                <div class="px-2">
                    <Label class="text-black flex text-left py-3" for="capaLivro">Capa Livro</Label>
                    <Input id="capaLivro" type="file" @change="(e:any) => Entity.capaLivro = e.target.files[0]" class="input text-black peer w-full h-full bg-transparent text-black font-sans 
                        fon bg-[#f7effe] t-normal outline outline-0 focus:outline-0 disabled:bg-black disabled:border-0 transition-all placeholder-shown:border 
                        placeholder-shown:border-indigo-400 placeholder-shown:border-t-indigo-400 border focus:border-2 border-t-transparent 
                        focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-indigo-400 focus:border-indigo-400"
                        placeholder=" " required/>
                </div>
                <div class="flex flex-row mt-2">
                    <div class="relative w-full  h-10 m-2">
                        <input v-model="Entity.idioma"
                            class="bg-[#f7effe] peer w-full h-full bg-transparent text-black font-sans 
                            font-normal outline outline-0 focus:outline-0 disabled:bg-black disabled:border-0 transition-all placeholder-shown:border 
                            placeholder-shown:border-indigo-400 placeholder-shown:border-t-indigo-400 border focus:border-2 border-t-transparent 
                            focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-indigo-400 focus:border-indigo-400"
                            placeholder=" " />
                        <label
                            class=" flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate 
                            peer-placeholder-shown:text-black leading-tight peer-focus:leading-tight peer-disabled:text-transparent 
                            peer-disabled:peer-placeholder-shown:text-black transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px]
                            peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] 
                            before:mr-3 peer-placeholder-shown:before:border-transparent before:rounded-tl-[10px] before:border-t
                            peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all 
                            peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5
                            after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-[10px] after:border-t 
                            peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all
                            peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-black peer-focus:text-indigo-400 
                            before:border-red-200 peer-focus:before:!border-indigo-400  after:border-indigo-400 peer-focus:after:!border-indigo-400 peer-focus:!rounded-[10px]"
                            style="border-radius: 10px;">Idioma
                        </label>
                    </div>
                    <div class="relative w-full  h-10 m-2">
                        <input v-model="Entity.pais"
                            class="bg-[#f7effe] peer w-full h-full bg-transparent text-black font-sans 
                            font-normal outline outline-0 focus:outline-0 disabled:bg-black disabled:border-0 transition-all placeholder-shown:border 
                            placeholder-shown:border-indigo-400 placeholder-shown:border-t-indigo-400 border focus:border-2 border-t-transparent 
                            focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-indigo-400 focus:border-indigo-400"
                            placeholder=" " />
                        <label
                            class=" flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate 
                            peer-placeholder-shown:text-black leading-tight peer-focus:leading-tight peer-disabled:text-transparent 
                            peer-disabled:peer-placeholder-shown:text-black transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px]
                            peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] 
                            before:mr-3 peer-placeholder-shown:before:border-transparent before:rounded-tl-[10px] before:border-t
                            peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all 
                            peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5
                            after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-[10px] after:border-t 
                            peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all
                            peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-black peer-focus:text-indigo-400 
                            before:border-red-200 peer-focus:before:!border-indigo-400  after:border-indigo-400 peer-focus:after:!border-indigo-400 peer-focus:!rounded-[10px]"
                            style="border-radius: 10px;">Pais
                        </label>
                    </div>
                </div>
                <div class="flex flex-row mt-2">
                    <div class="relative w-full h-10 m-2 mt-9">
                        <input v-model="Entity.QuantPaginas" type="number"
                            class="bg-[#f7effe] peer w-full h-full bg-transparent text-black font-sans 
                            font-normal outline outline-0 focus:outline-0 disabled:bg-black disabled:border-0 transition-all placeholder-shown:border 
                            placeholder-shown:border-indigo-400 placeholder-shown:border-t-indigo-400 border focus:border-2 border-t-transparent 
                            focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-indigo-400 focus:border-indigo-400"
                            placeholder=" " />
                        <label
                            class=" flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate 
                            peer-placeholder-shown:text-black leading-tight peer-focus:leading-tight peer-disabled:text-transparent 
                            peer-disabled:peer-placeholder-shown:text-black transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px]
                            peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] 
                            before:mr-3 peer-placeholder-shown:before:border-transparent before:rounded-tl-[10px] before:border-t
                            peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all 
                            peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5
                            after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-[10px] after:border-t 
                            peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all
                            peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-black peer-focus:text-indigo-400 
                            before:border-red-200 peer-focus:before:!border-indigo-400  after:border-indigo-400 peer-focus:after:!border-indigo-400 peer-focus:!rounded-[10px]"
                            style="border-radius: 10px;">Paginas
                        </label>
                    </div>
              
                    <div class="w-96 pl-1">
                        <Label class="text-black flex text-left py-3" for="status">Status</Label>
                        <!--Input type="text" placeholder="Status" v-model="Entity.status" class="input text-black" required/-->
                        <Select v-model="Entity.status"
                            class="bg-white w-[100px] peer w-full h-full bg-transparent text-black font-sans 
                            font-normal outline outline-0 focus:outline-0 disabled:bg-black disabled:border-0 transition-all placeholder-shown:border 
                            placeholder-shown:border-indigo-400 placeholder-shown:border-t-indigo-400 border focus:border-2 border-t-transparent 
                            focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-indigo-400 focus:border-indigo-400 border-indigo-400"
                            placeholder=" " >
                            <SelectTrigger class="w-[180px] text-black border-indigo-400 bg-[#f7effe]">
                            <SelectValue placeholder="Escolha o status" class="text-black border-indigo-400"/>
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
                </div>
                <!--div>
                    <TagsInput class="px-0 gap-0 w-80" :model-vEntity.alue="modelVaEntity.lue">
                        <div class="flex gap-2 flex-wrap items-center px-3">
                        <TagsInputItem v-for="item in modelVaEntity.lue" :key="item" :value="item">
                            <TagsInputItemText />
                            <TagsInputItemDelete />
                        </TagsInputItem>
                    
                    </div>
                </TagsInput>
                </div-->
                <div class="relative m-2 pr-4">
                        <textarea v-model="Entity.descricao" rows="5" cols="50"
                            class="bg-[#f7effe] peer w-full h-full bg-transparent text-black font-sans 
                            font-normal outline outline-0 focus:outline-0 disabled:bg-black disabled:border-0 transition-all placeholder-shown:border 
                            placeholder-shown:border-indigo-400 placeholder-shown:border-t-indigo-400 border focus:border-2 border-t-transparent 
                            focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-indigo-400 focus:border-indigo-400"
                            placeholder=" "></textarea>
                        <label
                        class=" flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate 
                            peer-placeholder-shown:text-black leading-tight peer-focus:leading-tight peer-disabled:text-transparent 
                            peer-disabled:peer-placeholder-shown:text-black transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px]
                            peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] 
                            before:mr-3 peer-placeholder-shown:before:border-transparent before:rounded-tl-[10px] before:border-t
                            peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all 
                            peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5
                            after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-[10px] after:border-t 
                            peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all
                            peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-black peer-focus:text-indigo-400 
                            before:border-red-200 peer-focus:before:!border-indigo-400  after:border-indigo-400 peer-focus:after:!border-indigo-400 peer-focus:!rounded-[10px]"
                            style="border-radius: 10px;">Descricao
                        </label>
                    </div>
                <div class="flex flex-row">
                    <Select>
                        <SelectTrigger class="w-[180px]">
                        <SelectValue placeholder="Selecione o genero" />
                        </SelectTrigger>
                        <SelectContent class="bg-white">
                        <SelectGroup v-for="(genero, index) in generos" :key="index" class="flex">
                            <SelectItem v-model="selectedGeneros"
                                    
                                    :value="genero.name" class="mr-2" >
                            {{ genero.name }}
                            </SelectItem>
                        </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                
                <div class="px-2">
                    <Label class="text-black flex text-left py-3" for="pdfLivro">PDF Livro</Label>
                    <Input id="pdfLivro" type="file" @change="(e:any) => Entity.PdfLivro = e.target.files[0]" 
                        class="bg-[#f7effe] peer w-full h-full text-black font-sans 
                        font-normal outline outline-0 focus:outline-0 disabled:bg-black disabled:border-0 transition-all placeholder-shown:border 
                        placeholder-shown:border-indigo-400 placeholder-shown:border-t-indigo-400 border focus:border-2 border-t-transparent 
                        focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-indigo-400 focus:border-indigo-400"
                        placeholder=" " />
                </div>
                <div class="pt-3">
                    <Button class="bg-indigo-500 button text-black w-32 hover:text-indigo-500 text-white" type="submit">Salvar</Button>
                </div>
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
