// Crie const form e capture o id do formulário
const form = document.querySelector('#form');
/* Capture o evento do submit para evitar o envio do form 
adicione o addEventListener ao form e passe 'submit' como alvo
adicione tb função anonima function(e)
previna o default do e dentro da 
*/
form.addEventListener('submit', function(e) {
    e.preventDefault()
    //Crie uma variavel inputPeso, utilize target no evento com querySelector para capturar o id vindo do HTML
    const inputPeso = e.target.querySelector('#peso');
    //Faça o mesmo com altura(inputAltura)
    const inputAltura = e.target.querySelector('#altura')
    /*Agora salve os valores que serão recebidos do input 
    Salve peso e altura em variáveis e associe Number() ao valor recebido do Input
    */
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
/* 
    Crie um if statement, se o resultado for *diferente* de peso e altura
    chame a função setResultado e passe os argumentos necessários
    a mensagem e se é válido ou não
    nao se esqueça do return
    */
    if (!peso) {
    setResultado('Peso inválido', false)
    return;
    }

    if (!altura) {
    setResultado('Altura inválida', false);
    return;
    }
    // crie uma variável imc, associe a função getIMC e passe os argumentos
    const imc = getImc(peso, altura);
     // crie const Nivelmc, associe a getNivel imc e passe o parâmetro
    const nivelImc = getNivelImc(imc);
    //logue ao console
    console.log(imc, nivelImc);
    //crie uma const msg, associe o valor do seu imc e o nivelImc
    const msg = `Seu IMC é ${imc} (${nivelImc})`;
    //chame setResultado e passe o parâmetro msg da const criada acima e o valor true(matching IsValid)
    setResultado(msg, true);
});
    
    // Crie função getNivelImc parâmetro imc, crie array nível com os dados da tabela
function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 
    'Obesidade grau 2', 'Obsesidade grau 3'];
    
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
};


    // Crie if statements para retornar as informações comparadas com o imc (lembre do short circuits)
// Função pra calcular IMC (peso / altura ** 2)
function getImc (peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2);
};

/* Função criaP, crie variavel p associe ao elemento document com o método createElement('p')
adicione uma classList ao p ('paragrafo-resultado)
deixe uma string vazia no p.innerHTML
retorne p
*/
function criaP () {
    const p = document.createElement('p');
    //p.classList.add('paragrafo-resultado');
    p.innerHTML = '';
    return p;
};

// Função setResultado com msg e isValid dev paramenter para criar um html vazio na page
function setResultado (msg, isValid) {
    // Crie uma variável chamada resultado e puxe o id do html com document.querySelector
    const resultado = document.querySelector('#resultado');
    // Associe uma string vazia a resultado utilizando innerHTML   
    resultado.innerHTML = '';
    // crie uma variavel p e associe a function criaP
    const p = criaP();
    // associe p ao parâmetro msg utilizando o elemento innerHTML;
    p.innerHTML = msg;
    // faça com que resultado exiba a const p utilizando appendChild
    resultado.appendChild(p);
    /*
        crie um if statement com o parametro isValid
        use o elemento classList com método add para adicionar uma classe com base nas condições do if
        se for isValid adcione 'paragrafo-resultado
        caso contrário adcione false-pr
    */ 
   if (isValid) {
        return p.classList.add('paragrafo-resultado');
   } else {
    return p.classList.add('false-pr');
   }

};

    