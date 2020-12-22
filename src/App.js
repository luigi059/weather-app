import React from "react";
import weather from "./api/weather";
import Searchbar from "./components/Searchbar";
import './App.css';
import sunny1 from "./images/sunny1.jpg"
import sunny from "./images/sunny.jpg"

const backgroundPic = {backgroundImage: `url(${sunny})`}
const backgroundPic1 = {backgroundImage: `url(${sunny1})`}

class App extends React.Component {
  state = { temp:"",city:"",weather:"",tempMin:"",tempMax:"",humidity:"",wind:""};
  
  //default query parameter
  componentDidMount(){  
    this.onSubmit("london");
  }
  
  //ajax call
  onSubmit = async search=> {
    const response = await weather.get("",{params:{q:search}});

    //fetching data from ajax call
    this.setState({
      temp:response.data.main.temp,
      tempMin:response.data.main.temp_min,
      tempMax:response.data.main.temp_max,
      city:response.data.name,
      weather:response.data.weather[0].main,
      wind:response.data.wind.speed,
      humidity:response.data.main.humidity
    });

  }

  render() {
    return (
      <section className="main">
        <div className="app">
          <div className="left" style={backgroundPic}>
            <div className="left-container">
              <span>{this.state.temp}&#8451;</span>
              <span>{this.state.weather}</span>
              <span>{this.state.city}</span>
            </div>
          </div>
          <div className="right" style={backgroundPic1}>
            <div className="right-container">
              <Searchbar onFormSubmit={this.onSubmit}/>
              <div className="details">
                <h1>Weather Details</h1>
                <span>{this.state.tempMin}&#8451;</span>
                <span>{this.state.tempMax}&#8451;</span>
                <span>{this.state.wind} km/h</span>
                <span>{this.state.humidity}%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;