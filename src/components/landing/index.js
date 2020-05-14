import React, { Component } from "react";

class LandingComponent extends Component {

  componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://widgets.ziftsolutions.com/cisco.ziftsolutions.com/js/8a99830e720c901c01720edde7e471d7";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return (
      <div>
        <div class='zift_plugin' id='8a99830e720c901c01720edde7e471d7'></div>
      </div>
    );
  }
}
export default LandingComponent;