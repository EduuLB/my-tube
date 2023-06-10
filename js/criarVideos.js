import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function criaVideos(event) {
    event.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const canal = document.querySelector("[data-canal]").value;

    try{
        await conectaApi.criaVideos(titulo, canal, url, imagem);
        window.location.href = "../pages/envio-concluido.html"
    } catch(e) {
        alert(e);
    }

}

formulario.addEventListener("submit", event => criaVideos(event));

