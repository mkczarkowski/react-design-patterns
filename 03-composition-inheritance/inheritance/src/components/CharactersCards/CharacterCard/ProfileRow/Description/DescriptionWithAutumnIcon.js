import React from "react";
import Description from "./Description";
import autumnIcons from "../../../../../shared/autumnIcons";

class DescriptionWithAutumnIcon extends Description {
  render() {
    return super.render(autumnIcons);
  }
}

export default DescriptionWithAutumnIcon;
