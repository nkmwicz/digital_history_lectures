import React from "react";
import { Arrows } from "@nkmwicz/reactpresentation";
import { useRecoilValue } from "recoil";
import { slideIndex, slideState } from "./globalState";

export function Arrows() {
  const slides = useRecoilValue(slideState);
  const [slideIndex, setSlideIndex] = useRecoilState(slideIndex);

  function nextSlide(e) {
    if (e && slideIndex < slideState.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
    if (e && slideIndex === slideState.length - 1) {
      setSlideIndex(0);
    }
  }

  function prevSlide(e) {
    if (e && slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
    if (e && slideIndex === 0) {
      setSlideIndex(slideState.length - 1);
    }
  }

  return <Arrows handleNextClick={nextSlide} handlePrevClick={prevSlide} />;
}
