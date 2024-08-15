  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1,2,3,4,5];
let result = [];
for(let num of nums){
    result.push(num * 2)
}
console.log("For Loop: " ,result);
// Using map()
let resultMap = nums.map(n => n * 2);
console.log("Map Method: ", resultMap);

//const multByTwo = (num) => {return num * 2}
const mapResults = nums.map(num => num * 2);
console.log("Map Results", mapResults);
// Simplified w/ map()


// Simplfied w/ map() + arrow function


// With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];

  const studentsWithIds = students.map(s => [s.id, s.name]);
  console.log(studentsWithIds);