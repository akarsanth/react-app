import React, { useState } from "react";

import UpdateInfoForm from "./UpdateInfoForm";
import classes from "./AccountDetails.module.css";

const AccountDetails = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "Aakarshan",
    lastName: "Thapa",
  });

  const updateUserInfo = (newDetails) => {
    setUserDetails(newDetails);
  };

  return (
    <div>
      <div className={classes["account-details"]}>
        <p>
          First Name: <span>{userDetails.firstName}</span>
        </p>

        <p>
          Last Name: <span>{userDetails.lastName}</span>
        </p>
      </div>

      <UpdateInfoForm updateUserInfo={updateUserInfo} />
    </div>
  );
};

export default AccountDetails;
