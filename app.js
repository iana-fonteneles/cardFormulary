// Definição das variáveis obtidas pelo ID no HTML.
const cardNumber = document.getElementById("number");
const numberInp = document.getElementById("card_number");
const nameInp = document.getElementById("card_name");
const cardName = document.getElementById("name");
const cardMonth = document.getElementById("month");
const cardYear = document.getElementById("year");
const monthInp = document.getElementById("card_month");
const yearInp = document.getElementById("card_year");
const cardCvc = document.getElementById("cvc");
const cvcInp = document.getElementById("card_cvc");
const submitBtn = document.getElementById("submit_btn");
const compeleted = document.querySelector(".thank");
const form = document.querySelector("form");

// Funções chamadas quando o usuário digita nos campos de entrada (evento), pegam o valor inserido,
// formatam e atualizam o elemento visual na imagem do cartão de crédito.

function setCardNumber(e) {
    cardNumber.innerText = format(e.target.value);
}
function setCardName(e) {
  cardName.innerText = format(e.target.value);
}
function setCardMonth(e) {
  cardMonth.innerText = format(e.target.value);
}
function setCardYear(e) {
  cardYear.innerText = format(e.target.value);
}
function setCardCvc(e) {
  cardCvc.innerText = format(e.target.value);
}

// Função que lida com a validação das informações submetidas pelo usuário

function handleSubmit(e) {
    // Previne que o formulário seja enviado automaticamente para passar pelas validações antes
    e.preventDefault();
    // Condicionais que verificam se cada campo está vazio e adicionam uma mensagem de erro caso esteja
    // Caso esteja preenchido, a classe de erro é removida
    if (!nameInp.value) {
      nameInp.classList.add('error');
      nameInp.parentElement.classList.add("error_message")
    } else {
      nameInp.classList.remove("error");
      nameInp.parentElement.classList.remove("error_message");
    }
    if (!numberInp.value) {
      numberInp.classList.add('error')
      numberInp.parentElement.classList.add("error_message");
    } else if (numberInp.value.length < 16) {
        numberInp.classList.add("error")
    } else {
      numberInp.classList.remove("error");
      numberInp.parentElement.classList.remove("error_message");
    }
    if (!monthInp.value) {
      monthInp.classList.add("error")
      monthInp.parentElement.classList.add("error_message");
    } else {
      monthInp.classList.remove("error");
      monthInp.parentElement.classList.remove("error_message");
    }
    if (!yearInp.value) {
      yearInp.classList.add("error")
      yearInp.parentElement.classList.add("error_message");
    } else {
      yearInp.classList.remove("error");
      yearInp.parentElement.classList.remove("error_message");
    }
    if (!cvcInp.value) {
      cvcInp.classList.add("error")
      cvcInp.parentElement.classList.add("error_message");
    } else {
      cvcInp.classList.remove("error");
      cvcInp.parentElement.classList.remove("error_message");
    }
    // Verifica se todos os campos obrigatórios foram preenchidos e se o campo de número contém 16 dígitos.
    if (
      nameInp.value &&
      numberInp.value &&
      monthInp.value &&
      yearInp.value &&
      cvcInp.value &&
      numberInp.value.length == 16
    ) 
    // Exibe a mensagem de conclusão e esconde o formulário
    {
      compeleted.classList.remove("hidden");
      form.classList.add("hidden");
    }
  
}
// Função que adiciona um espaço a cada grupo de caracteres na string de números do cartão de crédito.
function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}
// Chama as funções quando uma tecla é liberada após ser pressionada no campo de entrada, pelo evento 'keyup'
numberInp.addEventListener("keyup", setCardNumber);
nameInp.addEventListener("keyup", setCardName);
monthInp.addEventListener("keyup", setCardMonth);
yearInp.addEventListener("keyup", setCardYear);
cvcInp.addEventListener("keyup", setCardCvc);
// Chama a função que lida com a submição do formulário quando o botão de submissão é clicado.
submitBtn.addEventListener("click", handleSubmit);