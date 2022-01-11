// Use the forEach method to solve these problems! If the function returns an array, it should return a NEW array, without mutating the old array.


/*
For this first set of functions, assume the input array looks like this:

const petsArray = [
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
];

findByName('jumpy', petsArray)

OUTPUT:
{ name: 'jumpy', type: 'frog' }
*/

export function findByName(name, arr) {
    for(let pet of arr) {
        if(pet.name === name) {
            return pet;
        }
    }
}

/*
OUTPUT:
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },

]*/

export function getDogs(arr) {
    return (arr.filter(animal => animal.type === 'dog'));
}

/*
OUTPUT:
['spot', 'rover']
*/

export function getNamesOfDogs(arr) {
    const dogs = getDogs(arr);
    return dogs.map(dog => dog.name);
}


/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    return arr.map(pet => pet.name);
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    return (arr.map(pet => pet.type)).reverse();
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    return arr.map(pet => {
        return {
            nombre: pet.name,
            tipo: pet.type };
    });
}

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNamesWithMap(arr) {
    return arr.map(pet => pet.name);
}

/*
Output:

[
    { name: 'spot', isHungry: true, type: 'dog' },
    { name: 'rover', isHungry: true, type: 'dog' },
    { name: 'jumpy', isHungry: true, type: 'frog' },
    { name: 'einstein', isHungry: true, type: 'cat' },
]*/

export function makeArrayWithIsHungry(arr) {
    return (arr.map(pet => {
        return {
            ...pet,
            isHungry: true
        };
    }));
}

/*
Output:

[
    { name: 'SPOT', type: 'dog' },
    { name: 'ROVER', type: 'dog' },
    { name: 'JUMPY', type: 'frog' },
    { name: 'EINSTEIN', type: 'cat' },
]*/

export function makeShoutingArray(arr) {
    return (arr.map(pet => {
        return {
            name: pet.name.toUpperCase(),
            type: pet.type
        };
    }));
}


/*

Output:
['spotdog', 'roverdog', 'jumpyfrog', einsteincat']
*/

export function makeStringArray(arr) {
    return (arr.map(pet => {
        return `${pet.name}${pet.type}`;
    }));
}

/*
Output:

[
    [
        ['name', 'spot'],
        ['type', 'dog']
    ],
    [
        ['name', 'rover'],
        ['type', 'dog']
    ],
    [
        ['name', 'jumpy'],
        ['type', 'frog']
    ],
    [
        ['name', 'einstein'],
        ['type', 'cat']
    ]
*/

export function makeArrayOfArraysOfArrays(arr) {
    return (arr.map(pet => {
        return [
            ['name', pet.name],
            ['type', pet.type]
        ];
    }));
}

////////////////////////////////////////////////////////

/*
For the next set of functions, assume the following input:

[
    { type: 'car', make: 'ford', model: 'taurus', age: 2 },
    { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
    { type: 'truck', make: 'ford', model: 'bronco', age: 5 },
    { type: 'truck', make: 'chevy', model: 'silverado', age: 2 },
    { type: 'van', make: 'chevy', model: 'express', age: 1 },
    { type: 'car', make: 'chevy', model: 'camero', age: 1 },
]
*/

/*

Output:
[
    { type: 'car', make: 'ford', model: 'taurus', age: 2 },
    { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
    { type: 'car', make: 'chevy', model: 'camero', age: 1 },
];
*/

export function getCars(arr) {
    let cars = arr.filter(vehicle => vehicle.type === 'car');
    for(let car of cars) {
        delete car.age;
    }
    return cars;
}

/*
Output:
 [
        { type: 'car', make: 'chevy', model: 'malibu' },
        { type: 'car', make: 'chevy', model: 'camero' },
  ] ;

*/

export function getChevyCars(arr) {
    let chevyCars = arr.filter(vehicle => vehicle.make === 'chevy'
    && vehicle.type === 'car');

    return chevyCars;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Stretch Goals!

/*
Output:
'taurusmalibubroncosilveradoexpresscamero'
 */

export function makeModelsStringWithReduce(arr) {
    return '';
}

/*
(add all ages)

Output: 14
 */

export function getSumOfAges(arr) {
    return 0;
}

/*

Output:
{
    car: 3,
    truck: 2,
    van: 1
}
 */

export function makeCountObject(arr) {
    return {};
}


/*

Output:
(order doesn't matter--but the string must include all keys for the first object in the array)
'typemakemodelage'
 */


export function makeKeysString(arr) {
    return '';
}
