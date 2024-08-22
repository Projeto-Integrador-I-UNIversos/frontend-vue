
import axios from "axios";

const ID_LIVRO = 'id_livro';

const TokenService = {

    getId() {
        return localStorage.getItem(ID_LIVRO)
    },

    saveID(acessId: string) {
        return localStorage.setItem(ID_LIVRO, acessId)
    }
}

export default TokenService;