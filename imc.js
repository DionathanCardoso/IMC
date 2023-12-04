const calcular = document.getElementById("calcular");
calcular.addEventListener('click', IMC);

function IMC() {
    let pessoa = {
        nome: document.getElementById("nome").value,
        peso: document.getElementById("peso").value,
        altura: document.getElementById("altura").value,
        result: document.getElementById("result")
    }
    if (pessoa.nome === "" || pessoa.peso === "" || pessoa.altura === "") {
        alert("Por favor preenche os campos abaixo!")
    } else {
        let { nome, peso, altura } = pessoa;
        let resultado = (peso / (altura * altura)).toFixed(2);
        let valor;
        console.log(resultado)
        if (resultado >= 43) {
            valor = 1;
        } else if (resultado >= 30 && resultado <= 39.9) {
            valor = 2;
        } else if (resultado >= 25 && resultado < 30) {
            valor = 3;
        } else if (resultado >= 20 && resultado < 25) {
            valor = 4;
        } else if (resultado < 20) {
            valor = 5;
        }
        switch (valor) {
            case 1:
                pessoa.result.innerHTML = `${nome} o seu resultado é ${resultado} e você esta com obesidade mórbita.`;
                break;
            case 2:
                pessoa.result.innerHTML = `${nome} o seu resultado é ${resultado} e você esta com obesidade moderada.`;
                break;
            case 3:
                pessoa.result.innerHTML = `${nome} o seu resultado é ${resultado} e você esta com obesidade leve.`;
                break;
            case 4:
                pessoa.result.innerHTML = `${nome} o seu resultado é ${resultado} e você esta normal.`;
                break;
            case 5:
                pessoa.result.innerHTML = `${nome} o seu resultado é ${resultado} e você esta abaixo do normal.`;
                break;
            case 6:
                pessoa.result.innerHTML = `${nome} o seu resultado é ${resultado} e você esta com obesidade moderada.`;
                break;
            default:
                pessoa.result.innerHTML = `${nome}, algo deu errado verifica o campo que voçê digitou!`;
        }
    }
}
