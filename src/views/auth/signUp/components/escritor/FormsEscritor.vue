<script lang="ts">
import './style.css'
import axios from 'axios';
import { defineComponent } from 'vue';
import Input from '../../../../../components/ui/input/Input.vue';
import Label from '../../../../../components/ui/label/Label.vue';
import  universe from '@/assets/imagens/header-img.svg'
import { RouterLink } from 'vue-router';
import Button from '@/components/ui/button/Button.vue';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { UserService } from '@/service/user.service';
import { format } from 'date-fns';

export default defineComponent({
    name: 'CadastrarEscritor',
    components: {
        Input,
        Label,
        Select,
        SelectContent,
        SelectGroup,
        SelectItem,
        SelectLabel,
        SelectTrigger,
        SelectValue,
        Button
    },
    data() {
        return {
            Entity: {
                email: '',
                senha: '',
                tipo : 'escritor' ,
                escritor_dados : {
                    nome : '',
                    dataNasc : '',
                    cpf : '',
                    nacionalidade : '',
                    telefone:'',
                    linkedin:'',
                    twitter:'',
                    descricao:'',
                    instagram:'',
                    sexo: '',
                } 
            },
            confirmSenha: '',
            universe,
            format
        }
    },
    mounted(){
    },
    methods: {
        loadUser(){
            console.log('CLICK');
            const URL = 'http://localhost:5001';

            this.Entity.escritor_dados.dataNasc = this.formatDate(this.Entity.escritor_dados.dataNasc)
            let EntityCopy = JSON.parse(JSON.stringify(this.Entity));
           
             // caso de errado, verifica no inspecionar se os dados conferem com oq vc 
             // digitou, se faltar algo no EntityCopy vc me avisa
             console.log('dados: ', EntityCopy);
             
            
            if (EntityCopy.senha == this.confirmSenha) {

                 // caso nao encontre, descomente a linha do axios
                //axios.post(`${URL}/cadastro`, EntityCopy)
                // e comente a linha abaixo
                axios.post(`${URL}/cadastro`,EntityCopy)
                    .then((response) => {
                        console.log(response.data);
                        alert("Cadastro Escritor concluido")
                        this.$router.push('/login')
                    })
                    .catch((error) => {
                        alert("Cadastro Escritor nao pode ser concluido")
                        console.error('Erro:', error);
                    });
            }
        },
        formatDate(date:any) {
      return format(date, 'dd/MM/yyyy'); // Formato: 19/09/2024
    }
    }
})


</script>

<template>
    <div class='text-white banner flex justify-center w-[211.4vh] h-[100vh]'>
        <div class="text-white fixed flex mr-[40%] mt-[10%]">
            <img :src="universe" width="80%" height="400px"/>
        </div>
        
        <div class="text-white flex justify-center items-center py-[40px] ml-[40%] w-full">
            <form class="text-white w-[80vh] justify-left" @submit.prevent="loadUser">
                <h1 class="text-white title">Seja Bem-Vindo, Escritor!</h1>
                <h3 class="mb-4 mb-10">Crie agora sua conta</h3>

                <div class="">
                    <div class="flex" >
                        <div class="relative w-full h-10 m-2">
                            <input v-model="Entity.escritor_dados.nome"
                            class="peer w-full h-full bg-transparent text-white font-sans 
                            font-normal outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 transition-all placeholder-shown:border 
                            placeholder-shown:border-white placeholder-shown:border-t-white border focus:border-2 border-t-transparent 
                            focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-white focus:border-white"
                            placeholder=" " />
                            <label
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
                                style="border-radius: 10px;">Nome
                            </label>
                        </div>
                    </div>
                    <div class="flex" >
                        <div class="relative w-full h-10 m-2">
                            <input v-model="Entity.email"
                            class="peer w-full h-full bg-transparent text-white font-sans 
                            font-normal outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 transition-all placeholder-shown:border 
                            placeholder-shown:border-white placeholder-shown:border-t-white border focus:border-2 border-t-transparent 
                            focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-white focus:border-white"
                            placeholder=" " />
                            <label
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
                                style="border-radius: 10px;">Email
                            </label>
                        </div>
                    </div>
                   
                    <div class="flex" > 

                        <div class="relative w-full h-10 m-2">
                            <input v-model="Entity.escritor_dados.nacionalidade"
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
                                style="border-radius: 10px;">Nacionalidade
                            </label>
                        </div>
                        <div class="relative w-full h-10 m-2">
                            <input v-model="Entity.escritor_dados.dataNasc" type="date"
                                class="peer w-full h-full bg-transparent text-white font-sans 
                                font-normal outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 transition-all placeholder-shown:border 
                                placeholder-shown:border-white placeholder-shown:border-t-white border focus:border-2 border-t-transparent 
                                focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-white focus:border-white"
                                placeholder=" " />
                            <label
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
                                style="border-radius: 10px;">Data Nascimento
                            </label>
                        </div>
                    </div>
                    <div class="flex" > 

                        <div class="relative w-full h-10 m-2">
                            <input v-model="Entity.escritor_dados.telefone"
                                class="peer w-full h-full bg-transparent text-white font-sans 
                                font-normal outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 transition-all placeholder-shown:border 
                                placeholder-shown:border-white placeholder-shown:border-t-white border focus:border-2 border-t-transparent 
                                focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-white focus:border-white"
                                placeholder=" " />
                            <label
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
                                style="border-radius: 10px;">Telefone
                            </label>
                        </div>
                        <div class="relative w-full h-10 m-2">
                            <input v-model="Entity.escritor_dados.cpf" type="text"
                                class="peer w-full h-full bg-transparent text-white font-sans 
                                font-normal outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 transition-all placeholder-shown:border 
                                placeholder-shown:border-white placeholder-shown:border-t-white border focus:border-2 border-t-transparent 
                                focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-white focus:border-white"
                                placeholder=" " />
                            <label
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
                                style="border-radius: 10px;">CPF
                            </label>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    <div class="flex" > 
                        <div class="relative w-full h-10 m-2">
                            <Select class="" v-model="Entity.escritor_dados.sexo" >
                                <SelectTrigger class="w-full">
                                <SelectValue placeholder="Selecione seu Genero" />
                                </SelectTrigger>
                                <SelectContent class="bg-white" >
                                    <SelectGroup>
                                        <SelectLabel>Genero</SelectLabel>
                                        <SelectItem value="mulher">
                                        Mulher
                                        </SelectItem>
                                        <SelectItem value="homem">
                                        Homem
                                        </SelectItem>
                                        <SelectItem value="nao-binario">
                                            Não-binário
                                        </SelectItem>
                                        <SelectItem value="gender-fluid">
                                            Gênero fluido
                                        </SelectItem>
                                        <SelectItem value="outro">
                                        Outro
                                        </SelectItem>
                                        <SelectItem value="nao-declarado">
                                        Prefiro não declarar
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                </div>
                <div class="flex mt-3" > 

                    <div class="relative w-full h-10 m-2">
                        <input v-model="Entity.escritor_dados.linkedin"
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
                            style="border-radius: 10px;">Linkedin
                        </label>
                    </div>
                        <div class="relative w-full h-10 m-2">
                            <input v-model="Entity.escritor_dados.instagram" type="text"
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
                                style="border-radius: 10px;">Instagram
                            </label>
                        </div>
                    </div>
                    <div class="flex" > 

                        <div class="relative w-full h-10 m-2">
                            <input v-model="Entity.escritor_dados.twitter"
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
                                style="border-radius: 10px;">Twitter
                            </label>
                        </div>
                            <div class="relative w-full h-10 m-2">
                              
                            </div>
                        </div>
                        <div class="flex mt-4" > 

                            <div class="relative w-full h-10 m-2">
                                <input v-model="Entity.senha"
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
                                    style="border-radius: 10px;">Senha
                                </label>
                            </div>
                                <div class="relative w-full h-10 m-2">
                                    <input v-model="confirmSenha" type="text"
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
                                        style="border-radius: 10px;">Confirmar senha
                                    </label>
                                </div>
                            </div>
                            <div v-if="Entity.senha != confirmSenha" >
                                <p>As senhas nao conferem</p>
                            </div>
                        <div class="mt-10">
                            <Button class="text-white bg-white text-black rounded-[10px] w-[200px] hover:bg-white" type="submit">Cadastrar</Button>
                        </div>
                        <p class="haveAccount">Ja possui uma conta? <RouterLink to="/login" class="haveAccount">Entrar</RouterLink></p>
            
                </div>
            </form>
        </div>
    </div>
</template>

<style>
.border {
 border-radius: 10px;
}

.banner {
   background-image: url("@/assets/imagens/5432299.jpg");
}

</style>