

function showName(){
    let inputName=prompt("Enter your name:")
    let inputAge=prompt("Enter your age:")
    let inputGender=prompt("Enter your gender:")
    const nameTag=document.getElementById("name")
    const ageTag=document.getElementById("age")
    const genderTag=document.getElementById("gender")
    nameTag.innerHTML=inputName
    ageTag.innerHTML=inputAge
    genderTag.innerHTML=inputGender
}
function hideName(){
    const nameTag=document.getElementById("name")
    const ageTag=document.getElementById("age")
    const genderTag=document.getElementById("gender")
    nameTag.innerHTML=""
    ageTag.innerHTML=""
    genderTag.innerHTML=""
    
}
