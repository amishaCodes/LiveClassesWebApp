import { Typography } from "@material-ui/core";
import Sidebar from "../drawer/Sidebar";
import Progress from "../../common/Progress";
import React from "react";
function Activity() {
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="">
          <Progress />
          </div>
        </div>
        <div className="col-md-5 card shadow">
          <Typography className="h1">Activity</Typography>
          <Typography className="">In Last Week</Typography>
          <Progress />
        </div>
      </div>
    </div>
  );
}

export default Activity;
