import React from "react";
import weather from "./api/weather";
import MainData from "./components/MainData";
import SubData from "./components/SubData";
import Searchbar from "./components/SearchBar";
import Location from "./components/Locations";
import './App.css';
import sunny1 from "./images/sunny1.jpg"
import sunny from "./images/sunny.jpg"

const backgroundPic = {backgroundImage: `url(${sunny})`}
const backgroundPic1 = {backgroundImage: `url(${sunny1})`}

class App extends React.Component {
  state={temp:"",tempMin:"",tempMax:"",city:"",weather:"",wind:"",humidity:"",search:""}
  //default query parameter
  componentDidMount(){  
    this.onSubmit("london");
  }
  //ajax call
  onSubmit = async (search)=> {
    console.log("im called")
      const response = await weather.get("",{params:{q:search}});
      //fetching data from ajax call
      this.setState({
        temp:response.data.main.temp,
        tempMin:response.data.main.temp_min,
        tempMax:response.data.main.temp_max,
        city:response.data.name,
        weather:response.data.weather[0].main,
        wind:response.data.wind.speed,
        humidity:response.data.main.humidity});
    }
  render() {
    return (
      <section className="main">
        <div className="app">
          <div className="left" style={backgroundPic}>
            <MainData 
            temp={this.state.temp}
            weather={this.state.weather}
            city={this.state.city}
            />
          </div>
          <div className="right" style={backgroundPic1}>
            <div className="right-container">
              <Searchbar onFormSubmit={this.onSubmit}/>
              <Location onClick={this.onSubmit}/>
              <SubData 
              tempMin={this.state.tempMin}
              tempMax={this.state.tempMax}
              wind={this.state.wind}
              humidity={this.state.humidity}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default App;