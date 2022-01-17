import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Header from "./components/Header"
import Content from "./components/Content"


function Page(){
  return(
    <div>
      <Header />
      <Content />
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById("root"))

