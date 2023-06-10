import { conectaApi } from "./conectaApi.js";
const lista = document.querySelector("[data-lista]")

export default function constroiCard(titulo, canal, url, imagem){
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = 
        `<iframe width="100%" height="72%" src="${url}"
        title="${titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${imagem}" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${canal}</p>
        </div>`
        return video;
}

async function listaVideos() {
    try {
        const listaApi = await conectaApi.listarVideos();
        listaApi.forEach(elemento => {
            lista.appendChild(constroiCard(elemento.titulo, elemento.canal, elemento.url, elemento.imagem))
        });
    } catch {
        lista.innerHTML = 
        `
            <div>
                <h3 class="mensagem__titulo">Não foi Possivel carregar a lista de Videos</h3>
                <img class="mensagem__erro" src="../img/erro.png" >
            </div>
        `
    }
}

listaVideos();
