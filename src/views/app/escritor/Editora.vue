<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import Button from '@/components/ui/button/Button.vue';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import pequeno_principe from '@/assets/imagens/o-pequeno-principe.png'
import { MapPin, Phone, Instagram, Twitter, Linkedin } from 'lucide-vue-next';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import axios from 'axios';
import { useRoute } from 'vue-router';
import router from '@/router';

interface Data {
    id: '',
    nome: '',
    descricao: '',
    cnpj: '',
    telefone: '',
    pais: '',
    linkedin: '',
    twitter: '',
    instagram: '',
    siteInstitucional:''
}

const data = ref<Data[]>([]);


export default defineComponent({
    name: 'Editora',
    components: {
        MapPin,
        Phone,
        Button,
        Tabs,
        TabsContent,
        TabsList,
        TabsTrigger,
        Instagram,
        Twitter,
        Linkedin,
        Dialog,
        DialogContent,
        DialogDescription,
        DialogFooter,
        DialogHeader,
        DialogTitle,
        DialogTrigger,
    },
    data() {
        return {
         data,
            
        }
    },
  methods: {
    
},
setup() {
    const route = useRoute();
    const id = ref(route.params.id);  // Captura o id da rota

    // Caso o id da rota mude, atualiza o valor de id
    watch(() => route.params.id, (newId) => {
      id.value = newId;
    })
    
    const Entity = ref({
        id: '',
        nome: '',
        descricao: '',
        cnpj: '',
        telefone: '',
        pais: '',
        linkedin: '',
        twitter: '',
        instagram: '',
        siteInstitucional:''
    })
    
    async function loadItems() {

        try {
            const URL = 'http://localhost:5001';
            const response = await axios.get(`${URL}/editoras/${id.value}`)
            
            Entity.value.id = response.data.idLivro;
            Entity.value.nome = response.data.nome;
            Entity.value.cnpj = response.data.cnpj;
            Entity.value.descricao = response.data.descricao;
            Entity.value.telefone = response.data.telefone;
            Entity.value.pais = response.data.pais;
            Entity.value.linkedin = response.data.linkedin;
            Entity.value.instagram = response.data.instagram;
            Entity.value.siteInstitucional = response.data.siteInstitucional;
            Entity.value.twitter = response.data.twitter;



        } catch (error) {
        console.error("Erro ao carregar os itens:", error);
        }
    }

    loadItems()

    return {
        Entity,
        loadItems,
        id
    }
},
async mounted() {
        
        this.loadItems()
  },
})
</script>


<template>
    <div class="flex flex-col pt-14 px-10 pb-32 flex justify-start bg-[#f9f9f9] h-full  text-[#6208b8]">
        <div class="banner h-[40vh] p-20 h-[30%] p-10 rounded-[20px]">
           <div class="bg-[#f1e6fd] rounded-[30px] flex flex-row py-20 pr-10 pl-32 mt-[4%]" >
                <div class="h-[30vh] ml-[10vh] w-[70%] text-left">
                    <p class="inter-bold text-4xl mb-3" >{{ Entity.nome }}</p>
                    <div class="flex items-center mb-3 mt-10">
                        <MapPin/>
                        <p class="ml-2">{{ Entity.pais }}</p>
                    </div>
                    <p class="mb-3">CNPJ: {{ Entity.cnpj }}</p>
                    <div class="mb-3 flex">
                        <Phone/>           
                        <p class="ml-2"> {{ Entity.telefone }}</p>
                    </div>
                    <div class="flex justify-end">
                        <Dialog  >
                            <DialogTrigger class="bg-[#6208b8] text-white rounded-[10px] w-[40%] hover:bg-[#510699]" >
                                Sugerir Obra
                            </DialogTrigger>
                            <DialogContent class="bg-white" >
                                <DialogHeader>
                                    <DialogTitle>Minhas Obras</DialogTitle>
                                </DialogHeader>
                                <div>
                                    <!--div v-for="(livro, index) in livros" :key="index" >
                                        <div class="flex items-center border-[1px] p-2 m-2 rounded-[10px] cursor-pointer">
                                            <div>
                                                <img :src="livro.capa" class="w-20 h-20 rounded-[10px]" style="object-fit: cover;"/>
                                            </div>
                                            <div>{{ livro.titulo }}</div>
                                        </div>
                                    </div-->
                                </div>
                                <DialogFooter>
                                    <DialogFooter>
                                        <Button type="submit">
                                        Escolher Livro
                                        </Button>
                                    </DialogFooter>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                    
                </div>
           </div>
           <div class="flex p-10">
                <div class="w-[30%] flex justify-center items-center">
                    <p class="inter-bold text-3xl">Sobre Nos</p>
                </div>
                <div class="text-left w-[60%] h-" >
                    <Tabs default-value="sobre" class="w-full">
                        <TabsList class="grid w-full grid-cols-2">
                        <TabsTrigger value="sobre">
                            Sobre
                        </TabsTrigger>
                        <TabsTrigger value="redes">
                            Nos siga
                        </TabsTrigger>
                        </TabsList>
                        <TabsContent value="sobre" class=" flex items-center justify-center" >
                            <div class="h-[22vh] flex items-center" >
                                <p>{{ Entity.descricao }}</p>
                            </div>
                           
                        </TabsContent>
                        <TabsContent value="redes" class="">
                            <div class="h-[22vh] flex  flex-col justify-center">
                                <div class="flex m-1" >
                                    <p>{{ Entity.siteInstitucional }}</p>
                                </div>
                                <div class="flex m-1" >
                                    <Linkedin class="mr-3" />
                                    <p>{{ Entity.linkedin }}</p>
                                </div>
                                <div class="flex m-1" >
                                    <Twitter class="mr-3" />
                                    <p>{{ Entity.twitter }}</p>
                                </div>
                                <div class="flex m-1" >
                                    <Instagram class="mr-3" />
                                    <p>{{ Entity.instagram }}</p>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
           </div>
          
        </div>
    </div>
</template>

<style>
.form {
    width: 100vh;
}

.input {
    border-radius: 6px;
}

.button {
    border-radius: 10px;
}

.banner {
    background-image: url("@/assets/imagens/universe_6.jpg");
}

.input-group input {
  background: transparent;
}

.input-group label {
  position: relative;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 16px;
  color: #fff;
  padding: 0 5px;
  pointer-events: none;
}

.input-group input:focus~label {
background: #000;
font-size: 12px;
}

</style>
