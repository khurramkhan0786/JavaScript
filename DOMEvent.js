let btn1 = document.querySelector("#btn1");
// btn1.onclick =() =>{
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }
// btn1.onclick = (evt) =>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// }

// => Only work in second code override
// btn1.onclick =() =>{
//     console.log("Handler 1");
//     let a = 25;
//     a++;
//     console.log(a);
// }

// let div = document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("this div tag");
// }

// => Html handler event is not work instead of JavaScript handler work




/*===================================Event Listner =================================== */
// btn1.addEventListener("click",()=>{
//     console.log("Button1 was Clicked-handler1");
// })
// btn1.addEventListener("click",()=>{
//     console.log("Button1 was Clicked-handler2");
// })
// const handler3 = ()=>{
//     console.log("Button was clicked-handler3");
// }
// btn1.addEventListener("click",handler3);
// btn1.addEventListener("click",()=>{
//     console.log("Button1 was Clicked-handler4");
// })
// btn1.removeEventListener("click",handler3);

// let currMode = "light";
// btn1.addEventListener("click",()=>{
//     if(currMode ==="light"){
//         currMode="dark";
//     document.querySelector("body").style.backgroundColor= "black";
//     }else {
//         currMode="light";
//     document.querySelector("body").style.backgroundColor= "white";
//     }
// })

// => H W to mouse Hover
let div = document.querySelector("div");
let divdoc = document.querySelector("body");
let currmode = "light";
div.addEventListener("mouseover",()=>{
    if(currmode ==="light"){
        currmode="dark";
  divdoc.classList.add("black");
  divdoc.classList.remove("white");
    }else{
        currmode="light";
  divdoc.classList.add("white");
  divdoc.classList.remove("black");
    }
    console.log(currmode);
})