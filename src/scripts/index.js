import "../styles/index.scss";

import $ from "jquery";
  import "./script.js";

if (process.env.NODE_ENV === "development") {
  require("../index.html");
  // require("html-loader?interpolate!../index.html");
}
