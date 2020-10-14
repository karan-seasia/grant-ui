import React from "react";
import "../../../style/loader.scss";

import part1 from '../../../assets/images/Loader/logo-part-1.svg';
import part2 from '../../../assets/images/Loader/logo-part-2.svg';
import part3 from '../../../assets/images/Loader/logo-part-3.svg';
import part4 from '../../../assets/images/Loader/logo-part-4.svg';

const AnimationLoader = ({ small }) => {
  return (
    <div className={small ? "logoWrapper smallWrapper" : "logoWrapper"}>
      <img src={part1} alt="part1" className={small ? "part part1 small" : "part part1"} />
      <img src={part2} alt="part2" className={small ? "part part2 small" : "part part2"} />
      <img src={part3} alt="part3" className={small ? "part part3 small" : "part part3"} />
      <img src={part4} alt="part4" className={small ? "part part4 small" : "part part4"} />
      <span>Accelerating to top speed....</span>
    </div>
  )
}

export default AnimationLoader;
