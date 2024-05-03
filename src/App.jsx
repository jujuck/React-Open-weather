import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("s");

  console.log(city);
  return (
    <main className="container">
      <h1>Mon application météo</h1>
      <section>
        <label htmlFor="">
          Entrez votre ville
          <input
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </label>
        <a href={`/${city}`}>Allez voir la météo de la ville de {city}</a>
      </section>
    </main>
  );
}

export default App;
