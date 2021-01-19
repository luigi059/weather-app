import React from "react";
import API from "./api/api";
import MainData from "./components/MainData";
import SubData from "./components/SubData";
import Searchbar from "./components/SearchBar";
import Location from "./components/Locations";
import "./App.css";
import side from "./images/side.jpg";
import sunny from "./images/sunny.jpg";

const backgroundPic = { backgroundImage: `url(${sunny})` };
const backgroundPic1 = { backgroundImage: `url(${side})` };

class App extends React.Component {
  state = {
    temp: "w",
    tempMin: "",
    tempMax: "",
    city: "w",
    weather: "w",
    wind: "",
    humidity: "",
    search: "",
  };
  //default query parameter
  componentDidMount() {
    this.onSubmit("london");
  }
  //ajax call
  onSubmit = async (search) => {
    console.log("im called");
    const response = await API.get("/data/2.5/weather?", {
      params: {
        q: search,
        units: "metric",
        APPID: "386391286837045622a26eff0fb80b93",
      },
    });
    //fetching data from ajax call
    this.setState({
      temp: response.data.main.temp,
      tempMin: response.data.main.temp_min,
      tempMax: response.data.main.temp_max,
      city: response.data.name,
      weather: response.data.weather[0].main,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  };
  render() {
    return (
      <section className="main">
        <div className="app">
          <div className="left" style={backgroundPic}>
            <h1 className="title">the.weather</h1>
            <MainData
              temp={this.state.temp}
              city={this.state.city}
              weather={this.state.weather}
            />
          </div>
          <div className="right" style={backgroundPic1}>
            <div className="right-container">
              <Searchbar onFormSubmit={this.onSubmit} />
              <hr className="search-line"></hr>
              <Location onClick={this.onSubmit} />
              <hr></hr>
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
