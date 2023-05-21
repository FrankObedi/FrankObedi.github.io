// import { useRef } from "react";
export default function PortfolioUIDesigns() {
  return (
    <div className="portfolio-ui-elements">
      <div className="cut-edges">
        <div className="top-edges">
          <div className="left-edge"></div>
          <div className="right-edge"></div>
          <div className="top-edge"></div>
        </div>
        <div className="bottom-edges">
          <div className="left-edge"></div>
          <div className="right-edge"></div>
          <div className="bottom-edge"></div>
        </div>
      </div>
      <div className="top-bottom-borders"></div>
      <div className="side-bars">
        <div className="side-bar left-bar">
          <div className="parallels parallels-t">
            <div className="parallel"></div>
            <div className="parallel"></div>
          </div>
          <div className="mid-bar"></div>
          <div className="parallels parallels-b">
            <div className="parallel"></div>
            <div className="parallel"></div>
          </div>
        </div>
        <div className="side-bar right-bar">
          <div className="parallels parallels-t">
            <div className="parallel"></div>
            <div className="parallel"></div>
          </div>
          <div className="mid-bar"></div>
          <div className="parallels parallels-b">
            <div className="parallel"></div>
            <div className="parallel"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
