// =========================== synchronous ===================================
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");

//=================================Asynchoronus===========================
// console.log("1");
// function hello(){
//     console.log("Hello world");
// }
// setTimeout(hello,2000);   // 2sec ->2000


// setTimeout(function khan(){
//     console.log("khurram");
// },2000);
// console.log("2");


//  ================================= CallBack function ===================
// function sum(a,b){
//     console.log(a+b);
// }

// function callbacksum(a,b,sumcallback){
//     sumcallback(a,b);
// }

// callbacksum(1,2,sum);

// ================================ callbackhell function ===========================
function getData(dataId,getDataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("data is: ",dataId);
        resolve("Succes");
        if(getDataid){
            getDataid();
        }
    },3000)
});
} 

// async awit Method
async function getAlldata(){
    await getData(1);
    await getData(2);
    await getData(3);

}
//automatically Invoked the function
(async function (){
    await getData(1);
    await getData(2);
    await getData(3);

})();

// // callback function
// getData(1,() =>{
//     getData(2,() =>{
//             getData(3,()=>{
//                 getData(4)
//             })
//         })
// })

//Promise Chaining
// getData(1).then((res)=>{
//     console.log("res");
//     getData(2).then((res)=>{
//         console.log(res);
//     });
// })


//actual Promises
// getData(1).then((res)=>{
//     return getData(2);
// })
// .then((res)=>{
//     return getData(3);
// })
// .then((res)=>{
//     console.log(res);
// })






// ===========================Promises======================================
// let promise = new Promise((resole,reject) =>{
//     console.log('I am Khurram');
//     // resole(123);
//     reject("some error occured");
// })



// function getData(dataId,getDataid){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("data is: ",dataId);
//             // resolve("Success");
//             reject("error is occur");
//             if(getDataid){
//                 getDataid();
//             }
//         },5000);
    
//     })
// }

//=========================== Promise chaining ===============================
// const getpromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am Promise");
//         resolve("Success");
//         // reject("error is occured");
//     });
// };

// let promise = getpromise();
// promise.then((res)=>{
//     console.log("After promise fulfilled",res);
// })

// promise.catch((err)=>{
//     console.log("Reject the promise ",err );
// })


// function asyncfunction1(){
//     return new Promise((resolve,rejet) =>{
//         setTimeout(()=>{
//             console.log("some data1");
//             resolve("success");
//         },3000);
//     })
// }

// function asyncfunction2(){
//     return new Promise((resolve,rejet) =>{
//         setTimeout(()=>{
//             console.log("some data2");
//             resolve("success");
//         },3000);
//     })
// }
// console.log("Data1 is Fetching1.......");
// let p1 = asyncfunction1();
// p1.then((res)=>{
//     console.log(res);
// })
// console.log("Data1 is Fetching2.......");
// let p2 = asyncfunction2();
// p2.then((res)=>{
//     console.log(res);
// })


// ====== promise Chaining
// console.log("Data1 is Fetching1.......");
// let p1 = asyncfunction1();
// p1.then((res)=>{
//     console.log("Data2 is fetching.......");
//     let p2 = asyncfunction2();
//     p2.then(()=>{
//     })
// })

//======================async-await function =============================

// async function Hello(){
//   console.log("Hello Khurram");
// }

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         console.log("APi is Fetch");
         resolve("Success");
        },2000) ;
    })
}

async function getWeatherApi(){
    await api();
    await api();
}