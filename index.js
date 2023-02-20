const form = document.getElementById("form");
const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const email = document.getElementById("email");
const email2 = document.getElementById("confirm");
const password = document.getElementById("pass");
const check = document.getElementById("check");
const termos = document.getElementById("termos");
const valid0 = document.getElementById("valid0");
const valid1 = document.getElementById("valid1");
const valid2 = document.getElementById("valid2");
const valid3 = document.getElementById("valid3");
const valid4 = document.getElementById("valid4");
const button = document.getElementById("show");
const regexEmail = /^.*@.*\.com$/;
const regex = /\W/;
let auxVar = false;

const toggleToValid = (item) => {
  item.classList.remove("invalid");
  item.classList.add("valid");
};

const toggleToInvalid = (item) => {
  item.classList.remove("valid");
  item.classList.add("invalid");
};

const showPass = () => {
  if (password.type == "password") {
    password.type = "text";
    button.style["background-color"] = "rgb(3, 58, 121)";
    button.style["color"] = "white";
  } else {
    password.type = "password";
    button.style["background-color"] = "white";
    button.style["color"] = "black";
  }
};

const submit = () => {
  let currentEmail = email.value;
  let currentConfirm = email2.value;
  let pass = password.value;
  let currentName = nome.value;
  let currentLastName = sobrenome.value;

  if (
    regexEmail.test(currentEmail) &&
    currentEmail === currentConfirm &&
    pass.split("").length > 7 &&
    currentName != "" &&
    currentLastName != "" &&
    regex.test(pass) &&
    check.checked
  ) {
    alert("Cadastrado com sucesso!");
  } else {
    alert(
      "[ERRO]. Você precisa cumprir todas as exigências do formulário e aceitar os termos para se cadastrar com sucesso."
    );
    auxVar = true;
    valid();
  }
};

const valid = () => {
  let currentEmail = email.value;
  let currentConfirm = email2.value;
  let pass = password.value;
  let currentName = nome.value;
  let currentLastName = sobrenome.value;

  if (auxVar == true) {
    currentName != "" && currentLastName != ""
      ? toggleToValid(valid0)
      : toggleToInvalid(valid0);

    currentEmail != "" && regexEmail.test(currentEmail)
      ? toggleToValid(valid1)
      : toggleToInvalid(valid1);

    currentEmail === currentConfirm
      ? toggleToValid(valid2)
      : toggleToInvalid(valid2);

    regex.test(pass) ? toggleToValid(valid3) : toggleToInvalid(valid3);

    pass.split("").length > 7 ? toggleToValid(valid4) : toggleToInvalid(valid4);

    check.checked ? toggleToValid(termos) : toggleToInvalid(termos);

    if (currentConfirm === "") toggleToInvalid(valid2);
  }
};
