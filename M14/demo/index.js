var namaLengkap = document.getElementById("fullname")
var tempatLahir = document.getElementById("birthplace")
var tanggalLahir = document.getElementById("birthdate")
var jenisKelamin = document.getElementById("fullname") //cek
var alamat = document.getElementById("address")
var email = document.getElementById("email")
var userName = document.getElementById("username")
var password = document.getElementById("password")
var noHp = document.getElementById("phone")
var umur = document.getElementById("fullname")
var pendidikan = document.getElementById("education")
var hobi = document.getElementById("fullname") // cek
var warna = document.getElementById("color")

var tombolSubmit = document.getElementById("submitForm")

tombolSubmit.addEventListener('click', function () {
    event.preventDefault(); 

  const formData = {};
  const inputs = document.querySelectorAll("input, select, textarea");

  inputs.forEach((input) => {
    const name = input.name;
    if (!name) return;

    if (input.type === "radio") {
      if (input.checked) {
        formData.gender = input.id === "rdblaki" ? "Laki-laki" : "Perempuan";
      }
    } else if (input.type === "checkbox") {
      if (!formData.hobbies) formData.hobbies = [];
      if (input.checked) {
        formData.hobbies.push(input.nextElementSibling.innerText); 
      }
    } else {
      formData[name] = input.value;
    }
  });

  console.log(formData);
})

