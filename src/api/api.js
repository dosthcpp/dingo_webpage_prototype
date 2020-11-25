import axios from "axios";
// import path from "path";
// import dotenv from "dotenv";

// dotenv.config({ path: path.join(__dirname, "../../.env") });

export const baseURL = "http://2f21dbc1bff8.ngrok.io";

export default axios.create({
  baseURL,
});
