const promtName = prompt("Masukkan Nama Anda")
const tempatNamanya = document.getElementById("tempatNama")

function sambutan() {
    tempatNamanya.textContent = `Nama saya adalah ${promtName}`
    console.log("isi elemen : ",tempatNamanya);
}

sambutan()

