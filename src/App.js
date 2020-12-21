import React from "react";
import weather from "./api/weather";
import Searchbar from "./components/Searchbar";
import './App.css';
import sunny1 from "./images/sunny1.jpg"
import sunny from "./images/sunny.jpg"

const backgroundPic = {backgroundImage: `url(${sunny})`}
const backgroundPic1 = {backgroundImage: `url(${sunny1})`}

class App extends React.Component {
  state = { weather:""};
  
  componentDidMount(){
    this.onSubmit("london");
  }
  
  onSubmit = async search=> {
    const response = await weather.get("",{params:{q:search}});
    console.log(response);
    console.log(response.data);
    console.log(response.data.weather)
    console.log(response.data.weather[0].main)
    this.setState({
      weather:response.data.weather[0].main
    });
    console.log(this.state.weather)
  }

  render() {
    return (
      <section className="main">
        <div className="app">
          <div className="left" style={backgroundPic}>
            
          </div>
          <div className="right" style={backgroundPic1}>
            <div className="container">
              <Searchbar onFormSubmit={this.onSubmit}/>
              <h1>{this.state.weather}</h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;