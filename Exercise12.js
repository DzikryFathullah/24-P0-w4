function shoppingTime(memberId, money) {
    var itemBarang = [
        { namaBarang: 'Sepatu Stacattu', hargaBarang: 1500000 },
        { namaBarang: 'Baju Zoro', hargaBarang: 500000 },
        { namaBarang: 'Baju H&N', hargaBarang: 250000 },
        { namaBarang: 'Sweater Uniklooh', hargaBarang: 175000 },
        { namaBarang: 'Casing Handphone ', hargaBarang: 50000 }]

    if (memberId === "" || memberId === undefined) {
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    } else if (money < itemBarang[itemBarang.length - 1].hargaBarang) {
        return "Mohon maaf, uang tidak cukup"
    } else {
        var shop = {}
        shop.memberId = memberId
        shop.money = money
        var item = []
        for (var index = 0; index < itemBarang.length; index++) {
            if (money >= itemBarang[index].hargaBarang) {
                money = money - itemBarang[index].hargaBarang
                item.push(itemBarang[index].namaBarang)
            }
        }
        shop.listPurchased = item
        shop.changeMoney = money

        return shop
    }
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja