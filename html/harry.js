// Chapter -1 //
// 1. Create a variable of type string and try to add a number to it ?
// let num1 = "piyali"
// let num2= 74
// console.log(num1 +" "+ num2)

// 2. Use typeof operator to find the datatype of the String n last question?
// let num1 = "piyali"
// let num2= 74
// console.log(typeof num1)
// console.log(typeof num2)
// 3.create const object in javascript can you change it to hold a number later?
// const obj = {
//     name: "Piyali",
//     age: 5
// }
// obj ={
//     age :5
// }

// 4.Try to add new key to the const object in problem 3 were you  to do it?
// const obj = {
//         name: "Piyali",
//          age: 5
//      }
//      obj["friend"] = "Abhradip"
//      console.log(obj)

// #############################################

// 5.write a js program to create a word meaning dictionary of words?
// let dict={
//     Immediately:"at once,right away",
//     Appreciate:"to understand the worth or importance of (something or someone)",
//     Apologize:"to express regret for something done or said ",
//     Depression:"a common mental disorder",
//     Decision:" a judgment, conclusion, or resolution reached or given; verdict"
// }
// console.log(dict.Apologize)
// Chapter -2 //
// 1.use logical operators to find whether the age of a person lies between 10 and 20?
// let age= 42
// if(age>=10 && age<=20){
//     console.log("Your age lies between 10 and 20")
// }
// else{

//  console.log("Your age doesn't lies between 10 and 20")
// }
// 2.demonstrate the use of switch case statements in javascript

// let age = 18
// switch (age) {
//     case 10:
//         console.log("Your age is 10")
//         break
//     case 11:
//         console.log("Your age is 11")
//         break
//     case 12:
//         console.log("Your age is 12")
//         break
//     case 13:
//         console.log("Your age is 13")
//         break
//     case 14:
//         console.log("Your age is 14")
//         break
//     case 15:
//         console.log("Your age is 15")
//         break
//     default:
//         console.log("Your age is not special")
// }
// 3.Write a javascript program to find whether a Number is divisible by 2 and 3
/*
let num = 12
if (num % 2 == 0 && num % 3 == 0) {
    console.log("Your number is divisible by 2 and 3")
}
else {

    console.log("Your number is not divisible by 2 and 3")
}
*/
// 4.Write a javascript program to find whether a Number is divisible by 2 or 3
// let num = 10
// if (num % 2 == 0 || num % 3 == 0) {
//     console.log("Your number is divisible by 2 and 3")
// }
// else {

//     console.log("Your number is not divisible by 2 and 3")
// }

// ###########################################

// 5.print "you can Drive "or "you cannot Drive" based on age greater than 18 using ternary operator
// let age = 78
// if (age >= 18) {
//     console.log("you can drive")
// }
// else {
//     console.log("you cannot drive")
// }
// Chapter -3 //
// 1. Write a program to print the marks of a student in an object using for loop?
/*
let student={
    piyali:90,
    abhradip:95,
    puja:87,
    kuheli:85,
    pubali:50
}

for (i=0;i<Object.keys(student).length;i++){
    console.log("The marks of " + Object.keys(student)[i] + " are " + student[Object.keys(student)[i]])
}

// ###############################

// 2.Write the program in Q1 using for in loop?

for (let i in student){
    console.log("The marks of " + i + " are "+ student[i])
}
*/
// 3.Write a program to print "try again" until the uses the correct number?
// let num = 50
// let a = null
// while (a != num) {
//     console.log("try again")
//     a = prompt("enter a number")
// }
// console.log("you have entered a correct number")
// 4.write a function to find mean of 5 Number?

// function mean(a,b,c,d,e,f){
//     return (a+b+c+d+e+f)/6
// }

// console.log(mean(40,55,66,74,84,93))

// let mean1=Math.floor(mean(40,55,66,74,84,93))
// console.log(mean1)
// Chapter -4 //
// 1. what will the following print in javascript?
// let str="piyali\""
// console.log(str.length)

// ############################################

// 2.explore the includes starts with & ends with functions to a string?
// let str="Serampore College is located in Serampore, in West Bengal state, India. Established in 1818, it is the third oldest college in the country after CMS College, Kottayam and Presidency College "
// let word="Serampore"
// console.log(str.includes(word))
// console.log(str.startsWith(word))
// console.log(str.includes(word))

// ########################################

// 3.write a program to convert a given string to lowercase?
// let str="Durga Puja is a famous Hindu festival when Goddess Durga is worshipped. Durga Puja is also known as Durgotsava. Durgotsava refers to all five day"
// console.log(str.toLowerCase())
// 4.extract the amount out of this string "Please five Rs 1000"?
// let str="Please give Rs 1000"
//  let amount=str.slice("Please give Rs".length)  //1//
// let amount=str.slice(15)  //2//
// console.log(amount)
// console.log(typeof amount)

// #################################

// let str = Number.parseInt(amount)
// console.log( typeof str)
// 4.Try to change 4th character of a given string were you able to do it?
// let friend="puja"
// friend[2]="k"
// console.log(friend)  // friend is not change because string is immutable\\

// ##################################

// Chapter -5 //
//1. Create an array of number and take input from the user to add numbers to this array?
// let arr=[4,5,6,2]
// let num=prompt("enter a number")
// num=Number.parseInt(num)
// arr.push(num)
// console.log(arr)
// 2.keep adding number to the array in 1 until 0 is added to the array?
//  let arr=[4,5,6,3]
//  let a
// do {
//    a=prompt("enter a number")
//    a=Number.parseInt(a)
//     arr.push(a)
// }while(a!=0)
// console.log(arr)
// 3.filler for Numbers divisible by 10 from a given array?
// let arr = [4, 50, 90, 60, 3, 2, 70, 60, 5, 50]
// let arr2 = arr.filter((num) => {
//     return num %10===0
//     // console.log(num)
// })
// console.log(arr2)
// 4.crete an array og square of given numbers?
// let arr = [4, 50, 90, 60, 3, 2, 70, 60, 5, 50]
// let arr2 = arr.map((num) => {
//     // return num*num     //1//
//     return num**2          //2//
//     console.log(num)
// })
// console.log(arr2)
// 5.use reduce to calcutate factorial og given number from an array of first n natural numbers (n being the number where fational needs  to be calcutate)?

// let arr=[4,5,3,2,8,6]
// let arr2=arr.reduce((num1,num2)=>{
//     return num1*num2
// })
// console.log(arr2)








// let student = [
//     {
//         name: "Piyali Chatterjee",
//         age: 20,
//         rollno: 25,
//         class: "one"
//     },
//     {
//         name: "Puja Saha",
//         age: 20,
//         rollno: 24,
//         class: "one"

//     },
//     {
//         name: "Kuheli Chatterjee",
//         age: 20,
//         rollno: 23,
//         class: "one"

//     },
//     {
//         name: "Pubali Chatterjee",
//         age: 20,
//         rollno: 22,
//         class: "one"

//     }
// ]
// // console.log(student[2].age)
// for (let i = 0; i < student.length; i++) {
//     console.log(student[i].rollno)
// }
