import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../../Images/Logo/Logo1.png";
import { Image } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../../index.css";

const BangladeshComponent = () => {
  const Fristtitle1 = [
    {
      id: 1,
      title: "অবন্তিকার মৃত্যুতে দ্বীন ইসলামের সংশ্লিষ্টতা নিয়ে তথ্য চায় কমিটি",
      desc: "জগন্নাথ বিশ্ববিদ্যালয়ের (জবি) শিক্ষার্থী ফাইরুজ সাদাফ অবন্তিকার মৃত্যুর ঘটনায় প্ররোচনায় অভিযুক্ত শিক্ষক ও সাবেক সহকারী প্রক্টর দ্বীন ইসলামের সংশ্লিষ্টতার…",
      image: require("../../Images/Logo/Logo1.png"),
    },
    {
      id: 2,
      title: "অবন্তিকার মৃত্যুতে দ্বীন ইসলামের সংশ্লিষ্টতা নিয়ে তথ্য চায় কমিটি",
      desc: "জগন্নাথ বিশ্ববিদ্যালয়ের (জবি) শিক্ষার্থী ফাইরুজ সাদাফ অবন্তিকার মৃত্যুর ঘটনায় প্ররোচনায় অভিযুক্ত শিক্ষক ও সাবেক সহকারী প্রক্টর দ্বীন ইসলামের সংশ্লিষ্টতার…",
      image: require("../../Images/Logo/Logo1.png"),
    },
    {
      id: 3,
      title: "অবন্তিকার মৃত্যুতে দ্বীন ইসলামের সংশ্লিষ্টতা নিয়ে তথ্য চায় কমিটি",
      desc: "জগন্নাথ বিশ্ববিদ্যালয়ের (জবি) শিক্ষার্থী ফাইরুজ সাদাফ অবন্তিকার মৃত্যুর ঘটনায় প্ররোচনায় অভিযুক্ত শিক্ষক ও সাবেক সহকারী প্রক্টর দ্বীন ইসলামের সংশ্লিষ্টতার…",
      image: require("../../Images/Logo/Logo1.png"),
    },
    {
      id: 4,
      title: "অবন্তিকার মৃত্যুতে দ্বীন ইসলামের সংশ্লিষ্টতা নিয়ে তথ্য চায় কমিটি",
      desc: "জগন্নাথ বিশ্ববিদ্যালয়ের (জবি) শিক্ষার্থী ফাইরুজ সাদাফ অবন্তিকার মৃত্যুর ঘটনায় প্ররোচনায় অভিযুক্ত শিক্ষক ও সাবেক সহকারী প্রক্টর দ্বীন ইসলামের সংশ্লিষ্টতার…",
      image: require("../../Images/Logo/Logo1.png"),
    },
  ];
  const LastData = [
    {
      id: 1,
      title: "অবন্তিকার মৃত্যুতে দ্বীন ইসলামের সংশ্লিষ্টতা নিয়ে তথ্য চায় কমিটি",
    },
    {
      id: 2,
      title: "অবন্তিকার মৃত্যুতে দ্বীন ইসলামের সংশ্লিষ্টতা নিয়ে তথ্য চায় কমিটি",
    },
    {
      id: 3,
      title: "অবন্তিকার মৃত্যুতে দ্বীন ইসলামের সংশ্লিষ্টতা নিয়ে তথ্য চায় কমিটি",
    },
    {
      id: 4,
      title: "অবন্তিকার মৃত্যুতে দ্বীন ইসলামের সংশ্লিষ্টতা নিয়ে তথ্য চায় কমিটি",
    },
  ];

  return (
    <Container style={{ marginTop: "1.5%" }}>
      <Row>
        <p style={{ textAlign: "left" }}>বাংলাদেশ</p>
        <Col xs={12} md={8}>
          <Col xs={12} md={12}>
            <div class="container">
              <Image src={Logo} alt="logo" fluid style={{}} />
              <div class="content">
                <h1>Heading</h1>
              </div>
            </div>
          </Col>

          <Row style={{ marginTop: "2.2%" }}>
            {Fristtitle1.slice(0, 3).map((item) => (
              <Col xs={12} md={4} key={item.id}>
                <Image src={item.image} alt="logo" fluid style={{}} />
                <h3
                  style={{
                    textAlign: "left",
                    marginTop: "2%",
                    fontSize: "20px",
                  }}
                  className="SolaimanLipi"
                >
                  {item.title}
                </h3>
              </Col>
            ))}
          </Row>

          {/* -------------------------3 grid area---------------------------------------- */}

          <Row style={{ marginTop: "2.2%" }}>
            {Fristtitle1.slice(0, 3).map((item) => (
              <Col xs={12} md={4} key={item.id}>
                <Image src={item.image} alt="logo" fluid style={{}} />
                <h3
                  style={{
                    textAlign: "left",
                    marginTop: "2%",
                    fontSize: "20px",
                  }}
                  className="SolaimanLipi"
                >
                  {item.title}
                </h3>
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={12} md={4}>
          <Tabs
            style={{
              border: "none",
              backgroundColor: "#F4F4F4",
              justifyContent: "space-between",
            }}
            defaultActiveKey="home"
            className="custom-tabs"
          >
            <Tab eventKey="home" title="সর্বশেষ">
              <ol>
                {LastData.map((item, index) => (
                  <li className="SolaimanLipi" style={{ fontSize: "18px" }}>
                    {item?.title}
                    {index !== LastData.length - 1 && <hr />}
                  </li>
                ))}
              </ol>
            </Tab>
            <Tab eventKey="profile" title="সর্বাধিক">
              <ol>
                {LastData.map((item, index) => (
                  <li className="SolaimanLipi" style={{ fontSize: "18px" }}>
                    {item?.title}
                    {index !== LastData.length - 1 && <hr />}
                  </li>
                ))}
              </ol>
            </Tab>
          </Tabs>

          <button
            style={{
              backgroundColor: "#F4F4F4",
              color: "#000",
              border: "none",
              width: "100%",
              height: "50px",
              fontSize: "20px",
              marginTop: "2%",
            }}
          >
            <p
              style={{
                marginTop: "2%",
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#FA5354")}
              onMouseLeave={(e) => (e.target.style.color = "#000")}
            >
              সব খবর
            </p>
          </button>

          <div className="box">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#03246B",
                color: "#fff",
                border: "none",
                width: "100%",
                height: "50px",
                fontSize: "20px",
                marginTop: "2%",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  margin: "0", // to remove default margins
                  flex: "1", // to make the paragraph expand to fill remaining space
                }}
              >
                আর্কাইভ
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BangladeshComponent;
