<template>
    <div class="container-fluid">
        <form class="form">
            <h1 class="title">Seja Bem-Vindo Editora!</h1>
            <h3>Crie agora sua conta</h3>

            <div class="formInputs">

                <div class="row">
                    <div class="inputContainer col">
                        <i class="material-icons icon">mail</i>
                        <input placeholder="Nome" class="form-control"></input>
                    </div>
                    <div class="inputContainer col">
                        <i class="material-icons icon">mail</i>
                        <input placeholder="CNPJ" class="form-control"></input>
                    </div>
                </div>

                <div class="row">
                    <div class="inputContainer col">
                        <i class="material-icons icon">mail</i>
                        <input placeholder="País" class="form-control"></input>
                    </div>
                    <div class="inputContainer col">
                        <i class="material-icons icon">mail</i>
                        <input placeholder="Telefone" class="form-control"></input>
                    </div>
                </div>

                <div class="inputDescricao col">
                        <i class="material-icons icon">mail</i>
                        <input placeholder="Descrição" class="form-control"></input>
                    </div>

                <div class="row">
                    <div class="inputContainer col">
                        <i class="material-icons icon">mail</i>
                        <input placeholder="Site Institucional" class="form-control"></input>
                    </div>
                    <div class="inputContainer col">
                        <i class="material-icons icon">mail</i>
                        <input placeholder="Linkedin" class="form-control"></input>
                    </div>
                </div>

                <div class="row">
                    <div class="inputContainer col">
                        <i class="material-icons icon">mail</i>
                        <input placeholder="Twitter" class="form-control"></input>
                    </div>
                    <div class="inputContainer col">
                        <i class="material-icons icon">mail</i>
                        <input placeholder="Instagram" class="form-control"></input>
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
            cnpj
            telefone
            pais
            descricao
            site institucional
            linkedin
            twitter
            instagram
            senha
            confrimar senha
            
            -->

            <p class="haveAccount">Nao possui uma conta? <Link to="/signup" class="haveAccount">Criar Conta</Link></p>
        </form>
    </div>
</template>

<script>
import './style.css'
</script>
