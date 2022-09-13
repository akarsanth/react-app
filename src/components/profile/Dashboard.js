import React from "react";

import classes from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={classes["dashboard-content"]}>
      <h2>Hello User!</h2>
      <p>From this profile page you can view your address.</p>
    </div>
  );
};

export default Dashboard;
