import { atom, selector } from "recoil";

export const slideState = atom({
  key: "slideState",
  default: [],
});

export const slideIndex = atom({
  key: "slideIndex",
  default: 0,
});

export const currentSlide = selector({
  key: "currentSlide",
  get: ({ get }) => {
    const slides = get(slideState);
    const index = get(slideIndex);
    return slides[index];
  },
});
