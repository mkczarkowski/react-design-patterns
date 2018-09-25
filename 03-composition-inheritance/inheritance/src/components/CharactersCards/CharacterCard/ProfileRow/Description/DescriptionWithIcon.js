import React from 'react';
import Description from './Description';

class DescriptionWithIcon extends Description {
  render() {
    return super.render(
      <span role="img" aria-label="Umbrella with rain drops">
        &#9748;
      </span>,
    );
  }
}

export default DescriptionWithIcon;
