<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'HomeView',
    data() {
    return {
      features: [
        { icon: 'icon-writer.png', title: 'Crie seu perfil de escritor', description: 'Cadastre-se gratuitamente, crie seu perfil e compartilhe sua paixão pela escrita com o mundo.' },
        { icon: 'icon-book.png', title: 'Envie suas obras', description: 'Faça upload dos seus livros e alcance editoras em busca de novos talentos.' },
        { icon: 'icon-editor.png', title: 'Conecte-se com editoras', description: 'Receba propostas de publicação e encontre a parceria ideal para o seu livro.' }
      ],
      testimonials: [
        { quote: 'A plataforma Universos Literários me ajudou a realizar meu sonho de publicar meu primeiro livro. Recomendo a todos os escritores!', author: 'João Silva, autor de "Aventuras Fantásticas"' },
        { quote: 'Encontrar novos talentos nunca foi tão fácil! A plataforma Universos Literários é uma ferramenta essencial para editoras que buscam por novas vozes.', author: 'Editora Luz, especializada em literatura infantojuvenil' }
      ]
    };
  }
})

</script>

<template>
    <!--div class="home">
    <header class="hero">
      <div class="container">
        <h1 class="hero__title">Universos Literários</h1>
        <p class="hero__subtitle">Conectando escritores e editoras para a publicação de novos livros.</p>
      </div>
    </header>
    
    <section class="features">
      <div class="container">
        <h2 class="section__title">Como funciona?</h2>
        <div class="features__grid">
          <div class="feature" v-for="(feature, index) in features" :key="index">
            <img :src="feature.icon" alt="Ícone">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <div class="container">
        <h2 class="section__title">O que estão dizendo</h2>
        <div class="testimonials__slider">
          <div class="testimonial" v-for="(testimonial, index) in testimonials" :key="index">
            <p>"{{ testimonial.quote }}"</p>
            <p class="testimonial__author">- {{ testimonial.author }}</p>
          </div>
        </div>
      </div>
    </section>
  </div-->
  <div class="h-[100vh] ">

  </div>
</template>

<style scoped>
/* Estilos da Home */
.home {
  background-color: #F7F7F7;
}
.hero {
  background-color: #007bff;
  color: white;
  padding: 2rem 0;
  text-align: center;
}
.features {
  background-color: #FFFFFF;
  padding: 2rem 0;
}
.features__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 0 1rem;
}
.feature {
  background-color: #F7F7F7;
  padding: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.section__title {
  text-align: center;
  margin-bottom: 1rem;
}
.testimonials {
  background-color: #FFFFFF;
  padding: 2rem 0;
}
.testimonial {
  background-color: #F7F7F7;
  padding: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  width: 30%;
  text-align: center;
}
.testimonial__author {
  font-weight: bold;
}
@media (max-width: 768px) {
  .features__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .testimonial {
    width: 45%;
  }
}
@media (max-width: 480px) {
  .features__grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .testimonial {
    width: 90%;
  }
}
</style>
