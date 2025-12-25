import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTopOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    const scroller = document.scrollingElement || document.documentElement || document.body;
    if (scroller && scroller.scrollTo) {
      scroller.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.search, location.hash]);

  return null;
}
