function countProfit(shoppers) {
    let listBarang = [['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
    ];
    var hasil = []
    if (shoppers === undefined || shoppers.length === 0) {
        return []
    } else {
        for (var indexBarang = 0; indexBarang < listBarang.length; indexBarang++) {
            var obj = {}
            hasil.push(obj)
            var customer = []
            var balanceStock = listBarang[indexBarang][2]
            for (var indexCustomer = 0; indexCustomer < shoppers.length; indexCustomer++) {
                if (listBarang[indexBarang][0] === shoppers[indexCustomer].product && balanceStock >= shoppers[indexCustomer].amount) {
                    obj.product = listBarang[indexBarang][0]
                    obj.shoppers = customer.push(shoppers[indexCustomer].name)
                    balanceStock = balanceStock - shoppers[indexCustomer].amount
                    obj.leftOver = balanceStock
                    obj.totalProfit = (listBarang[indexBarang][2] - balanceStock) * listBarang[indexBarang][1]
                } else {
                    obj.product = listBarang[indexBarang][0]
                    obj.shoppers = customer
                    obj.leftOver = balanceStock
                    obj.totalProfit = (listBarang[indexBarang][2] - balanceStock) * listBarang[indexBarang][1]
                }
            }
        }
    }
    return hasil
}

// TEST CASES
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 }, { name: 'Devi', product: 'Baju Zoro', amount: 1 }, { name: 'Lisa', product: 'Baju Zoro', amount: 1 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]