import axios from "axios";
import opts from "./opts";

axios.defaults.baseURL = "https://api.unsplash.com/";

const fetchImages = async (query, page, per_page) => {
  const url = `/search/photos/?client_id=${opts.ACC_KEY}&query=${query}&page=${page}&per_page=${per_page}`;
  const response = await axios.get(url);
  return response.data;
};
export { fetchImages };
