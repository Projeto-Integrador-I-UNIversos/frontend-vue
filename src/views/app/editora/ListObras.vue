<script lang="ts">
import { defineComponent } from 'vue';
import {Checkbox} from '@/components/ui/checkbox';
import LivroItem from '@/components/LivroItem.vue';

export default defineComponent({
    name: 'ListObras',
    components: {
        Checkbox,
        LivroItem
    },
    data() {
        return {
            generos: [
                {name: 'Ficção'},
                {name: 'Não-ficção'},
                {name: 'Ficção Científica'},
                {name: 'Fantasia'},
                {name: 'Mistério'},
                {name: 'Suspense'},
                {name: 'Romance'},
                {name: 'Ficção Histórica'},
                {name: 'Biografia'},
                {name: 'Autoajuda'},
                {name: 'Terror'},
                {name: 'Aventura'},
                {name: 'Poesia'},
                {name: 'Drama'},
                {name: 'Memórias'},
                {name: 'Filosofia'},
                {name: 'Psicologia'},
                {name: 'Crime'},
                {name: 'Quadrinhos'},
                {name: 'Juvenil'}
            ],
            livros: [
                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },
                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },
                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },
                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },
                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },
                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },
                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },
                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },
                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },
                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },
                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },

                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },
                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },
                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },
                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },
                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },
                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },
                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },
                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },
                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },
                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },
                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },
                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },
                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },
                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },

                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },
                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },
                {
                    titulo: "O pequeno Principe",
                    escritor: "Antoine de Saint-Exupery",
                    capa: "../../../../public/assets/capas/O-PEQUENO-PRINCIPE-capa-scaled.jpg",
                    id: 1 as number
                },
            ],
        }
    }
})

</script>

<template>
    <div class="h-[74vh] w-full flex pt-10 ">
        <div class="grid grid-cols-6 flex w-full gap-4" >
            <div class="border-[black] flex px-5 rounded-[20px] py-10" style="border: 1px solid #cbd5e1;">
                <div class=""  >
                    <div class="flex" >
                        <p class="inter-bold" >Generos:</p>
                    </div>
                        <div v-for="(value, index) in generos" :key="index" >
                            <div class="flex my-2">
                                <Checkbox v-model="value[index]" class="mr-2" color="black"/>
                                <p>{{ value.name }}</p>
                            </div>
                        </div>
                </div>
            </div>
            <div class="col-span-5" >
                <div class="border-[black] flex p-10 justify-center rounded-[20px] h-full" style="border: 1px solid #cbd5e1;">
                    <div
                    class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-2">
                        <LivroItem 
                            class="w-44 h-60 mb-10"
                            v-for="livro in livros"
                            :titulo="livro.titulo"
                            :escritor="livro.escritor"
                            :capaLivro="livro.capa"
                            :idLivro="livro.id"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>