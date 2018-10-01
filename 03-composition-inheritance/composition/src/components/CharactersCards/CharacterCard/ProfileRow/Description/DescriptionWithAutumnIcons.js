import React from "react";
import Description from "./Description";
import autumnIcons from "../../../../shared/autumnIcons";

function DescriptionWithAutumnIcons({ name, gender, species }) {
  return (
    <Description name={name} gender={gender} species={species}>
      {autumnIcons}
    </Description>
  );
}

export default DescriptionWithAutumnIcons;
