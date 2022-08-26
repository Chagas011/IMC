

function criaElemento(elemento, nomeClass) {
    const p = document.createElement(elemento);
    p.classList.add(nomeClass);
    return p;
}


function setResultado (elemento, msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    elemento.innerHTML = msg;
    resultado.appendChild(elemento);
    return resultado;
}


function calculaImc(peso, altura) {

    const imc = peso / altura ** 2;
    
    return imc.toFixed(2);
}

function tabelaImc(imc){ 

    const tabela = [
        'Abaixo do peso', 'Peso normal',
        'Sobrepeso', 'Obesidade grau 1',
        'Obesidade grau 2', 'Obesidade grau 3',
    ];

    if (imc >= 39.9) return tabela[5];
    if (imc >= 34.9) return tabela[4];
    if (imc >= 29.9) return tabela[3];
    if (imc >= 24.9) return tabela[2];
    if (imc >= 18.5) return tabela[1];
    if (imc < 18.5) return tabela[0];
    
}
 
// capturar evento de submit do formulario 
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');


    const valorPeso = Number(inputPeso.value);
    const valorAltura = Number(inputAltura.value);
    

    if (!valorPeso) {
        const p = criaElemento('p', 'resultado2');
        setResultado(p, 'Peso invalido');
        return;
    }

    if (!valorAltura) {
        const p = criaElemento('p', 'resultado2');
        setResultado(p, 'Altura invalida');
        return;
    }

    const imc = calculaImc(valorPeso, valorAltura);
    const p = criaElemento('p', 'resultado1');
    const tabela = tabelaImc(imc);
    const msg = `Seu IMC é ${imc} (${tabela})`;
        setResultado(p, msg);
        return;
});

