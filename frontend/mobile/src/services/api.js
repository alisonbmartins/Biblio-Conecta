import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Para emulador Android use 10.0.2.2, para iOS simulator use localhost, para dispositivo físico use IP da máquina dev
const API_BASE = "http://10.0.2.2:3000";
const api = axios.create({ baseURL: API_BASE });
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
export default api;
