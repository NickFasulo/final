import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    animals: []
  };

  componentDidMount() {
    axios.get("http://localhost3001/api");
  }

  render() {
    return (
      <div className="App">
        <h1>Create Animal</h1>
        <form>
          <input type="text" name="name" placeholder="Enter animal name" />
          <input type="text" name="type" placeholder="Enter animal type" />
          <input className="button" type="submit" value="submit" />
        </form>
        <div className="container"></div>
      </div>
    );
  }
}

export default App;
