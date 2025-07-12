function gantiGambarKarakter(){
    var selectedItem = document.getElementById("charOption").value
    var charImage = document.getElementById("charImage")
    var namaKarakter = document.getElementById("namaKarakter")
    
  

    if(selectedItem ==="wraith"){
        charImage.src = "../../resource/wraith.png"
        namaKarakter.innerHTML = selectedItem
        document.body.style.backgroundColor="red"
    }
    else if (selectedItem === "crypto"){
        charImage.src = "../../resource/crypto.png"
        namaKarakter.innerHTML = selectedItem
        document.body.style.backgroundColor="yellow"
    }
    else if (selectedItem === "ash"){
        charImage.src = "../../resource/ash.webp"
        namaKarakter.innerHTML = selectedItem
        document.body.style.backgroundColor="brown"
    }
    else if (selectedItem === "seer"){
        charImage.src = "../../resource/seer.webp"
        namaKarakter.innerHTML = selectedItem
        document.body.style.backgroundColor="black"
    }
    else if (selectedItem === "pathfinder"){
        charImage.src = "../../resource/pathfinder.jpg"
        namaKarakter.innerHTML = selectedItem
        document.body.style.backgroundColor="orange"
    }
    else if (selectedItem === "revenant"){
        charImage.src = "../../resource/revenant.jpg"
        namaKarakter.innerHTML = selectedItem
        document.body.style.backgroundColor="green"
    }
}