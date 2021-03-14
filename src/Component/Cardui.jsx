import React from "react";
import { Component } from "react";
import img from "../card.webp";
import "./Cardstyle.css";
import ReactDom from "react-dom";
import SendIcon from '@material-ui/icons/Send';

const Cardui = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow mb-3 mt-3">
        <img  className="card-img-top" src={props.imgsrc} alt="" srcset="" />
      </div>
      <div className="card-body text-dark">
    <h4 className="card-title">Card title</h4>
    <p className="card-text text-secondary">
        Lorem gobi ipsum Lorem gobi ipsum Lorem gobi ipsum Lorem gobi ipsum Lorem gobi ipsumLorem gobi ipsum
    </p>
      </div>
      <a href="" className="gobi__ btn1 ml-2 mr-2 mb-4">Go somwhere <SendIcon /></a>
    </div>
  );
};
export default Cardui;
