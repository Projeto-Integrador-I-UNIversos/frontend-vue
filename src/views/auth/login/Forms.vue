<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import { Lock, Mail, Router } from 'lucide-vue-next';
import Input from '@/components/ui/input/Input.vue';
import  universe from '@/assets/imagens/header-img.svg'
import Button from '@/components/ui/button/Button.vue';
import router from '@/router';
import TokenService from '@/service/sorage.service';

export default defineComponent({
    name: 'Forms',
    components: {
      Lock,
      Mail,
      Input,
      Button
    },
    data() {
        return {
            email: '',
            senha: '',
            universe,
            router
        }
    },
    mounted(){
    },
    methods: {
        loadUser(){
            console.log('CLICK');
            const URL = 'http://localhost:5001';

            // caso de errado, verifica no inspecionar se os dados conferem com oq vc 
            // digitou, se faltar algo nesse log vc me avisa
            console.log(`dados: email ${this.email}, senha ${this.senha}`);
            

            axios.post(`${URL}/login`, {
                email: this.email,
                senha: this.senha,
            })
            .then((response) => {
                console.log(response.data);
                // implementar logica que verifica se e editora ou escritor
                // algo como 
                /**
                 * if (tipo == 'escritor') 
                 *      router.push({ name: 'Escritor'})
                 * else if (tipo == 'editora') 
                 *      router.push({name: 'Editora'})
                 * else 
                 *      router.push({name: 'Admin'})
                 */
                 TokenService.saveUser(response.data.id)

                 if (response.data.tipo = 'escritor') {
                    router.push('/escritor')
                 }
                 else if (response.data.tipo = 'editora'){
                    router.push('/editora')
                 }

            })
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
    <div class="text-white flex justify-center items-center py-[40px] ml-[40%] w-full">
        <form class="text-white w-[60vh] justify-left" @submit.prevent="loadUser">
            <h1 class="title">Seja Bem-Vindo de volta!</h1>
            <h3 class="mb-10" >Entre agora na sua conta</h3>

            <div class="">
            
                <div class="relative w-full h-10 m-3">
                    <input v-model="email"
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
                        style="border-radius: 10px;">Nome
                    </label>
                </div>  

            
                <div class="relative w-full h-10 m-3">
                    <input v-model="senha"
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
            

            </div>

            <div class="row">
            <div class="col">
                <Checkbox />
            </div>
            <div class="col forgotContainer">
                <p class="text-left ml-3">Esqueceu a senha?</p>
            </div>
            </div>

            <div class="mt-10 mb-2 w-full flex justify-center">
                <Button class="w-[50vh] text-white bg-white text-black rounded-[10px] hover:bg-white" type="submit">Entrar</Button>
            </div>

            <p class="ml-3 mt-4">Nao possui uma conta?</p>
            <div class="flex flex-row ml-3 justify-center mt-3" >
                <p>Cadastrar como <RouterLink to="/cadastro/editora" class="haveAccount">Editora</RouterLink></p>
                <p class="ml-10">Cadastrar como <RouterLink to="/cadastro/escritor" class="haveAccount">Escritor</RouterLink></p>
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