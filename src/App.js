import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header.js";
import Footer from "./Footer.js";
import PhotoPage from "./PhotoPage";

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
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p> */}
      <Header />
      <PhotoPage title={data.title} hdurl={data.hdurl} />
      <Footer />
    </div>
  );
}

export default App;
