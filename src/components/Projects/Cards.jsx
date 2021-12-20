import React, { Component } from "react";
import Card from "./CardUI";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md4">
            <Card imgsrc={img1} title="Test #1" />
          </div>
          <div className="col-md4">
            <Card imgsrc={img2} title="Test #2" />
          </div>
          <div className="col-md4">
            <Card imgsrc={img3} title="Test #3" />
          </div>
          <div className="col-md4">
            <Card imgsrc={img4} title="Test #4" />
          </div>
          <div className="col-md4">
            <Card imgsrc={img5} title="Test #5" />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
