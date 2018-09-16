function checkAB(num) {
    var posisi = num.length - 1
    var posisiA = 0
    var posisiB = 0
    var selisihPosisi = 0
    var posisiTemp = 0
    for (var i = 0; i < num.length; i++) {
        if (num[i] === 'a') {
            posisiA = posisi - i
        }
        if (num[i] === 'b' && posisiB < [i]) {
            posisiTemp = [i]
            posisiB = posisi - i
        }
    }
    selisihPosisi = Math.abs(posisiA - posisiB)
    if (selisihPosisi > 3 && posisiB > 0) {
        return true
    } else {
        return false
    }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false