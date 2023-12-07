const form = document.getElementById('form-agenda');
const nome = [];
const numero = [];
    
let contatos = '';

form.addEventListener('submit', function(e) { //modificando o enviar do formulario
    e.preventDefault(); //nao deixa a pagina atualizar quando clicar em submit

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputNome = document.getElementById('nome-contato'); //ativar compo para receber o dado
    const inputNumero = document.getElementById('numero-contato'); //ativar compo para receber o dado

    if (numero.includes(inputNumero.value)){ 
        alert(`O numero: ${inputNumero.value} ja existe`);
    } else {

        nome.push(inputNome.value);
        numero.push(parseFloat(inputNumero.value)); //parseFloat para a nota inserida ser entendida como numero e nao string e usamos o parseFloat tambem pois o numero pode ser quebrado

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`; //campo que vai receber o nome
        linha += `<td>${inputNumero.value}</td>`;
        linha += `</tr>`;
        contatos += linha;

    }

    inputNome.value = ''; //depois que enviar o campo fica vazio de novo
    inputNumero.value = ''; //depois que enviar o campo fica vazio de novo
}

function atualizaTabela (){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = contatos; // usamos para inserir o conteudo acima dentro da tag (innerHTML)
}