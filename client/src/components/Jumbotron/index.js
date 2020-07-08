import React from "react";
import "./style.css";
// import { Background } from '../../../public/books.jpg';

const Jumbotron = () => {
  return (
    <div className="jumbotron text-center" id='jumbotron-image'>
      <h1><i className="fab fa-react" id='react-icon'></i><span> </span><span id='g1'>G</span><span id='o1'>o</span><span id='o2'>o</span><span id='g2'>g</span><span id='l'>l</span><span id='e'>e</span><span> </span>
        <span id='booksjumbo'>Books</span><span> </span>
        <span id='searchjumbo'>Search</span></h1>
    </div>
  );
};

export default Jumbotron;