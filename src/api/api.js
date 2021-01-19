import axios from "axios";

const options = {
  baseURL: "http://api.openweathermap.org",
};
export default axios.create(options);
