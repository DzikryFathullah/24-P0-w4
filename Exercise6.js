function hitungHuruf(kata) {
    var perKata = kata.split(' ')
    var kataPilihan = null
    var maxNilaiKata = 0
    var storeHuruf = []
    for (var index = 0; index < perKata.length; index++) { // Index untuk kata
        var nilaiKata = 0
        var perHuruf = perKata[index].split('')
        for (let indexHuruf = 0; indexHuruf < perHuruf.length; indexHuruf++) { // index untuk huruf
            var counterHuruf = 0
            for (let indexDalamHuruf = 0; indexDalamHuruf < perHuruf.length; indexDalamHuruf++) { //index untuk mencari huruf
                if (perHuruf[indexDalamHuruf] === perHuruf[indexHuruf]) {
                    counterHuruf++
                }
            }
            if (counterHuruf > 1) {
                if (storeHuruf[0] === undefined) {
                    storeHuruf.push(perHuruf[indexHuruf])
                    nilaiKata += counterHuruf
                } else {
                    let counterCheck = 0
                    for (let indexStore = 0; indexStore < storeHuruf.length; indexStore++) {
                        if (perHuruf[indexHuruf] === storeHuruf[indexStore]) {
                            counterCheck++
                        }
                    }
                    if (counterCheck === 0) {
                        nilaiKata += counterHuruf
                        storeHuruf.push(perHuruf[indexHuruf])
                    }
                }
            }
        }
        storeHuruf = []
        if (maxNilaiKata < nilaiKata) { // untuk SET kata pilihan berdasar nilai terbesar
            maxNilaiKata = nilaiKata
            kataPilihan = perKata[index]
        }
    }
    //console.log(maxNilaiKata)
    return kataPilihan
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau