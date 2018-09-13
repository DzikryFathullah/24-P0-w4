function angkaPrima(angka) {
    // you can only write your code here!
    var counter = 0
    for (var index = 2; index < angka; index++) {
        if (angka % index === 0) {
            counter++
        }
    }
    if (counter > 1) {
        return false
    } else {
        return true
    }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false