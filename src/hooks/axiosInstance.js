
import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: "http://localhost:3001", // Adjust the port as needed
});

export default axiosInstance;
