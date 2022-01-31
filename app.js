let paymentForm = document.querySelector("#paymentForm");

paymentForm.addEventListener("submit", x => {
  x.preventDefault();

  let nuBe = true;

  const form = x.target;

  let soloNumeros = /^[0-9]{13,16}$/;
  let checkCVC = /^[0-9]{3}$/;
  let soloLetras = /^[a-zA-Z\s]+$/;

  if (form.card.value === "" || !soloNumeros.test(form.card.value)) {
    form.card.style.backgroundColor = "#FADBD8";
    nuBe = false;
  } else {
    form.card.style.backgroundColor = "#FFFFFF";
  }

  if (form.cvc.value === "" || !checkCVC.test(form.cvc.value)) {
    form.cvc.style.backgroundColor = "#FADBD8";
    nuBe = false;
  } else {
    form.cvc.style.backgroundColor = "#FFFFFF";
  }
  if (form.amount.value === "" || !soloNumeros.test(form.amount.value)) {
    form.amount.style.backgroundColor = "#FADBD8";
    nuBe = false;
  } else {
    form.amount.style.backgroundColor = "#FFFFFF";
  }

  if (form.name.value === "" || !soloLetras.test(form.name.value)) {
    form.name.style.backgroundColor = "#FADBD8";
    nuBe = false;
  } else {
    form.name.style.backgroundColor = "#FFFFFF";
  }
  if (form.lastname.value === "" || !soloLetras.test(form.lastname.value)) {
    form.lastname.style.backgroundColor = "#FADBD8";
    nuBe = false;
  } else {
    form.lastname.style.backgroundColor = "#FFFFFF";
  }
  if (form.city.value === "" || !soloLetras.test(form.city.value)) {
    form.city.style.backgroundColor = "#FADBD8";
    nuBe = false;
  } else {
    form.city.style.backgroundColor = "#FFFFFF";
  }
  if (form.states.value === "") {
    nuBe = false;
  }
  if (
    form.postalcode.value === "" ||
    !soloNumeros.test(form.postalcode.value)
  ) {
    form.postalcode.style.backgroundColor = "#FADBD8";
    nuBe = false;
  } else {
    form.postalcode.style.backgroundColor = "#FFFFFF";
  }

  if (form.mensaje.value === "") {
    form.mensaje.style.backgroundColor = "#FADBD8";
    nuBe = false;
  } else {
    form.mensaje.style.backgroundColor = "#FFFFFF";
  }

  if (nuBe) {
    //form.stopPropagation();
    document.getElementById("alert").style.display = "none";
    form.submit();
  } else {
    document.getElementById("alert").style.display = "block";
  }
  paymentForm.addEventListener("reset", () => {
    document.getElementById("alert").style.display = "none";
    document.getElementById("cvc").style.backgroundColor = "#FBFCFC";
    document.getElementById("card").style.backgroundColor = "#FBFCFC";
    document.getElementById("cvc").style.backgroundColor = "#FBFCFC";
    document.getElementById("amount").style.backgroundColor = "#FBFCFC";
    document.getElementById("mensaje").style.backgroundColor = "#FBFCFC";
    document.getElementById("city").style.backgroundColor = "#FBFCFC";
    document.getElementById("lastname").style.backgroundColor = "#FBFCFC";
    document.getElementById("postalcode").style.backgroundColor = "#FBFCFC";
    document.getElementById("name").style.backgroundColor = "#FBFCFC";
  });
});
