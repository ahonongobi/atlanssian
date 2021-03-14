import { ImageSearch } from "@material-ui/icons";
import React from "react";
import ReactDom from "react-dom";
import { Component } from "react";
import img from "../dash.png";
import img2 from "../dash2.png";
import img3 from "../dash2.png";

//padg of image that display the dashboard of img. im gobi a full stack pro dev
class Mainpartzero extends React.Component {
    //the constructuctor 
  constructor(props) {
    super(props);
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      images: [img, img2, img3],
    };
  }

  //switching function to slide auto the image
  switchImage() {
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1,
      });
    } else {
      this.setState({
        currentImage: 0,
      });
    }
    return this.currentImage;
  }
  //here is the component that moint our image every 2 second
  componentDidMount() {
    setInterval(this.switchImage, 2000);
  }
  //this render to screen the output of this component
  render() {
    return (
      <div className="container  ml-5 mb-4">
        <div className="row">
          <div className="col-md-5">
            <h1 className="hero__headline">Where Work Happens</h1>
            <p className="hero__copy copy">
              When your team needs to kick off a project, hire a new employee,
              deploy some code, review a sales contract, finalize next year's
              budget, measure an A/B test, plan your next office opening, and
              more, Slack has you covered.
            </p>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-5">
            <img
              height="500"
              src={this.state.images[this.state.currentImage]}
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    );
  }
}
//to export defaut class to use in another component
export default Mainpartzero;
