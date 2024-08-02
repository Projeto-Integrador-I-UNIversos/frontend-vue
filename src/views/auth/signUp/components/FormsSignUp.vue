<template>
  <div className='containerRight'>
     
     <form v-if="showForm" class="form" @submit.prevent="loadUser">
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
 
         <div class="inputContainer">
           <i class="material-icons icon">lock</i>
           <input placeholder="Confirmar Senha" class="form-control" required type="password"></input>
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
 
       <div class="checkbox-container">
         <div class="select-container"></div>
         <label class="checkbox-label">
           <input
             type="radio"
             value="option1"
             v-model="selectedOption"
           />
           <span class="checkbox-checkmark"></span>
           Escritor
         </label>
         <label class="checkbox-label">
           <input
             type="radio"
             value="option2"
             v-model="selectedOption"
           />
           <span class="checkbox-checkmark"></span>
           Editora
         </label>
       </div>
 
       <div class="buttonContainer">
         <button class="button" type="submit">Entrar</button>
       </div>
 
       <p class="haveAccount">Ja possui uma conta? <Link to="/login" class="haveAccount">Entrar</Link></p>
     </form>
 
     <FormsEscritor v-else-if="selectedOption == 'option1'" />
 
     <FormsEditora v-else/>
 </div>  
 </template>
 
 <script>
 import { ref } from 'vue';
 import { useRouter } from 'vue-router';
 import '../style/FormsStyle.css';
 import FormsEditora from '../components/editora/FormsEditora.vue'
 import FormsEscritor from '../components/escritor/FormsEscritor.vue'
 import axios from 'axios';
 
 export default {
     components: {
     FormsEditora,
     FormsEscritor,
   },
   data() {
     return {
       selectedOption: 'option1', 
       showForm: true,
       tipo :'escritor' ,
       email: '',
       senha: ''
     };
   },
   methods: {
     handleOptionChange(option) {
       if (this.selectedOption === option) {
         this.selectedOption = '';
         console.log('op 1'); // Desmarcar se já está selecionado
       } else {
         this.selectedOption = option; // Selecionar a nova opção
       }
     },
     handleSubmit() {
         if (this.selectedOption) {
            
             this.showForm = false; // Esconder o formulário e mostrar o FormsEditora
            // inputDescricao
             
         }
     },
     loadUser() {
       const URL = 'http://localhost:5000';
 
       axios.post(`${URL}/usuario/cadastro`, {
           nome: 'lara',
           email: this.email,
           senha: this.senha,
           tipo: this.tipo
       })
       .then((response) => {
           console.log(response.data);
           this.handleSubmit()
       })
       .catch((error) => {
           console.error('Erro:', error);
       });
     }
   },
 };
 
 </script>
 
 <style>
 
 </style>