import React from "react";
import axios from "axios";
import "./App.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import PhotoPage from "./PhotoPage";

function App() {
  axios
    .get(
      "https://api.nasa.gov/planetary/apod?api_key=PB9eVz8CAhDR7abnyyuj5PMz9y6JBzh3YjXmaiW8"
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch( error => {
      console.log(error);
    });

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
      <PhotoPage />
      <Footer />
    </div>
  );
}

export default App;
