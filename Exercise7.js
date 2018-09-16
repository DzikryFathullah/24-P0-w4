function digitPerkalianMinimum(angka) {
    var bucket = []
    if (angka === 1) {
        return 2
    } else {
        for (digitAngka = 1; digitAngka < angka; digitAngka++) {
            if (angka % digitAngka === 0) {
                var pasangan = angka / digitAngka
                bucket.push(digitAngka + '' + pasangan)
            }
        }
        for (angkaSekarang = 0; angkaSekarang < bucket.length; angkaSekarang++) {
            for (angkaBanding = 0; angkaBanding < bucket.length; angkaBanding++) {
                if (bucket[angkaSekarang] > bucket[angkaBanding]) {
                    var temp = bucket[angkaSekarang]
                    bucket[angkaSekarang] = bucket[angkaBanding]
                    bucket[angkaBanding] = temp
                }
            }
        }
        var hasil = bucket[0].length
    }
    return hasil
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2