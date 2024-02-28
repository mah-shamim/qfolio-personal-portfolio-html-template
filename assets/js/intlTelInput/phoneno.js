const input = document.querySelector("#phonenumber");

window.intlTelInput(input, {
  initialCountry: "us",
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js"
});