import axios from "axios";

const options = {
  baseURL: "https://api.openweathermap.org",
};
export default axios.create(options);
