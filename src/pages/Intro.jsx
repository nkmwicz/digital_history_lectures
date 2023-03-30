import { QuickLayoutNoArrows } from "@nkmwicz/reactpresentation";
import { useRecoilState, useRecoilValue } from "recoil";
import { slideState } from "../components/globalState";

export function Intro() {
  const [slides, setSlides] = useRecoilState(slideState);
  const slide = useRecoilValue(currentSlide);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/wk01.1.json"
      );
      const data = await response.json();
      setSlides(data);
    }
  }, []);

  return <QuickLayoutNoArrows slide={slide} />;
}
