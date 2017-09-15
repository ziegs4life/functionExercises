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
var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

var newArr = cities.map(function(cities) {
  return cities.name;
});

console.log(newArr);
