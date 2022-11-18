import Header from "./header.js";
import User from "./components/User.js";
import Players from "./components/Players.js";
import { useState } from "react";
// const name = "senay";
// const lastname = "akagunduz";
// const isLogged = true;
const friends = [
  {
    id: 1,
    name: "Ahmet"
  },
  {
    id: 2,
    name: "Tayfun"
  }
]
function App() {
  const [name, setName] = useState("Şenay");
  const [age, setAge] = useState("23");
  const [friends, setFriend] = useState(["Beyza", "Ayşe", "Yusuf"]);
  const [address, setAddress] = useState({ title: "Istanbul", zip: 11002 });
  return (
    <div className="App">
      <h1>Merhaba {name} {age}</h1>
      <button onClick={() => setName("Ahmet")}>Change name</button>
      <button onClick={() => setAge("15")}>Change age</button>
      <hr />
      <br></br>
      <h2>Friends</h2>
      {
        friends.map((friend, index) => (<div key={index}>{friend}</div>))
      }
      <hr />
      <br></br>
      <button onClick={() => setFriend([...friends, "Serkan"])}>Change friend</button>

      <User name={"Şenay"} lastname="Akagunduz" isLoggedIn={true} age={"23"} friends={friends}
        address={{ title: 'Kartal/Soğanlık', zip: 220 }} />
      <hr />
      <br></br>
      <Players name={"Serkan"} id={1} game={"Roblox"} coins={300} isLoggeddIn={true} />
      <hr />
      <br></br>
      <h2>Address</h2>
      <div>{address.title} {address.zip}</div>
      <br/>
      <button onClick={()=>setAddress({title:"Ankara", zip:44444})}>Adresi değiştir</button>
    </div>

  );
}

export default App;
