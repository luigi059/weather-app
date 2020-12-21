import axios from "axios";

const options = {
    baseURL: 'https://community-open-weather-map.p.rapidapi.com/weather',
    params: {
        units: 'metric',
    },
    headers: {
        'x-rapidapi-key': '54cc4e07fcmsh3d78b5daa1093ebp16efe5jsn63124395af6f',
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
    }
};
export default axios.create(options);