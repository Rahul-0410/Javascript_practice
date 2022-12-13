// Count number of Vowels in String

function countVowel(str){
    var vowelCount=0
    const vowels=['a','e','i','o','u']
    for(let char of str){
        if (vowels.includes(char)){
            vowelCount++
        }
    }
    return vowelCount
}
const string=prompt('Enter a string:')
const result=countVowel(string)
console.log(result)


// Write a function to convert hours into seconds
function convertHoursToSeconds(hours){
    return hours*60*60
}
const hrs=prompt("Enter hours:")
const sec=convertHoursToSeconds(hrs)
console.log(sec)

// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are
const side1=5
const side2=6
const side3=7
const s= (side1+side2+side3)/2
const areaValue=(s*(s-side1)*(s-side2)*(s-side3))**1/2
console.log('The area of the triangle is:')
console.log(areaValue)

// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum

function sum(x, y) {
    if (x == y) {
      return 3 * (x + y);
      } 
     else
     {
      return (x + y);
     }
   }
  console.log(sum(10, 20));
  console.log(sum(10, 10));
  