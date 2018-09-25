import React, { Component } from "react";
import Description from "./Description";

function DescriptionWithIcon(props) {
  return (
    <Description {...props}>
        <span role="img" aria-label="Umbrella with rain drops">
          &#9748;
        </span>
    </Description>
  );
}

export default DescriptionWithIcon;
