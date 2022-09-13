import React from "react";

import classes from "./Address.module.css";

const Address = () => {
  return (
    <div className={classes["address-content"]}>
      <p>
        City: <span>Pokhara</span>
      </p>

      <p>
        Postal Code: <span>Pokhara</span>
      </p>

      <p>
        Province: <span>Gandaki</span>
      </p>

      <p>
        Street Address: <span>Ranipauwa</span>
      </p>
    </div>
  );
};

export default Address;
