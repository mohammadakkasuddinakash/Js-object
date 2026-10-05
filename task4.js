let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

const keys = Object.keys(student);
console.log(keys.length);

// using loop
let count = 0;
for(const keys in student){
    count++;
}
console.log(count);



// Task-4
// Count the number of properties.

// Input:

// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };