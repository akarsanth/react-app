import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import classes from "./ProfileDashboard.module.css";

const locationList = {
  dashboard: {
    index: 0,
    text: "Dashboard",
  },

  address: {
    index: 1,
    text: "Address",
  },

  account: {
    index: 2,
    text: "Account Details",
  },
};

const ProfileDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedPath, setSelectedPath] = useState("Dashboard");
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const path = location.pathname.split("/")[2];

    if (path) {
      setSelectedPath(locationList[path].text);
      setSelectedIndex(locationList[path].index);
    } else {
      navigate("/profile/dashboard");
    }
  }, [location.pathname, navigate]);

  return (
    <div className={classes.profile}>
      <div className={classes.heading}>
        <h2>Profile: {selectedPath}</h2>
      </div>
      <div className={classes["profile-box"]}>
        <div className={classes.navigation}>
          <ul>
            <li className={selectedIndex === 0 ? classes.selected : ""}>
              <Link to="/profile/dashboard">Dashboard</Link>
            </li>

            <li className={selectedIndex === 1 ? classes.selected : ""}>
              <Link to="/profile/address">Address</Link>
            </li>

            <li className={selectedIndex === 2 ? classes.selected : ""}>
              <Link to="/profile/account">Account Details</Link>
            </li>
          </ul>
        </div>
        <div className={classes.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
