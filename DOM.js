// console.log(window);
// console.dir(document);
// console.dir(document.body);
// document.body.style.background = "green";


/*=============================getElementById ================================== */
// let heading = document.getElementById("heading-id");
// console.log(heading);

/*=============================getElementByClassName ================================== */

// let headings = document.getElementsByClassName("heading-class");

/*===============================getElementByTagName================================= */

// let Button = document.getElementsByTagName("button");


// /*=============================== Query Selector=============================*/
// let firstEle = document.querySelector("p"); //First element of HTMl 

// /*================================Query SelectorAll ========================== */
// let AllSelect = document.querySelectorAll("h1");

// let h2 = document.querySelector("h2");

// console.dir(h2.innerText);
// h2.innerText = h2.innerText+" from Apna college students";

// let div = document.getElementsByClassName("box");
// div.textContent
// console.log(document); // Logs the entire HTML document
// console.log(document.title); // Gets the page title
// console.log(document.URL); // Gets the current page URL
// let h1 = document.getElementById("heading-id");
// let h2=document.getElementsByClassName("heading-class");
// let h3=document.getElementsByTagName("h1");
// let h4 = document.querySelector("h1");
// let h5 = document.querySelector("#heading-id");


/*===================================innerText==================================== */
// let h6 = document.getElementById("heading-id").innerText="Khrram Khan";
// let h7 = document.getElementById("heading-id").innerHTML="Khrram Khan";



/*=================================access to the Attributes=========================*/ 
// let div = document.querySelector("div");
// console.log(div);

// let classes = div.getAttribute("class");
// console.log(classes);

// let id = div.getAttribute("id");
// console.log(id);
// let name = div.getAttribute("name");
// console.log(name);

// console.log(div.setAttribute("id","box1"));

/*=================================div.style===========================================*/ 

// let div1 = document.querySelector("div");
// div1.style.backgroundColor = "green";

// div1.style.Visibility="hidden";
/*======================= Create a Button with the help of javascript================== */
let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

/*==============================for show int screen =================================== */
let div = document.querySelector("div");
// div.append(newBtn);   //it will see in last of the div inside

// div.prepend(newBtn); //it will show at first on div

div.before(newBtn); // it shows before div and outside the div
div.after(newBtn); // it show after just div and alse outside


let newheading = document.createElement("h1");
newheading.innerHTML = "<i>HI I am Khurram</i>";
document.querySelector("body").prepend(newheading);

/*============================Delete Element =========================================*/
let Rem = document.querySelector("h1");
Rem.remove();

// Questions
 let newButton = document.createElement("button");
 newButton.innerText = "Click me!";
 newButton.style.backgroundColor="red";
 newButton.style.color ="white";
 document.querySelector("body").prepend(newButton);

 let para = document.querySelector("p");