<script lang="ts">
 import '../style/FormsStyle.css';
 import FormsEditora from '../components/editora/FormsEditora.vue'
 import FormsEscritor from '../components/escritor/FormsEscritor.vue'
 import axios from 'axios';
 import universe from '@/assets/imagens/universe.png'

 const editora =  {
  name: String,
  cnpj:String,
  telefone:String,
  instagram:String,
  linkedin:String,
  siteInstitucional:String,
  twitter:String,
  pais:String,
  descricao:String
 }
 
 export default {
    components: {
        FormsEditora,
        FormsEscritor,
        
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
       instagram:'',
       universe
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
 
       axios.post(`${URL}/cadastro`, {
           email: this.email,
           senha: this.senha,
           tipo: 'editora',
           editora_dado :{
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
    <div class="w-[103vh] fixed ml-[-30%]">
        <img :src="universe" width="100%" height="400px"/>
    </div>
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
       <div class="formInputs">

          <div class="row">
              <div class="inputContainer col">
                  <!--i class="material-icons icon">mail</i-->
                  <input placeholder="Nome" class="form-control"></input>
              </div>
          </div>

          <div class="row">
              <div class="inputContainer col">
                  <!--i class="material-icons icon">mail</i-->
                  <input placeholder="Data Nascimento" class="form-control"></input>
              </div>
              <div class="inputContainer col">
                  <!--i class="material-icons icon">mail</i-->
                  <input placeholder="Telefone" class="form-control"></input>
              </div>
          </div>

          <div class="row">
              <div class="inputContainer col">
                  <!--i class="material-icons icon">mail</i-->
                  <input placeholder="CPF" class="form-control"></input>
              </div>
              <div class="inputContainer col">
                  <!--i class="material-icons icon">mail</i-->
                  <input placeholder="Nacionalidade" class="form-control"></input>
              </div>
          </div>

          <div class="row">
              <div class="inputContainer col">
                  <!--i class="material-icons icon">mail</i-->
                  <input placeholder="Sexo" class="form-control"></input>
              </div>
              <div class="inputContainer col">
                  <!--i class="material-icons icon">mail</i-->
                  <input placeholder="Linkedin" class="form-control"></input>
              </div>
          </div>

          <div class="row">
              <div class="inputContainer col">
                  <!--i class="material-icons icon">mail</i-->
                  <input placeholder="Instagram" class="form-control"></input>
              </div>
              <div class="inputContainer col">
                  <!--i class="material-icons icon">mail</i-->
                  <input placeholder="Twitter" class="form-control"></input>
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