import { useState } from "react";
import "./App.css";
import { puppyList } from "./data";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  return (
    <div className="App">
      <h1>Puppy Pals</h1>
      {puppies.map((puppy) => {
        return <p onClick={() => setFeatPupId(puppy.id)}
        key={puppy.id}>{puppy.name}</p>;
      })}
        { featPupId && (
        <div className="featured-pup">
          <h2>{ featuredPup.name }</h2>
          <ul>
            <li>Age: { featuredPup.age }</li>
            <li>{ featuredPup.email }</li>
          </ul>
        </div> )}
       
    </div>
  );
}

export default App;
