let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

for(const prop in myObject){
    console.log('key : ' + prop + ' | '+ 'type : ' + typeof myObject[prop]);
    // console.log(prop);
    // console.log(myObject[prop]);
}

// Task-5 (Hard)
// Loop through an object and print the key-value pairs with their types

// Input:

// let myObject = {

// name: 'John Doe',
// age: 25,
// city: 'Example City',
// isStudent: true
// };

// Output:


// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean

// console.log('key : ' + prop + ' | '+ 'type : ' + typeof myObject[prop]);