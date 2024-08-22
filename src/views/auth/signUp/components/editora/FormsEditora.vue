<script lang="ts">
import './style.css'
import axios from 'axios';
import { defineComponent } from 'vue';
import Input from '@/components/ui/input/Input.vue';
import Label from '../../../../../components/ui/label/Label.vue';
import  universe from '@/assets/imagens/universe.png'

export default {
    components: {
        Input,
        Image,

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
            // InputDescricao
             
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
           alert("Cadastro Editora concluido")

       })
       .catch((error) => {
           console.error('Erro:', error);
       });
     }
   },
 };
 
 </script>
 
 <template>
  <div class='flex justify-center'>
    <div class="">
        <img :src="universe" width="72%" height="400px"/>
    </div>
    <div class="flex justify-center w-[100vh]">
      <form class="" @submit.prevent="loadUser">
       <h1 class="title">Seja Bem-Vindo!</h1>
       <h3>Crie agora sua conta</h3>
 
     
       <div class="">

          <div class="row">
              <div class=" col">
                  <!--i class="material-icons icon">mail</i-->
                  <Input placeholder="Nome" v-model="nome" class="my-1 border"></Input>
              </div>
          </div>

          <div class="row">
              <div class=" col">
                  <!--i class="material-icons icon">mail</i-->
                  <Input placeholder="CNPJ" v-model="cnpj" class="my-1 border"></Input>
              </div>
              <div class=" col">
                  <!--i class="material-icons icon">mail</i-->
                  <Input placeholder="Telefone" v-model="telefone" class="my-1 border"></Input>
              </div>
          </div>

          <div class="row">
              <div class=" col">
                  <!--i class="material-icons icon">mail</i-->
                  <Input placeholder="Linkedin" v-model="linkedin" class="my-1 border"></Input>
              </div>
              <div class=" col">
                  <!--i class="material-icons icon">mail</i-->
                  <Input placeholder="Site Institucional" v-model="siteInstitucional" class="my-1 border"></Input>
              </div>
          </div>

          <div class="row">
              <div class=" col">
                  <!--i class="material-icons icon">mail</i-->
                  <Input placeholder="twitter" v-model="twitter" class="my-1 border"></Input>
              </div>
              <div class=" col">
                  <!--i class="material-icons icon">mail</i-->
                  <Input placeholder="Instagram" v-model="instagram" class="my-1 border"></Input>
              </div>
          </div>

          <div class="row">
              <div class=" col">
                  <!--i class="material-icons icon">mail</i-->
                  <Input placeholder="Pais" v-model="pais" class="my-1 border"></Input>
              </div>
              <div class=" col">
                  <!--i class="material-icons icon">mail</i-->
                  <Input placeholder="Descricao" v-model="descricao" class="my-1 border"></Input>
              </div>
          </div>
          <div class="">
         <div class="">
           <Input placeholder="E-mail" class="my-1 border" v-model="email"></Input>
         </div>
 
         <div class="">
           <Input placeholder="Senha" class="my-1 border" v-model="senha" required type="password"></Input>
         </div>
 
         <div class="">
           <Input placeholder="Confirmar Senha" class="my-1 border" required type="password"></Input>
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
 </div>  
 </template>

 <style>
 .border {
  border-radius: 10px;
 }
 </style>