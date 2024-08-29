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
        Label
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
    <div class="w-[103vh] fixed ml-[-30%]">
        <img :src="universe" width="100%" height="400px"/>
    </div>
    <div class="flex justify-center items-center w-[100vh] pl-[160vh] py-[40px]">
      <form class="" @submit.prevent="loadUser">
       <h1 class="title">Seja Bem-Vindo!</h1>
       <h3>Crie agora sua conta</h3>

          <div>
              <div class=" col">
                 <Label class="flex text-left ml-3 mb-2">Nome:</Label>
                 <Input placeholder="Nome" v-model="nome" class="my-1 border"></Input>
              </div>
              <div class="py-3">
                <Label class="flex text-left ml-3 mb-2">Email:</Label>
                <Input placeholder="E-mail" class="my-1 border" v-model="email"></Input>
              </div>
              <div class="flex">
                <div class="py-3 pr-4">
                  <Label class="flex text-left ml-3 mb-2">Pais:</Label>
                  <Input placeholder="Pais" v-model="pais" class="my-1 border"></Input>
                </div>
                <div class="pt-3 pb-6" >
                  <Label class="flex text-left ml-3 mb-2">CNPJ:</Label>
                  <Input placeholder="CNPJ" v-model="cnpj" class="my-1 border"></Input> 
                </div>
              </div>
              <div>
                <Input placeholder="Telefone" v-model="telefone" class="my-1 border"></Input>
              </div>
              <div class="flex">
                <div class="py-6 pr-4">
                  <Label class="flex text-left ml-3 mb-2">Linkedin:</Label>
                  <Input placeholder="Linkedin" v-model="linkedin" class="my-1 border"></Input>
                </div>
                <div class="py-6">
                  <Label class="flex text-left ml-3 mb-2">Site Institucional:</Label>
                  <Input placeholder="Site Institucional" v-model="siteInstitucional" class="my-1 border"></Input>
                </div>
              </div>
              <div class="flex">
                <div class="py-2 pr-4">
                  <Label class="flex text-left ml-3 mb-2">Twitter:</Label>
                  <Input placeholder="twitter" v-model="twitter" class="my-1 border"></Input>
                </div>
                <div class="py-2">
                  <Label class="flex text-left ml-3 mb-2">Instagram:</Label>
                  <Input placeholder="Instagram" v-model="instagram" class="my-1 border"></Input>
                </div>
              </div>
              <div class="py-2">
                <Label class="flex text-left ml-3 mb-2">Descricao:</Label>
                <textarea v-model="descricao" placeholder="descricao" rows="5" cols="50" class="border border-gray-300 p-4 text-sm"></textarea>
              </div>
              <div>
                <div class="py-2">
                  <Label class="flex text-left ml-3 mb-2">Senha:</Label>
                  <Input placeholder="Senha" class="my-1 border" v-model="senha" required type="password"></Input>
                </div>
        
                <div class="py-2">
                  <Label class="flex text-left ml-3 mb-2">Repetir senha:</Label>
                  <Input placeholder="Confirmar Senha" class="my-1 border" required type="password"></Input>
                </div>
              </div>
          </div>

          <div class="row">
          <div class="">
          <p class="text-left">Esqueceu a senha?</p>
          </div>
          </div>


          <div class="">
          <button class="bg-violet-500 text-white rounded-[30px] w-[200px]" type="submit">Entrar</button>
          </div>
       <p class="text-left mt-3">Ja possui uma conta? <RouterLink to="/login" class="text-black">Entrar</RouterLink></p>
     </form>
    </div>
 </div>  
 </template>

 <style>
 .border {
  border-radius: 30px;
 }
 </style>