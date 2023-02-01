import React from "react";

//----------------------------------------
const Title = ({ title, subTitle }) => {
  return (
    <React.Fragment>
      <div className="section-title">
        <h2>
          {title} <span>{subTitle}</span>
        </h2>
      </div>
    </React.Fragment>
  );
};

export default Title;
