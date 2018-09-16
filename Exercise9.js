function tukarBesarKecil(kalimat) {
    var hasil = ''
    for (var indexKata = 0; indexKata < kalimat.length; indexKata++) {
        if (kalimat[indexKata] === kalimat[indexKata].toLowerCase()) {
            hasil += kalimat[indexKata].toUpperCase()
        } else {
            hasil += kalimat[indexKata].toLowerCase()
        }
    }
    return hasil
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"