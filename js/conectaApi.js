
async function listarVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criaVideos(titulo, canal, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            canal: canal,
            url: url,
            imagem: imagem ,
        })
    });
    if (!conexao.ok){
        throw new Error("Não Foi Possível enviar o vídeo")
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function buscarVideos(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida
}

export const conectaApi = {
    listarVideos,
    criaVideos,
    buscarVideos
}