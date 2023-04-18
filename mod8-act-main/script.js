let name = prompt("What is your name?");
let gender = confirm("Gender: Ok for Male, Cancel for Female") ? "M" : "F";
let user = prompt("What is your username?");
let desc = prompt("Describe yourself.");
let year = prompt("What year were you born?");
let age = prompt("How old are you?");
let pic = prompt("Select a profile pic");
document.getElementById("fname").innerHTML = name;
document.getElementById("gender").innerHTML = gender;
document.getElementById("username").innerHTML = user;
document.getElementById("desc").innerHTML = desc;
document.getElementById("year").innerHTML = year;
document.getElementById("age").innerHTML = age;
document.getElementById("ppic").src = pic;

//Sorry natagalan sir gi challenge ko sarili ko na as short as possible hehe 