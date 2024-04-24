function mostrarOpcoes() {
    var opcoes = document.getElementById("opcoes");
    if (opcoes.style.display === "none") {
        opcoes.style.display = "block";
    } else {
        opcoes.style.display = "none";
    }
}

function selecionarOpcao(opcao) {
    document.getElementById("campo-pesquisa").value = opcao;
    document.getElementById("opcoes").style.display = "none";
}

function redirecionarPesquisa() {
    var termoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();
    
    if (termoPesquisa === "") {
        alert("Por favor, insira um termo de pesquisa.");
        return;
    }

    var url;

    switch (termoPesquisa) {
        case "clash royale":
            url = "clash-royale.html";
            break;
        case "brawl stars":
            url = "brawl-stars.html";
            break;
        case "clash of clans":
            url = "clash-of-clans.html";
            break;
        case "squad busters":
            url = "squad-busters.html";
            break;
        default:
            url = "https://exemplo.com/pagina-de-erro";
            break;
    }

    window.location.href = url;
}
