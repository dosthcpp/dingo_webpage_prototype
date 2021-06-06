import axios from "axios";
// import path from "path";
// import dotenv from "dotenv";

// dotenv.config({ path: path.join(__dirname, "../../.env") });

export const baseURL = "http://72d25fd59709.ngrok.io";

export default axios.create({
  baseURL,
});
