<template>
  <div class="p-10">
    <h2>Editar Livro</h2>
    <form @submit.prevent="atualizarLivro">
      <div>
        <label for="titulo">Título:</label>
        <Input type="text" v-model="livro.titulo" required />
      </div>
      <div>
        <label for="idioma">Idioma:</label>
        <Input type="text" v-model="livro.idioma" required />
      </div>
      <div>
        <label for="QuantPaginas">Quantidade de Páginas:</label>
        <Input type="text" v-model="livro.QuantPaginas" required />
      </div>
      <div>
        <label for="descricao">Descricao:</label>
        <Input type="text" v-model="livro.descricao" required />
      </div>
      <div>
        <label for="pais">Pais:</label>
        <Input type="text" v-model="livro.pais" required />
      </div>
      <div>
        <label for="status">Status:</label>
        <Input type="text" v-model="livro.status" required />
      </div>
      <div>
        <label for="PdfLivro">PDF:</label>
        <Input type="file" @change="handleFileChange('PdfLivro', $event)" />
      </div>
      <div>
        <label for="capaLivro">Capa:</label>
        <Input type="file" @change="handleFileChange('capaLivro', $event)" />
      </div>
      <button type="submit">Atualizar Livro</button>
      <button type="button" @click="deletarLivro">Deletar Livro</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';
import TokenService from '@/service/sorage.service';
import Input from '@/components/ui/input/Input.vue';
import Button from '@/components/ui/button/Button.vue';

type Livro = {
  titulo: string;
  idioma: string;
  QuantPaginas: string;
  pais: string;
  descricao: string;
  capaLivro: File | null;
  idEscritor: number;
  status: string;
  PdfLivro: File | null;
};

export default defineComponent({
  name: 'EditLivro',
  components: {
    Input,
    Button,
  },
  setup() {
    const livro = ref<Record<string, any>>({
      titulo: '',
      idioma: '',
      QuantPaginas: '',
      pais: '',
      descricao: '',
      capaLivro: null,  // Altere para null para indicar ausência inicial de arquivo
      idEscritor: 0,
      status: '',
      PdfLivro: null  // Altere para null para indicar ausência inicial de arquivo
    });

    const route = useRoute();
    const router = useRouter();
    const idLivro = route.params.idLivro || TokenService.getId();

    onMounted(() => {
      loadLivro();
    });

    const loadLivro = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/buscarLivro/${idLivro}`);
        livro.value = response.data;
        console.log(livro.value);
        
      } catch (error) {
        console.error("Erro ao carregar os dados do livro:", error);
      }
    };

    const handleFileChange = (key: 'PdfLivro' | 'capaLivro', event: Event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        livro.value[key] = file.name;  // Armazena apenas o nome do arquivo
        console.log(`${key} atribuído:`, file.name);
      }
    };

    const atualizarLivro = async () => {
      const formData = new FormData();

      if (livro.value.PdfLivro) {
        formData.append('PdfLivro', livro.value.PdfLivro);
      }
      console.log(livro.value.PdfLivro);
      console.log(livro.value.capaLivro);
      
      

      if (livro.value.capaLivro) {
        formData.append('capaLivro', livro.value.capaLivro);
      }
      console.log(livro.value.titulo);
      

      formData.append('titulo', livro.value.titulo);
      formData.append('idioma', livro.value.idioma);
      formData.append('QuantPaginas', livro.value.QuantPaginas);
      formData.append('pais', livro.value.pais);
      formData.append('descricao', livro.value.descricao);
      formData.append('status', livro.value.status);

      try {
        await axios.post(`http://localhost:5001/editarLivro/${idLivro}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        alert('Livro atualizado com sucesso!');
        router.push('/livros');
      } catch (error) {
        console.error("Erro ao atualizar o livro:", error);
      }
    };

    const deletarLivro = async () => {
      if (confirm('Tem certeza que deseja deletar este livro?')) {
        try {
          await axios.post(`http://localhost:5001/deletarLivro/${idLivro}`);
          alert('Livro deletado com sucesso!');
          router.push('/app');
        } catch (error) {
          console.error("Erro ao deletar o livro:", error);
        }
      }
    };

    return {
      livro,
      atualizarLivro,
      deletarLivro,
      handleFileChange
    };
  }
});
</script>
