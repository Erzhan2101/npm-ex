// // Найти все ошибки:

// // 1. Умножить все числа в массиве на n

// function mult(array, n) {
//   return   array.map(it => it * n)
// }
//
// console.log( mult([1,2,3], 2) )  // [2,4,6]



// // 2. Циклом умножить все числа в массиве на n

// const mult2 = (array, n) => {
//     let result = []
//     for (let i = 0; i < array.length ; i++) {
//         result = [...result, array[i] * n]
//     }
//     return result
// }
//
// console.log( mult2([1,2,3], 2) )  // [2,4,6]



// // 3. Вернуть все числа больше нуля. Аргумент - массив, результат - массив.

// function positiveNumbers(array) {
//     return array.filter(it => it > 0)
// }
//
// console.log( positiveNumbers(1,2,3,-1,-2,-3,4) )  // [1,2,3,4]


// // 4. Проверка треугольника, a,b и c - числа. Сумма углов треугольника всегда равна 180
//
// function triangleCheck(a, b, c) {
//     if (a + b + c === 180) {
//         return true
//     }
//     return false
// }
//
// console.log(triangleCheck(90, 45, 45))  // true
// console.log(triangleCheck(90, 45, 90))  // false



// // 5. Найти наибольшее и наименьшее числа. На входе строка - числа разделенные пробелом,
// //     результат строка - 'max: n, min: n'

// const highAndLow = (str) => {
//     const array = str.split('')
//     const max = Math.max(...array)
//     const min = Math.min(...array)
//     const result = `max: ${max}, min: ${min}`
// }
//
// console.log(highAndLow('10 15 5 25 100 15 30 1 20'))  // max: 100, min: 1



// // 6. Найти сумму чисел в массиве

// const sum = (array) => {
//   return   array.reduce(acc, elem => {
//       return acc + elem
//     }, 0)
// }
//
// console.log( sum([10,30,10,25,25]) )  // 100



// // 7. Округлить число до двух знаков после запятой

const round = function (number) {
    const roundedNum = toFixed(number)
    return number
}

console.log(round(10.12345))  // 10.12




// // 8. Если число больше 0 - вернуть '+', если меньше - вернуть '-', если равно 0 - вернуть '0'
//  //      на входе число, на выходе строка.

// const checkNum = (num) => {
//     if (num = 0) {
//         return '0'
//     } else if (num < 0) {
//         return '-'
//     }
//     return '+'
// }
//
// console.log(checkNum(15))  // +
// console.log(checkNum(-15))  // -
// console.log(checkNum(0))  // 0



// // 9. Найти сумму чисел в массиве используя цикл

// const sum2 = (array) => {
//     const sum = 0
//     for {let i = 0; i < array; i++} (
//         sum += array[i]
//     )
//     return sum
// }
//
// console.log( sum2([10,30,10,25,25]) )  // 100


// // 10. Отсортировать массив по убыванию.

// const sortingNums = (array) => {
//     const array.sort(a, b => b - a)
//     return array
// }

// console.log(sortingNums([5,10,1,25,35,100,15])) // [1,  5,  10, 15, 25, 35, 100]

// // 11. Создать объект с полями name и lastName, на входе строка в виде 'Имя фамилия', на выходе объект

// function createObj(str) {
//     const arr = string.split(' ')
//     return {
//         name: arr[0]
//         lastName: arr[1]
//     }
// }
//
// console.log(createObj('Ivan Ivanov'))  // { name: 'Ivan', lastName: 'Ivanov' }


