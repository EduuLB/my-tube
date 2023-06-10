import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";
const botaoPesquisa = document.querySelector("[data-botao-pesquisa]")
const lista = document.querySelector("[data-lista]")

async function encontrarVideo(evento) {
    evento.preventDefault();
    lista.innerHTML = ``;
    const pesquisa = document.querySelector("[data-pesquisa]").value;
    const busca =  await conectaApi.buscarVideos(pesquisa)
    if(busca.length == 0){
        lista.innerHTML = `
        <div>
            <h3 class="mensagem__titulo">Nenhum vídeo foi encontrado</h3>
            <img class="mensagem__erro" src="../img/erro.png" >
        </div>
        `
    }
    busca.forEach(elemento =>
        lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem))
    );

}

botaoPesquisa.addEventListener("click", evento => encontrarVideo(evento))