<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import '../style/FormsStyle.scss';
import { Lock, Mail, Router } from 'lucide-vue-next';
import Input from '@/components/ui/input/Input.vue';

export default defineComponent({
    name: 'FormsLogin',
    components: {
      Lock,
      Mail,
      Input
    },
    data() {
        return {
            email: '',
            senha: ''
        }
    },
    mounted(){
    },
    methods: {
        loadUser(){
            console.log('CLICK');
            const URL = 'http://localhost:5001';

            axios.post(`${URL}/login`, {
                email: this.email,
                senha: this.senha,
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
  <div className='containerRight'>
      <form class="form" @submit.prevent="loadUser">
    <h1 class="title">Seja Bem-Vindo!</h1>
    <h3>Crie agora sua conta</h3>

    <div class="formInputs">
      <div class="inputContainer">
        <Mail class="material-icons icon"/>
        <Input placeholder="E-mail" class="form-control border-0" v-model="email"/>
      </div>

      <div class="inputContainer">
        <Lock class="material-icons icon"/>
        <Input placeholder="Senha" class="form-control border-0" v-model="senha" required type="password"/>
      </div>

    </div>

    <div class="row">
      <div class="col">
        <Checkbox />
      </div>
      <div class="col forgotContainer">
        <p class="text-left mt-[-20px] ml-[13px] mb-[20px]">Esqueceu a senha?</p>
      </div>
    </div>

    <div class="buttonContainer">
      <button class="button" type="submit">Entrar</button>
    </div>

    <p class="haveAccount">Nao possui uma conta?</p>
    <p>Cadastrar como <RouterLink to="/cadastro/editora" class="haveAccount">Editora</RouterLink></p>
    <p>Cadastrar como <RouterLink to="/cadastro/escritor" class="haveAccount">Escritor</RouterLink></p>
  </form>
  </div>
</template>


<style>

</style>