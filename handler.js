const validateInput = (inputFungsi, inputLokasi, inputJam) => {
    if (inputFungsi.length() != 3) {
        return "Fungsi tidak cocok"
    }
    if (![1,2,3,4].includes(inputLokasi)) {
        return "Lokasi tidak cocok"
    }
    if (![1,2,3].includes(inputJam)) {
        return "Lokasi tidak cocok"
    }
    else{
        return true
    }
}

module.exports = { validateInput }