function cariModus(arr) {
    var modus = 0
    var nilaiModus = 0
    var angkaModus = 0
    for (var i = 0; i < arr.length; i++) {
        var counter = 0
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                counter++
            }
        }
        if (counter > nilaiModus && counter > 1) {
            nilaiModus = counter
            angkaModus = arr[i]
        } else if (nilaiModus === 0 || counter === arr.length) {
            angkaModus = -1
        }
    }
    return angkaModus
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1