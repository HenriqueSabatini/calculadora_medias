const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />'; //imagem para retorno feliz ou trite (Aprovado ou reprovado 
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji triste" />'; //imagem para retorno feliz ou trite (Aprovado ou reprovado 
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota minima: ")) //pergunta ao usuario a nota minima para ser aprovado


    
let linhas = ''; //somar notas e fazer a media

form.addEventListener('submit', function(e) { //modificando o enviar do formulario
    e.preventDefault(); //nao deixa a pagina atualizar quando clicar em submit

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade'); //ativar compo para receber o dado
    const inputNotaAtividade = document.getElementById('nota-atividade'); //ativar compo para receber o dado

    if (atividades.includes(inputNomeAtividade.value)){ //aqui criamos um if para o usuaruio nao colocar nome de atividade duplicado
        alert(`A atividade: ${inputNomeAtividade.value} ja foi inserida`);
    } else {

        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value)); //parseFloat para a nota inserida ser entendida como numero e nao string e usamos o parseFloat tambem pois o numero pode ser quebrado

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`; //campo que vai receber o nome
        linha += `<td>${inputNotaAtividade.value}</td>`; //campo que vai receber a nota
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`; //if e else para dizer se o aluno reprovou ou nao (alternaria (? If) e (: else))
        linha += `</tr>`;

        linhas += linha; //somar notas e fazer a media

    }

    inputNomeAtividade.value = ''; //depois que enviar o campo fica vazio de novo
    inputNotaAtividade.value = ''; //depois que enviar o campo fica vazio de novo
}

function atualizaTabela (){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas; // usamos para inserir o conteudo acima dentro da tag (innerHTML)
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();  
    
    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for(let i = 0; i< notas.length; i++) { //aqui fizemos um laço para que enquanto o usuario colocar nota (notas.length) ele vai se somando
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}