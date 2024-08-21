<script lang="ts">
import './style.css'
import axios from 'axios';
import { defineComponent } from 'vue';
import Input from '../../../../../components/ui/input/Input.vue';
import Label from '../../../../../components/ui/label/Label.vue';

export default {
    components: {
        
   },
   data() {
     return {
       selectedOption: 'option1', 
       showForm: true,
       nome: '',
       tipo :'' ,
       email: '',
       senha: '',
       cnpj:'',
       telefone:'',
       linkedin:'',
       siteInstitucional:'',
       twitter:'',
       pais:'',
       descricao:'',
       instagram:''
     };
   },
   methods: {
     handleOptionChange(option:any) {
       if (this.selectedOption === option) {
         this.selectedOption = '';
         console.log('op 1');
         this.tipo = 'escritor' 
       } else {
         this.selectedOption = option; 
         this.tipo = 'editora'
       }
     },
     handleSubmit() {
         if (this.selectedOption) {
            
             this.showForm = false; // Esconder o formulário e mostrar o FormsEditora
            // inputDescricao
             
         }
         console.log(this.selectedOption);
         
         return this.selectedOption
     },
     async loadUser() {

     //const tipo = await this.handleSubmit()
     //console.log(tipo);
     
      
       const URL = 'http://localhost:5001';
        console.log(this.email);
        console.log(this.senha);
        console.log(this.nome);
        console.log(this.email); 
        
       axios.post(`${URL}/cadastro`, {
           email: this.email,
           senha: this.senha,
           tipo: 'editora',
           editora_dados :{
              nome: this.nome,
              cnpj: this.cnpj,
              telefone: this.telefone,
              instagram: this.instagram,
              linkedin: this.linkedin,
              siteInstitucional: this.siteInstitucional,
              twitter: this.twitter,
              pais: this.pais,
              descricao: this.descricao
           }
          
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
                  <input placeholder="CNPJ" v-model="cnpj" class="form-control"></input>
              </div>
              <div class="inputContainer col">
                  <!--i class="material-icons icon">mail</i-->
                  <input placeholder="Telefone" v-model="telefone" class="form-control"></input>
              </div>
          </div>

          <div class="row">
              <div class="inputContainer col">
                  <!--i class="material-icons icon">mail</i-->
                  <input placeholder="Linkedin" v-model="linkedin" class="form-control"></input>
              </div>
              <div class="inputContainer col">
                  <!--i class="material-icons icon">mail</i-->
                  <input placeholder="Site Institucional" v-model="siteInstitucional" class="form-control"></input>
              </div>
          </div>

          <div class="row">
              <div class="inputContainer col">
                  <!--i class="material-icons icon">mail</i-->
                  <input placeholder="twitter" v-model="twitter" class="form-control"></input>
              </div>
              <div class="inputContainer col">
                  <!--i class="material-icons icon">mail</i-->
                  <input placeholder="Instagram" v-model="instagram" class="form-control"></input>
              </div>
          </div>

          <div class="row">
              <div class="inputContainer col">
                  <!--i class="material-icons icon">mail</i-->
                  <input placeholder="Pais" v-model="pais" class="form-control"></input>
              </div>
              <div class="inputContainer col">
                  <!--i class="material-icons icon">mail</i-->
                  <input placeholder="Descricao" v-model="descricao" class="form-control"></input>
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

 <style>
 
 </style>