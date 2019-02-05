import React from "react";
import ReactDom from "react-dom";
//import Footer from './footer.js'
//import Main from './main'
import App from "./app";

function MyApp() {
  return (
    <div>
      <App />
    </div>
  );
}

ReactDom.render(<MyApp />, document.getElementById("root"));
