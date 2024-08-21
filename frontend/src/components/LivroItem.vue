<template>
  <div class="livro-item border p-4 m-4 shadow-lg rounded-lg">
    <img :src="caminhoCompletoCapa" alt="Capa do Livro" class="w-32 h-48 object-cover mb-4"/>
    <h2 class="text-xl font-bold">{{ titulo }}</h2>
    <p><strong>Idioma:</strong> {{ idioma }}</p>
    <p><strong>Páginas:</strong> {{ QuantPaginas }}</p>
    <p><strong>País:</strong> {{ pais }}</p>
    <p><strong>Descrição:</strong> {{ descricao }}</p>
    <p><strong>ID Escritor:</strong> {{ idEscritor }}</p>
    <p><strong>Status:</strong> {{ status }}</p>
    <button @click="downloadPDF">Baixar PDF</button>
    
    <div>
      <Button class="bg-sky-500 text-white m-1" @click="$router.push(`/app/livros/${idLivro}/editar`)">Editar</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from './ui/button/Button.vue';

export default defineComponent({
  name: 'LivroItem',
  props: {
    titulo: { type: String, required: true },
    idioma: { type: String, required: true },
    QuantPaginas: { type: Number, required: true },
    pais: { type: String, required: true },
    descricao: { type: String, required: true },
    capaLivro: { type: String, required: true },
    idEscritor: { type: Number, required: true },
    status: { type: String, required: true },
    PdfLivro: { type: String, required: true },
    idLivro: { type: String, required: true }
  },
  computed: {
    caminhoCompletoCapa(): string {
      return `/caminho/para/salvar/${this.capaLivro}`;
    }
  },
  methods: {
    downloadPDF() {
      // Construir a URL completa para o PDF
      const downloadUrl = `http://localhost:5173/home/lara/Documentos/arquivoTeste/${this.PdfLivro}`;
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = this.PdfLivro; // Nome do arquivo que será baixado
      link.click();
    },
  }
})
</script>
