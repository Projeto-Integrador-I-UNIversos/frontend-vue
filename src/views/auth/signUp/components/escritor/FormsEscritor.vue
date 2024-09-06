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
            nome : '',
            dataNasc : '',
            cpf : '',
            nacionalidade : '',
            idUsuario: '',
            tipo :'' ,
            email: '',
            senha: '',
            telefone:'',
            linkedin:'',
            twitter:'',
            descricao:'',
            instagram:'',
            sexo: '',
            universe
        }
    },
    mounted(){
    },
    methods: {
        loadUser(){
            console.log('CLICK');
            const URL = 'http://localhost:5001';
           
            axios.post(`${URL}/cadastro`, {
                email: this.email,
                senha: this.senha,
                tipo: 'escritor',
                escritor_dados :{
                    nome: this.nome,
                    dataNasc: this.dataNasc,
                    telefone: this.telefone,
                    cpf: this.cpf,
                    instagram: this.instagram,
                    linkedin: this.linkedin,
                    sexo: this.sexo,
                    twitter: this.twitter,
                    nacionalidade: this.nacionalidade
                }
                
            })
            .then((response) => {
                console.log(response.data);
                alert("Cadastro Escritor concluido")

                })
                this.$router.push('/login')
            .catch((error) => {
                console.error('Erro:', error);
            });
        }
    }
})


</script>

<template>
    <div class='text-white banner flex justify-center w-[211.4vh] h-[100vh]'>
        <div class="text-white fixed flex mr-[40%] mt-[10%]">
            <img :src="universe" width="80%" height="400px"/>
        </div>
    
        <!--div class='flex justify-center '>
            <div class="w-[103vh] fixed ml-[-30%]">
                <img :src="universe" width="100%" height="400px"/>
            </div>
        <div class="flex bg-green-400 justify-center items-center w-[100vh] pl-[160vh] py-[40px]">
            <form class="form" @submit.prevent="loadUser">
        <h1 class="title">Seja Bem-Vindo!</h1>
        <h3>Crie agora sua conta</h3>
    
        <div class="formInputs">
            <div class="inputContainer">
            <input placeholder="E-mail" class="form-control" v-model="email"></input>
            </div>
    
            <div class="inputContainer">
            <input placeholder="Senha" class="form-control" v-model="senha" required type="password"></input>
            </div>
    
            <div class="inputContainer">
            <input placeholder="Confirmar Senha" class="form-control" required type="password"></input>
            </div>
        </div>

    
        
        <div class="formInputs">

            <div class="row">
                <div class="inputContainer col">
                    <input placeholder="Nome" v-model="nome" class="form-control"></input>
                </div>
            </div>

            <div class="row">
                <div class="inputContainer col">
                    <input placeholder="Data Nascimento" v-model="dataNasc" class="form-control"></input>
                </div>
                <div class="inputContainer col">
                    <input placeholder="Telefone" class="form-control" v-model="telefone"></input>
                </div>
            </div>

            <div class="row">
                <div class="inputContainer col">
                    <input placeholder="CPF" v-model="cpf" class="form-control"></input>
                </div>
                <div class="inputContainer col">
                    <input placeholder="Nacionalidade" v-model="nacionalidade" class="form-control"></input>
                </div>
            </div>

            <div class="row">
                <div class="inputContainer col">
                    <input placeholder="Sexo" v-model="sexo" class="form-control"></input>
                </div>
                <div class="inputContainer col">
                    <input placeholder="Linkedin" v-model="linkedin" class="form-control"></input>
                </div>
            </div>

            <div class="row">
                <div class="inputContainer col">
                    <input placeholder="Instagram" v-model="instagram" class="form-control"></input>
                </div>
                <div class="inputContainer col">
                    <input placeholder="Twitter" v-model="twitter" class="form-control"></input>
                </div>
            </div>

            </div>

            <div class="row">
            <div class="col">
            <Checkbox />
            </div>
            <div class="col forgotContainer">
            <p class="forgotPassword">Esqueceu a senha?</p>
            </div>
            </div>

            <div class="buttonContainer">
            <button class="button" type="submit">Entrar</button>
            </div>
        <p class="haveAccount">Ja possui uma conta? <Link to="/login" class="haveAccount">Entrar</Link></p>
            
            <h1 class="title">Seja Bem-Vindo!</h1>
        <h3>Crie agora sua conta</h3>
        
        </form>
        </div>

    
    
    </div--> 
        <div class="text-white flex justify-center items-center py-[40px] ml-[40%] w-full">
            <form class="text-white w-[80vh] justify-left" @submit.prevent="loadUser">
                <h1 class="text-white title">Seja Bem-Vindo, Escritor!</h1>
                <h3 class="mb-4 mb-10">Crie agora sua conta</h3>

                <div class="">
                    <div class="flex" >
                        <div class="relative w-full h-10 m-2">
                            <input v-model="nome"
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
                            <input v-model="nacionalidade"
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
                            <input v-model="dataNasc" type="date"
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
                                style="border-radius: 10px;">Data Nascimento
                            </label>
                        </div>
                    </div>
                    <div class="flex" > 

                        <div class="relative w-full h-10 m-2">
                            <input v-model="telefone"
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
                                style="border-radius: 10px;">Telefone
                            </label>
                        </div>
                        <div class="relative w-full h-10 m-2">
                            <input v-model="cpf" type="text"
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
                                style="border-radius: 10px;">CPF
                            </label>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    <div class="flex" > 
                        <div class="relative w-full h-10 m-2">
                            <Select class="" >
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
                <div class="flex mt-10" > 

                    <div class="relative w-full h-10 m-2">
                        <input v-model="linkedin"
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
                            <input v-model="instagram" type="text"
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
                            <input v-model="twitter"
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
                                <input v-model="instagram" type="text"
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