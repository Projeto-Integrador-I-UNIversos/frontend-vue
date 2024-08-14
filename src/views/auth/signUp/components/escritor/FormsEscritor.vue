<script lang="ts">
import './style.css'
import axios from 'axios';
import { defineComponent } from 'vue';
import Input from '../../../../../components/ui/input/Input.vue';
import Label from '../../../../../components/ui/label/Label.vue';

export default defineComponent({
    name: 'CadastrarEscritor',
    components: {
        Input,
        Label
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
                  <!--i class="material-icons icon">mail</i-->
                  <input placeholder="Nome" v-model="nome" class="form-control"></input>
              </div>
          </div>

          <div class="row">
              <div class="inputContainer col">
                  <!--i class="material-icons icon">mail</i-->
                  <input placeholder="Data Nascimento" v-model="dataNasc" class="form-control"></input>
              </div>
              <div class="inputContainer col">
                  <!--i class="material-icons icon">mail</i-->
                  <input placeholder="Telefone" class="form-control" v-model="telefone"></input>
              </div>
          </div>

          <div class="row">
              <div class="inputContainer col">
                  <!--i class="material-icons icon">mail</i-->
                  <input placeholder="CPF" v-model="cpf" class="form-control"></input>
              </div>
              <div class="inputContainer col">
                  <!--i class="material-icons icon">mail</i-->
                  <input placeholder="Nacionalidade" v-model="nacionalidade" class="form-control"></input>
              </div>
          </div>

          <div class="row">
              <div class="inputContainer col">
                  <!--i class="material-icons icon">mail</i-->
                  <input placeholder="Sexo" v-model="sexo" class="form-control"></input>
              </div>
              <div class="inputContainer col">
                  <!--i class="material-icons icon">mail</i-->
                  <input placeholder="Linkedin" v-model="linkedin" class="form-control"></input>
              </div>
          </div>

          <div class="row">
              <div class="inputContainer col">
                  <!--i class="material-icons icon">mail</i-->
                  <input placeholder="Instagram" v-model="instagram" class="form-control"></input>
              </div>
              <div class="inputContainer col">
                  <!--i class="material-icons icon">mail</i-->
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
     </form>
 
 
 </div> 
</template>
