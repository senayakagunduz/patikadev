import axios from "axios";

const getUser = (_id)=>{
    return new Promise (async(resolve,reject)=>{
        const {data:user}=await axios(`https://jsonplaceholder.typicode.com/users/${_id}`);
        resolve(user);
    })

} 
const getPost = (_id)=>{
    return new Promise(async(resolve,reject)=>{
        const {data:post}=await axios(`https://jsonplaceholder.typicode.com/posts?userId=${_id}`);
        resolve(post);
    })
    
}
async function getData(_id){
    try{
        const user=getUser(_id);
        const post=getPost(_id);

        const arr=[user,post];
        return arr;
    }catch(e){
        console.log(e);
    }
}

export default getData;