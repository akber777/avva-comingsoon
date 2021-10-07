import axios from "axios";
import { baseUrl } from "../services/api";

export const date = async (key) => {
  const res = await axios.get(baseUrl + "date.php");
  return res.data;
};
