<template>
    <div>
      <h1>Visualização de PDF</h1>
    </div>
  </template>
  
  <script>
import { defineComponent } from 'vue';
  
  export default defineComponent({
    components: {
      
    },
    props: {
      pdfUrl: {
        type: String,
        required: true
      }
    },
  })
  </script>
  