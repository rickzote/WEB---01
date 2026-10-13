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
        titulo: "Telefone Preto", ano: 2021, genero: "Suspense", nota: 6.9, poster: "assets/telefonepreto.jpg"
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
let favoritos = [];
let filmesexibidos = [];

function mostrarfilmes(lista) {
    let catalogo = document.getElementById("listafilmes");
    let contador = document.getElementById("contador");
    filmesexibidos = lista;

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
            "<button onclick='favoritar(" + i + ")'>♥ Favoritar</button>" +
            "</div>";
    }

    contador.innerText = lista.length;

    if (lista.length === 0) {
        catalogo.innerHTML = "<p>Nenhum filme encontrado</p>";
    }
}

let filtrogenero = document.getElementById("filtrogenero");

filtrogenero.addEventListener("change", function () {
    let generoescolhido = filtrogenero.value;
    let filmesfiltrados = [];

    if (generoescolhido === "Todos") {
        filmesfiltrados = filmes;
    } else {
        for (let i = 0; i < filmes.length; i++) {
            if (filmes[i].genero === generoescolhido) {
                filmesfiltrados.push(filmes[i]);
            }
        }
    }

    mostrarfilmes(filmesfiltrados);
});

let botaoinverter = document.getElementById("btninverter");

botaoinverter.addEventListener("click", function () {
    filmes.reverse();
    mostrarfilmes(filmes);
});

function favoritar(indice) {
    let titulo = filmesexibidos[indice].titulo;

    if (favoritos.includes(titulo)) {
        return;
    } else {
        favoritos.push(titulo);
    }

    atualizarFavoritos();
}

function atualizarFavoritos() {
    let contadorfavoritos = document.getElementById("contadorfavoritos");
    let listafavoritos = document.getElementById("listafavoritos");

    contadorfavoritos.innerText = favoritos.length;
    listafavoritos.innerHTML = "";

    for (let i = 0; i < favoritos.length; i++) {
        listafavoritos.innerHTML += "<li>" + favoritos[i] + "</li>";
    }
}

let botaolimpar = document.getElementById("btn-limparfavoritos");

botaolimpar.addEventListener("click", function () {
    favoritos = [];
    atualizarFavoritos();
});

let titulocatalogo = document.querySelector(".titulocatalogo");

titulocatalogo.addEventListener("mouseenter", function () {
    titulocatalogo.style.color = "orange";
});

titulocatalogo.addEventListener("mouseout", function () {
    titulocatalogo.style.color = "";
});

mostrarfilmes(filmes);