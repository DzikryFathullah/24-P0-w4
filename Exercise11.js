function changeMe(arr) {
    var index = 0
    while (index < arr.length) {
        var title = ''
        var obj = {}
        title += (index + 1) + '. ' + arr[index][0] + ' ' + arr[index][1] + ' :'
        console.log(title)

        var age = 2018 - arr[index][3]
        if (age === NaN || arr[index][3] === undefined) {
            age = "Invalid Birth Year"
        }
        obj.firstName = arr[index][0]
        obj.lastName = arr[index][1]
        obj.gender = arr[index][2]
        obj.age = age
        console.log(obj)
        index++
    }

}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""