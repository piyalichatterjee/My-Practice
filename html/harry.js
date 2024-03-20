// Chapter -1 //
// 1. crate a variable of type sting and try to add a number to it ?
// let num1 = "piyali"
// let num2= 74
// console.log(num1 +" "+ num2)

// 2. Use typeof opreratar to find the datatype of the String n last question?
// let num1 = "piyali"
// let num2= 74
// console.log(typeof num1)
// console.log(typeof num2)
// 3.cratea const object in javascript can you change it to hold a number later?
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

// 5.write a js program to create a ward mcaning dictionary of words?
// let dict={
//     Immediately:"at once,right away",
//     Apreciate:"to understand the worth or importance of (something or someone)",
//     Apologize:"to express regret for something done or said ",
//     Depression:"a common mental disorder",
//     decision:" a judgment, conclusion, or resolution reached or given; verdict"
// }
// console.log(dict.Apologize)
// Chapter -2 //
// 1.use logical opertors to fine whether the age og a person lies between 10 and 20?
// let age= 42
// if(age>=10 && age<=20){
//     console.log("Your age lies between 10 and 20")
// }
// else{

//  console.log("Your age doesnt lies between 10 and 20")
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
// 5.print "you can Drive "or "you cannot Drive" based on age qreater than 18 using ternary opertor
// let age = 78
// if (age >= 18) {
//     console.log("you can drive")
// }
// else {
//     console.log("you cannot drive")
// }
// Chapter -3 //
// 1. Write a program to print the marks of a student in an object using for loop?

// let student={
//     piyali:90,
//     abhradip:95,
//     puja:87,
//     kuheli:85,
//     pubali:50
// }

// for (i=0;i<Object.keys(student).length;i++){
//     console.log("The marks of " + Object.keys(student)[i] + " are " + student[Object.keys(student)[i]])
// }

// 2.Write the program in Q1 using for in loop?

// for (let i in student){
//     console.log("The marks of " + i + " are "+ student[i])
// }

// 3.Write a program to print "try aging" until the uses the correct number?
// let num = 50
// let a 
// while (a != num) {
//     console.log("try aging")
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
// 1. what will the following print in javasctipt?
// let str="piyali\""
// console.log(str.length)
// 2.explore the includes starts with & ends with functions tof a string?
// let str="Serampore College is located in Serampore, in West Bengal state, India. Established in 1818, it is the third oldest college in the country after CMS College, Kottayam and Presidency College "
// let word="Serampore"
// console.log(str.includes(word))
// console.log(str.startsWith(word))
// console.log(str.includes(word))


// 3.write a program to convert a given string to lowercase?
// let str="Durga Puja is a famous Hindu festival when Goddess Durga is worshipped. Durga Puja is also known as Durgotsava. Durgotsava refers to all five day"
// console.log(str.toLowerCase())
// 4.extact the amout out of this sting "Please five Rs 1000"?
// let str="Please give Rs 1000"
//  let amount=str.slice("Please give Rs".length)  //1//
// let amount=str.slice(15)  //2//
// console.log(amount)
// console.log(typeof amount)
// let srt = Number.parseInt(amount)
// console.log( typeof srt)
// 4.Try to change 4th character of a given string were you able to do it?
// let friend="puja"
// friend[2]="k"
// console.log(friend)  // friend is not change because srting is immutable\\
// Chapter -5 //
//1. Crate an array of number and take input from the user to add numbers to this array?
// let arr=[4,5,6,2]
// let num=prompt("enter a number")
// num=Number.parseInt(num)
// arr.push(num)
// console.log(arr)
// 2.kee5p adding number to the array in 1 until 0 is added to the array?
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

// Chapter -6 //
//1. write a program using prompt function to take input of age as a value form the user and use alert to tell hm if the can drive?

// let age=prompt("emter your age")
// age=Number.parseInt(age)
// if(age>=18){
//     alert("you can drive")
//     // console.log(typeof age)
// }
// else{
//     alert("you can not drive")
    
// }

//2. In Question use comfirm to ask the user if he wants to see the prompt again?

// let age=prompt("enter your age")
// if(age>=18){
//     alert("you can drive")
// }
// else{
//     alert("you can not drive")
    
// }
// let message=confirm("you are want to see this prompt?")
// console.log(message)
// if(message){
//     console.log("Yes I want to see this prompt")
// }
// else{
//     console.log("No")
// }

//3. In the previous question use console.error to log the error if the age entered is nagative?
// let age=prompt("emter your age")
// age=Number.parseInt(age)
// let num=0
// console.error(num)

// if(age>=18){
//     alert("you can drive")
//     // console.log(typeof age)
// }
// else{
//     alert("you can not drive")   
// }
// Write a program to change the url to google.com (redirection) if uses a number greate than 4?













//5. let color=prompt("Enter the page background color")
// document.body.style.backgroundColor=color



// Chapter -7 //
// 1. create a navber and change the color of its first element to red?
// let box=document.getElementById("navbar")
// console.log(box)
// let textElement=document.getElementById("list")
// let text=textElement.firstElementChild
// console.log(text)
// text.style.color="red"
// box.style.color="pink"

// 2.create a table without tbody now use "view page source" button to check whether it has a tbody or not?
// No

// 3.create an element with 3 children now change the color of first and last element to green?

// let listBox= document.getElementById("list")
// console.log(listBox)
// // listBox.firstElementChild.style.color="red"
// let first=listBox.firstElementChild
// first.style.color="red"
// // console.log(first)
// let last=listBox.lastElementChild
// last.style.color="red"
// console.log(last)

// 4.write a javascript code to change background of all li tags to cyan?
// let box=document.getElementById("list")
// let box=document.querySelectorAll(".test")
// let box1=document.querySelectorAll(".test")[1]
// let box2=document.querySelectorAll(".test")[2]

// console.log(box.length)


// box.style.backgroundColor="cyan"
// box1.style.backgroundColor="cyan"
// box2.style.backgroundColor="cyan"
// box.style.color="blue"

//5. which of the following used to look for the father ancestor that matches a given css selector?
// a) matches ,b)closest ,c)contains,d)none of these

// Chapter -8 //
// 1.Write a program to show different alerts when different buttons are clicked?

// let button=document.querySelectorAll(".btn")[0]
// let button1=document.querySelectorAll(".btn")[1]
// console.log(button)
// console.log(button1)

// button.addEventListener("click",function(){
//     alert("This is first button")
// })
// button1.addEventListener("click",function(){
//     alert("This is second button")
// })
// 2.create a wedsite which is cepable of storing bookmark of your favorite website using href?
// 3.Repeat Q2 using addEventListener?

// let google=document.getElementById("google")
// let zomato=document.getElementById("zomato")
// let twitter=document.getElementById("twitter")

// google.addEventListener("click",function(){
//     window.Location="https://www.google.com/";
//     window.focus()
// })
// zomato.addEventListener("click",function(){
    
// })
// twitter.addEventListener("click",function(){
    
// })


































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
