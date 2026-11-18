const inputElement = document.getElementById('infoInput');
const resultadoElement = document.getElementById('resultado');
const CHAVE_SESSAO = 'minhaInformacaoSecreta';

function salvarInfo() {
    const valor = inputElement.value;
    if (valor.trim() === "") {
        resultadoElement.textContent = "Por favor, digite algo para salvar.";
        return;
    }
    
    sessionStorage.setItem(CHAVE_SESSAO, valor);
    
    resultadoElement.textContent = "Informação salva com sucesso!";
    inputElement.value = ''; 
}


function carregarInfo() {
    const informacaoSalva = sessionStorage.getItem(CHAVE_SESSAO);
    
    if (informacaoSalva !== null) {
        resultadoElement.textContent = "Recuperado: " + informacaoSalva;
    } else {
        resultadoElement.textContent = "Nenhuma informação na sessão.";
    }
}


function limparInfo() {
    sessionStorage.removeItem(CHAVE_SESSAO);
    resultadoElement.textContent = "Informação apagada da sessão.";
}