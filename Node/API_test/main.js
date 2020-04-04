// Import Module
import { get } from "./api.js";

// main
const users = ["chalkers", "alenaholligan"];
users.forEach((u) => {
  get(u);
});
