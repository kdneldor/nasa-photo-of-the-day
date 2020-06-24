import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import NasaHeader from "./NasaHeader";
import NasaPhoto from "./NasaPhoto";
import NasaFooter from "./NasaFooter";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=PB9eVz8CAhDR7abnyyuj5PMz9y6JBzh3YjXmaiW8"
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <NasaHeader />
      <NasaPhoto title={data.title} hdurl={data.hdurl}/>
      <NasaFooter />
    </div>
  );
}

export default App;
