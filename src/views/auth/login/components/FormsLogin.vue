<template>
    <div className='containerRight'>
        <form class="form" @submit.prevent="loadUser">
      <h1 class="title">Seja Bem-Vindo!</h1>
      <h3>Crie agora sua conta</h3>

      <div class="formInputs">
        <div class="inputContainer">
          <i class="material-icons icon">mail</i>
          <input placeholder="E-mail" class="form-control" v-model="email"></input>
        </div>

        <div class="inputContainer">
          <i class="material-icons icon">lock</i>
          <input placeholder="Senha" class="form-control" v-model="senha" required type="password"></input>
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
    </form>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import '../style/FormsStyle.scss';

export default {
    name: 'FormsLogin',
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
            const URL = 'http://localhost:5000';

            axios.post(`${URL}/usuario/login`, {
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
}
</script>

<style>
/* Adicione seus estilos aqui */
</style>