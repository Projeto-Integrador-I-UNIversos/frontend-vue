<script lang="ts">
import './style.css'
import axios from 'axios';
import { defineComponent } from 'vue';
import Input from '@/components/ui/input/Input.vue';
import Label from '../../../../../components/ui/label/Label.vue';
import  universe from '@/assets/imagens/header-img.svg'
import Button from '@/components/ui/button/Button.vue';
import { UserService } from '@/service/user.service';

export default {
    components: {
        Input,
        Image,
        Label,
        Button
   },
   data() {
     return {
          selectedOption: 'option1', 
          Entity: {
              email: '',
              senha: '',
              tipo :'editora' ,
              editora_dados: {
                    nome: '',
                    cnpj:'',
                    telefone:'',
                    linkedin:'',
                    siteInstitucional:'',
                    twitter:'',
                    pais:'',
                    descricao:'',
                    instagram:'',
                }
          },
          confirmSenha: '',
          showForm: true,
          
          
          universe
        };
   },
   methods: {
     handleOptionChange(option:any) {
       if (this.selectedOption === option) {
         this.selectedOption = '';
         console.log('op 1');
         this.Entity.tipo = 'escritor' 
       } else {
         this.selectedOption = option; 
         this.Entity.tipo = 'editora'
       }
     },
     handleSubmit() {
         if (this.selectedOption) {
            
             this.showForm = false; 
             
         }
         console.log(this.selectedOption);
         
         return this.selectedOption
     },
     async loadUser() {
          const URL = 'http://localhost:5001'; 
          let EntityCopy = JSON.parse(JSON.stringify(this.Entity));

          // caso de errado, verifica no inspecionar se os dados conferem com oq vc 
          // digitou, se faltar algo no EntityCopy vc me avisa
          
            
          if (EntityCopy.senha == this.confirmSenha) {
              // caso nao encontre, descomente a linha do axios
              //axios.post(`${URL}/cadastro`, EntityCopy)
              // e comente a linha abaixo
              console.log(EntityCopy);
              axios.post(`${URL}/cadastro`, EntityCopy)
              //UserService.cadastrar(EntityCopy)
                  .then((response) => {
                      console.log(response.data);
                      this.handleSubmit()
                      alert("Cadastro Editora concluido")
                      this.$router.push('/login')
                  })
                  .catch((error) => {
                        alert("Cadastro Editora nao pode ser concluido")
                        console.error('Erro:', error);
                  });
          }
     }
   },
 };
 
 </script>
 
 <template>
  <div class='text-white banner flex justify-center w-[211.4vh] h-[100vh]'>
    <div class="text-white fixed flex mr-[40%] mt-[10%]">
        <img :src="universe" width="80%" height="400px"/>
    </div>
    <div class="text-white flex justify-center items-center py-[40px] ml-[40%] w-full">
      <form class="text-white w-[80vh] justify-left" @submit.prevent="loadUser">
       <h1 class="text-white title">Seja Bem-Vinda, Editora!</h1>
       <h3 class="mb-4">Crie agora sua conta</h3>
       
          <div class="">
            <div class="flex" > 
                <div class="relative w-full h-10 m-2">
                    <input v-model="Entity.editora_dados.nome"
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
                          
                <div class="relative w-full h-10 m-2">
                    <input v-model="Entity.email"
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
                        style="border-radius: 10px;">Email
                    </label>
                </div>
            </div>
              
              <div class="text-white flex">
                <div class="relative w-full h-10 m-2">
                    <input v-model="Entity.editora_dados.pais"
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
                        style="border-radius: 10px;">Pais
                    </label>
                </div>
                
                <div class="relative w-full h-10 m-2">
                    <input v-model="Entity.editora_dados.cnpj"
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
                        style="border-radius: 10px;">CNPJ
                    </label>
                </div>
              </div>
              <div class="relative w-full h-10 m-2 pr-4">
                    <input v-model="Entity.editora_dados.telefone"
                    class="peer w-full  h-full bg-transparent text-white font-sans 
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
              <div class="text-white flex">
                <div class="relative w-full h-10 m-2">
                    <input v-model="Entity.editora_dados.linkedin"
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
                    <input v-model="Entity.editora_dados.siteInstitucional"
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
                        style="border-radius: 10px;">Site Institucional
                    </label>
                </div>
              </div>
              <div class="text-white flex">
                <div class="relative w-full h-10 m-2">
                    <input v-model="Entity.editora_dados.twitter"
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
                    <input v-model="Entity.editora_dados.instagram"
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
      
              <div class="relative w-full m-2 pr-4">
                    <textarea v-model="Entity.editora_dados.descricao" rows="5" cols="50"
                    class="peer w-full h-full bg-transparent text-white font-sans 
                    font-normal outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 transition-all placeholder-shown:border 
                    placeholder-shown:border-white placeholder-shown:border-t-white border focus:border-2 border-t-transparent 
                    focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-white focus:border-white"
                    placeholder=" " ></textarea><label
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
                        style="border-radius: 10px;">Descricao
                    </label>
                </div>
              <div>
                <div class="relative w-full h-10 m-2 pr-4">
                    <input v-model="Entity.senha"
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
        
                <div class="relative w-full h-10 m-2 pr-4">
                    <input v-model="confirmSenha"
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
                        style="border-radius: 10px;">Confirmar Senha
                    </label>
                </div>
              </div>
              <div v-if="Entity.senha !== confirmSenha" >
                <p>Senhas nao conferem</p>
              </div>
          </div>

          <div class="text-white row">
          <div class="text-white ">
          <p class="text-white text-left text-base ml-3">Esqueceu a senha?</p>
          </div>
          </div>


          <div class="text-white ">
            <Button class="text-white bg-white text-black rounded-[10px] w-[200px] hover:bg-white" type="submit">Cadastrar</Button>
          </div>
       <p class="text-white text-left mt-3 ml-3">Ja possui uma conta? <RouterLink to="/login" class="text-white text-white">Entrar</RouterLink></p>
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