import axios from "axios";


// async function getUser(number){
//    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${number}`);
//    data.id = number
   
//    return data;
    
// }
const getUser=async(_id)=>{
   const {data:user}=await axios(`https://jsonplaceholder.typicode.com/users/${_id}`);
   console.log(user);
}
const getPost=async(_id)=>{
   const {data:post}=await axios(`https://jsonplaceholder.typicode.com/posts?userId=${_id}`);
   console.log(post);
}
// console.log(await getUser(1));
function getData(_id){
   try{
      const user=getUser(_id);
      const post=getPost(_id);
     
   }
   catch(e){
      return e;
   }
}
getData(1);

export default getData;