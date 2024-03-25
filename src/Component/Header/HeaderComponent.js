import dmcalogo from "../../Images/Logo/dmca.png";
import appleLogo from "../../Images/Logo/apple.png";
import googleplay from "../../Images/Logo/google-play.png";
const HeaderComponent = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "250px",
          backgroundColor: "#03246B",
          textAlign: "center", // Center aligning the content
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4 style={{ color: "#fff" }} className="SolaimanLipi">
          ভারপ্রাপ্ত সম্পাদক: ......................
        </h4>
        <h4 style={{ color: "#fff" }} className="SolaimanLipi">
          ভারপ্রাপ্ত সম্পাদক: .....................
        </h4>
      </div>

      <div
        style={{
          width: "100%",
          height: "250px",
          backgroundColor: "#fff",
          textAlign: "center", // Center aligning the content
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4 style={{ color: "#000" }} className="SolaimanLipi">
          ©......................................
        </h4>
        <h5 style={{ color: "#000" }} className="SolaimanLipi">
          ........................................
        </h5>
        <h5 style={{ color: "#000" }} className="SolaimanLipi">
          {" "}
          +৮৮ 01010010101
        </h5>
        <div>
          <img src={dmcalogo} style={{ width: "20%" }} />
          <img
            src={appleLogo}
            style={{ width: "15%", height: "70%", marginLeft: "1%" }}
          />
          <img
            src={googleplay}
            style={{ width: "15%", height: "70%", marginLeft: "1%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
