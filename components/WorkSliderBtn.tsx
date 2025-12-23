"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface WorkSliderBtnProps {
  containerStyles?: string;
  btnStyles?: string;
  iconsStyles?: string;
}

const WorkSliderBtn: React.FC<WorkSliderBtnProps> = ({
  containerStyles = "",
  btnStyles = "",
  iconsStyles = "",
}) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button
        type="button"
        className={btnStyles}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>

      <button
        type="button"
        className={btnStyles}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtn;
