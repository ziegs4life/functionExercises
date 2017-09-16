//RETURN POSITIVE
// var arr = [-1, 0, 1, 2, 3, 4, 5, 6];
//
// var newArr = arr.filter(function(element){
//     return element > 0;
// });
//  console.log(arr);
//  console.log(newArr);

//RETURN EVEN
// var arr = [-2, -1, 0, 1, 2, 3, 4, 5, 6];
//
// var newArr = arr.filter(function(element) {
//     return element % 2 == 0;
// });
//
// console.log(arr);
// console.log(newArr);

//SQUARE NUM
// var arr = [-2, -1, 0, 1, 2, 3, 4, 5, 6];
//
// var newArr = arr.map(function(element) {
//     return element ** 2;
// })
//
// console.log(arr);
// console.log(newArr);
//

// CITIES
// var cities = [
//   { name: 'Los Angeles', temperature: 60.0},
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];
//
// var newArr = cities.filter(function(element) {
//   return element.temperature < 70;
// });
//
// console.log(newArr);


//CITIES 2
// var cities = [
//   { name: 'Los Angeles', temperature: 60.0},
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];
//
// var newArr = cities.map(function(cities) {
//   return cities.name;
// });
//
// console.log(newArr);
//

//PEOPLE
// var people = [
//   'Dom',
//   'Lyn',
//   'Kirk',
//   'Autumn',
//   'Trista',
//   'Jesslyn',
//   'Kevin',
//   'John',
//   'Eli',
//   'Juan',
//   'Robert',
//   'Keyur',
//   'Jason',
//   'Che',
//   'Ben'
// ];
//
// people.forEach(function(person) {
//     console.log("Good Job, " + person + "!")
// });
//


//Sort an array
// var people = [
//   'Dom',
//   'Lyn',
//   'Kirk',
//   'Autumn',
//   'Trista',
//   'Jesslyn',
//   'Kevin',
//   'John',
//   'Eli',
//   'Juan',
//   'Robert',
//   'Keyur',
//   'Jason',
//   'Che',
//   'Ben'
// ];
//
// var newArr = people.sort(function(person1, person2) {
//     if (person1 < person2) {
//       return -1;
//     } else if (person1 > person2) {
//         return 1;
//     } else {
//         return 0;
//     }
// });
//
// console.log(newArr);
//
//


//Sort an array length
// var people = [
//   'Dom',
//   'Lyn',
//   'Kirk',
//   'Autumn',
//   'Trista',
//   'Jesslyn',
//   'Kevin',
//   'John',
//   'Eli',
//   'Juan',
//   'Robert',
//   'Keyur',
//   'Jason',
//   'Che',
//   'Ben'
// ];
//
// var newArr = people.sort(function(person1, person2 {
//     if (person1.length < person2.length) {
//       return -1;
//     } else if (person1.length > person2.length) {
//         return 1;
//     } else {
//         return 0;
//     }
// });
//
// console.log(newArr);

//SortArray3

// var arr = [
//   [1, 3, 4],
//   [2, 4, 6, 8],
//   [3, 6]
// ];
//
// array.sort(function(array1, array2){
// var summingFunction = function(accumulator, number){
//   return accumulator + number;
// };
//     var array1Sum = array.reduce(summingFunction , 0);
//     var array2Sum = array.reduce(summingFunction, 0);
//
//     if (array1Sum < array2Sum) {
//         return -1;
//     } else {
//         return 1;
//     }
//
//
//
// });
//
// console.log(arr);

// Call 3 times
//
// function call3Times(fun) {
//   fun();
//   fun();
//   fun();
// }
//
// var hello = function() {
//   console.log("Hello World!");
// }
//
// call3Times(hello);




//Acronym
// > acronym(['very', 'important', 'person'])
// 'VIP'
// > acronym(['national', 'aeronautics', 'space', 'administration'])
// 'NASA'



// var array = (['very', 'important', 'person']);
//
// function acronym(words){
//
//     return words.reduce(function(accumulator, word) {
//         var firstLetter = word[0].toUpperCase();
//
//         return accumulator + firstLetter;
//     }, "");
//
//
// }
//
// console.log(acronym(array));
//


//CUSTOM MAP FUNCTION

var exclaim = function(thing) {
  return thing + "!";
}


function map(arr, fun) {
    var newArray = [];

    for (var i = 0; i < arr.length; i++) {
      var element = arr[i];
      var newElement = fun(element);
      newArray.push(newElement);

    }
    return newArray;
}

var array = [1,2,"hi","sup"]

console.log(map(array, exclaim));
