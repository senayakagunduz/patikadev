import axios from "axios";

async function getData(number){
   const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${number}`);
   data.id = number
   
   return data;
    
}
console.log(await getData(1));
export default getData;