import axios from "axios";
// (async()=>{
//     const {data:users}=await axios("https://jsonplaceholder.typicode.com/users")
//     const {data:post1}=await axios("https://jsonplaceholder.typicode.com/posts/1")
    
//     console.log("users",users);
//     console.log("posts1",post1);
// })();

const getComments=(number)=>{
    return new Promise(async(resolve,reject)=>{
        const {data} = await axios("https://jsonplaceholder.typicode.com/users")
        resolve(data);
    })
}
getComments(1)
.then((data)=>console.log(data))
.catch((e)=>console.log(e))