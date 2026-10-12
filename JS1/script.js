let filmes = [
    {
        titulo: "Devoradores de Estrelas", ano: 2026, genero: "Ficção Científica", nota: 8.2, poster: "assets/estrela.jpg"
    },

    {
        titulo: "Oppenheimer", ano: 2023, genero: "Biografia", nota: 8.2, poster: "assets/oppen.jpg"
    },

    {
        titulo: "A Odisseia", ano: 2026, genero: "Ação", nota: 8.4, poster: "assets/odisseia.jpg"
    },

    {
        titulo: "Nimona", ano: 2023, genero: "Aventura", nota: 7.5, poster: "assets/nimona.jpg"
    },

    {
        titulo: "Telefone Preto", ano: 2021, genero: "Suspense", nota: 6.9, poster: "assets/telefone.jpg"
    },

    {
        titulo: "Viúva Negra", ano: 2021, genero: "Super-Herói", nota: 6.6, poster: "assets/nat.jpg"
    },

    {
        titulo: "De Volta para o Futuro", ano: 1985, genero: "Viagem no Tempo", nota: 8.5, poster: "assets/futuro.jpg"
    },

    {
        titulo: "Até que a Sorte nos Separe", ano: 2012, genero: "Comédia", nota: 5.9, poster: "assets/sorte.jpg"
    },
];

function mostrarfilmes(lista) {
    let catalogo = document.getElementById("listafilmes");
    let contador = document.getElementById("contador");

    catalogo.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {
        let filme = lista[i];

        let recomendado = "";
        if (filme.nota >= 8) {
            recomendado = "⭐ Recomendado";
        }
        else {
            recomendado = "";
        }

        catalogo.innerHTML +=
            "<div class='poster'>" +
            "<img src='" + filme.poster + "' alt='Poster de " + filme.titulo + "'>" +
            "<h3>" + filme.titulo + "</h3>" +
            "<p class='generos'>" + filme.ano + " | " + filme.genero + "</p>" +
            "<p>Nota: " + filme.nota + "</p>" +
            "<p>" + recomendado + "</p>" +
            "</div>";
    }

    contador.innerText = lista.length;

    if (lista.length === 0) {
        catalogo.innerHTML = "<p>Nenhum filme encontrado</p>";
    }
}

let filtroGenero = document.getElementById("filtrogenero");

filtroGenero.addEventListener("change", function () {
    let generoEscolhido = filtroGenero.value;
    let filmesFiltrados = [];

    if (generoEscolhido === "Todos") {
        filmesFiltrados = filmes;
    } else {
        for (let i = 0; i < filmes.length; i++) {
            if (filmes[i].genero === generoEscolhido) {
                filmesFiltrados.push(filmes[i]);
            }
        }
    }

    mostrarfilmes(filmesFiltrados);
});
mostrarfilmes(filmes);
