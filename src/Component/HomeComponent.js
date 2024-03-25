import React, { useState } from "react";
import { Link } from "react-router-dom";

import FristComponent from "./HomePage/FristComponent";
import SecondComponent from "./HomePage/SecondComponent";
import CarouselComponent from "./HomePage/CarouselComponent";
import BangladeshComponent from "./HomePage/BangladeshComponent";
import SpecialCapital from "./HomePage/SpecialCapital";
import PComponent from "./HomePage/ProgramComponent";
import KidsComponent from "./HomePage/KidsComponent";

const HomeComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div style={{ paddingTop: "1%", marginBottom: "2%" }}>
      <FristComponent />

      <div>
        <div>
          <p>ট্রেন্ডিং :</p>
          <Link
            // to={`/newsApp/singlePage/${item.id}`}
            to={`/newsApp/singlePage`}
            style={{ textDecoration: "none", color: "#212529" }}
          >
            <button
              style={{
                backgroundColor: activeTab === 1 ? "blue" : "grey",
                color: "white",
              }}
              onClick={() => handleTabClick(1)}
            >
              ডেঙ্গু
            </button>
          </Link>
          <Link
            // to={`/newsApp/singlePage/${item.id}`}
            to={`/newsApp/singlePage`}
            style={{ textDecoration: "none", color: "#212529" }}
          >
            <button
              style={{
                backgroundColor: activeTab === 2 ? "blue" : "grey",
                color: "white",
              }}
              onClick={() => handleTabClick(2)}
            >
              আবহাওয়ার খবর
            </button>
          </Link>
          <Link
            // to={`/newsApp/singlePage/${item.id}`}
            to={`/newsApp/singlePage`}
            style={{ textDecoration: "none", color: "#212529" }}
          >
            <button
              style={{
                backgroundColor: activeTab === 3 ? "blue" : "grey",
                color: "white",
              }}
              onClick={() => handleTabClick(3)}
            >
              পুঁজিবাজার
            </button>
          </Link>
        </div>
        <div>
          {activeTab === 1 && <div>-1</div>}
          {activeTab === 2 && <div>Content for Tab 2</div>}
          {activeTab === 3 && <div>Content for Tab 3</div>}
        </div>
      </div>

      <SecondComponent />

      <CarouselComponent />

      <BangladeshComponent />
      <SpecialCapital />

      <PComponent />
      <KidsComponent />
    </div>
  );
};

export default HomeComponent;
