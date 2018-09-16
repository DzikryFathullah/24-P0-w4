function urutkanAbjad(str) {
    var strArr = []
    for (var hurufPisah = 0; hurufPisah < str.length; hurufPisah++) {
        strArr.push(str[hurufPisah])
    }

    for (var hurufSekarang = 0; hurufSekarang < strArr.length; hurufSekarang++) {
        for (var hurufBanding = 0; hurufBanding < strArr.length; hurufBanding++) {
            if (strArr[hurufSekarang] < strArr[hurufBanding]) {
                var temp = strArr[hurufSekarang]
                strArr[hurufSekarang] = strArr[hurufBanding]
                strArr[hurufBanding] = temp
            }
        }
    }
    var strHasil = ''
    for (var indexGabung = 0; indexGabung < strArr.length; indexGabung++) {
        strHasil += strArr[indexGabung]
    }
    return strHasil
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'