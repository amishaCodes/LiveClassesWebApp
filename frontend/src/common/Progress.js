import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Progress() {
  return (
    <div className="container">
    <div className="row p-2 card border-info shadow-sm">
    <div className="col-md-2 ">
    <b>1000+</b>
    </div>
    <div className="col-md-5">
    Total Questions Practiced
    </div>
    </div>
    <div className="row p-2 mb-2 mt-3 card border-info shadow-sm">
    <div className="col-md-2 ">
    <b>1000+</b>
    </div>
    <div className="col-md-5">
    Total Time Spent
( In Minutes)
    </div>
    </div>
    <div className="row p-2 mb-2 mt-3 card border-info shadow-sm">
    <div className="col-md-2 ">
    <b>1000+</b>
    </div>
    <div className="col-md-5">
    Total Chapters Covered
    </div>
    </div>
    </div>
  );
}

export default Progress;
