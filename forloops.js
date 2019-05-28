var someArray = [1,2,3,4,5];
//0, 1, ... length - 1

for(var i = 0; i < someArray.length; i++){
        console.log(someArray[i]);
}
console.log('--------------')


//For of loop if you dont care about index and just need value
for(var number of someArray){
    console.log(number)
}
console.log('--------------')

//Map - when you need a new array that is the same but vlaues are different in some manner OR can just be used to loop through and do something as well
someArray.map(function(number, i){
    console.log(number, i);
});
//More common way to use map as an array modifier that is immutable
var newMap = someArray.map(function(number){
    return number + 1;
})
//console.log(newMap);

//We need to for loop through some numbers and only keep odd numbers/immuatble
var filteredNumbers = someArray.filter(function(number){
    return number % 2 !== 0;
});

console.log(filteredNumbers);

var someobject = {
    name:'Person',
    age:45,
    hobbies:['biking', 'rock collecting']
}

var objKeys = Object.keys(someobject) //returns an array of the objects keys

console.log(objKeys);
objKeys.map(function(key){
    console.log(someobject[key]);
});

//for in loop used for iterating over objects
for(var key in someobject){
    console.log(someobject[key]);
}
