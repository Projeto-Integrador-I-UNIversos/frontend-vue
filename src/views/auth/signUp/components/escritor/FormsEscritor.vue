<script lang="ts">
import './style.css'
import axios from 'axios';
import { defineComponent } from 'vue';
import Input from '../../../../../components/ui/input/Input.vue';
import Label from '../../../../../components/ui/label/Label.vue';

export default defineComponent({
    name: 'CadastrarEscritor',
    components: {
        Input,
        Label
    },
    data() {
        return {
            nome : '',
            dataNasc : '',
            telefone : '',
            cpf : '',
            nacionalidade : '',
            idUsuario: '',
        }
    },
    mounted(){
    },
    methods: {
        loadUser(){
            console.log('CLICK');
            const URL = 'http://localhost:5000';

            axios.post(`${URL}/escritor/cadastro`, {
                nome : this.nome,
                dataNasc : this.dataNasc,
                telefone : this.telefone,
                cpf : this.cpf,
                nacionalidade : this.nacionalidade,
                idUsuario: this.idUsuario,
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Erro:', error);
            });
        }
    }
})


</script>

<template>
    <div class="container-fluid">
        <form class="form">
            <h1 class="title">Seja Bem-Vindo Escritor!</h1>
            <h3>Crie agora sua conta</h3>

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

            <!--
            nome
            idade
            telefone
            cpf
            nacionalidade
            sexo
            linkedin
            instagram
            twitter
            
            -->

            <p class="haveAccount">Nao possui uma conta? <Link to="/signup" class="haveAccount">Criar Conta</Link></p>
        </form>
    </div>
</template>

