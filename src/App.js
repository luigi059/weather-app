import React from "react";
import './App.css';
import sunny1 from "./images/sunny1.jpg"
import sunny from "./images/sunny.jpg"

const backgroundPic = {backgroundImage: `url(${sunny})`}
const backgroundPic1 = {backgroundImage: `url(${sunny1})`}

class App extends React.Component {
  render() {
    return (
      <section className="main">
        <div className="app">
          <div className="left" style={backgroundPic}>

          </div>
          <div className="right" style={backgroundPic1}>
            <div className="container">
              
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;