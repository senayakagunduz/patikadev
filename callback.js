// setTimeout(()=>{
//     console.log("merhaba")
// },2000);

// setInterval(()=>{
//     console.log("her saniye çalışıyorum...")
// },1000);
// const merhabaDe =()=>{
//     console.log("merhabalar efendim");
// }
// merhabaDe();
import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data)=>data.json())
// .then(users=>{
//      console.log(users)})

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((data)=>data.json())
// .then(posts=>console.log(posts));

async function getData(){
    const users=await (
        await (fetch("https://jsonplaceholder.typicode.com/users"))
    ).json();
    const post1=await (
        await (fetch("https://jsonplaceholder.typicode.com/posts/1"))
    ) .json();
    
    console.log("users",users);
    console.log("posts1",post1);

    
}
getData();

//ananim fonk şeklinde de çalışabilir
(async()=>{
    const users=await (
        await (fetch("https://jsonplaceholder.typicode.com/users"))
    ).json();
    const post1=await (
        await (fetch("https://jsonplaceholder.typicode.com/posts/1"))
    ) .json();
    
    console.log("users",users);
    console.log("posts1",post1);
})();