import "./App.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../src/Images/Logo/Logo1.png";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faApple,
  faAndroid,
  faTwitter,
  faYoutube,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import HomeComponent from "./Component/HomeComponent";
import FeaturesComponent from "./Component/FeaturesComponent";
import SinglePage from "./Component/SinglePage/SinglePage";
import { useEffect, useState } from "react";
import "../src/Css/CustomCSS.css";
import BangladeshPageComponent from "./Component/Bangladesh/BangladeshPageComponent";
import HeaderComponent from "./Component/Header/HeaderComponent";
import ScrollToTop from "react-scroll-to-top";

import Calendar from "date-bengali-revised";

function App() {
  const [active, setActive] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");
  const [todatBanglaDate, setTodatBanglaDate] = useState("");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  // Function to format the date
  const formatDate = () => {
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    var today = new Date();
    setFormattedDate(today.toLocaleDateString("bn", options));
  };

  // Call formatDate when the component mounts
  useEffect(() => {
    formatDate();
    let cal = new Calendar();
    let date = new Date();
    let b = cal.fromDate(date);
    let formattedDate = b.format("D MMMM, Y ");
    setTodatBanglaDate(formattedDate);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Container style={{ paddingTop: "1%" }}>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row style={{ marginBottom: "-5%" }}>
            <Col xs={2} md={2}>
              <Link to="/">
                <Image
                  src={logo}
                  alt="logo"
                  fluid
                  style={{ width: "80%", height: "50%" }}
                />
              </Link>
            </Col>
            <Col xs={10} md={10}></Col>
          </Row>

          {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
          <Row style={{ marginBottom: "-1.5%" }}>
            <Col
              xs={4}
              md={4}
              style={{
                textAlign: "left",
                alignSelf: "center",
              }}
            >
              <FontAwesomeIcon
                icon={faApple}
                style={{
                  color: "#C7C5C5",
                  fontSize: "60%",
                  paddingLeft: "3%",
                }}
              />
              <FontAwesomeIcon
                icon={faAndroid}
                style={{
                  color: "#3DD382",
                  fontSize: "60%",
                  paddingLeft: "3%",
                }}
              />
              <FontAwesomeIcon
                icon={faTwitter}
                style={{
                  color: "#1D9BF0",
                  fontSize: "60%",
                  paddingLeft: "3%",
                }}
              />
              <FontAwesomeIcon
                icon={faFacebookF}
                style={{
                  color: "#4867AA",
                  fontSize: "60%",
                  paddingLeft: "3%",
                }}
              />
              <FontAwesomeIcon
                icon={faYoutube}
                style={{
                  color: "#FE0000",
                  fontSize: "60%",
                  paddingLeft: "3%",
                }}
              />
            </Col>
            <Col xs={4} md={4}></Col>
            <Col xs={4} md={4}>
              <p className="SolaimanLipi">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{
                    color: "#000",
                    fontSize: "60%",
                    marginRight: "1%",
                    // paddingLeft: "3%",
                  }}
                />{" "}
                {formattedDate}
                <p className="SolaimanLipi"> {todatBanglaDate}</p>
              </p>
            </Col>
          </Row>

          <div className={active ? "ActiveNav" : ""}>
            {/* Columns are always 50% wide, on mobile and desktop */}
            <Row>
              {/* -------------------------- */}
              <Col
                xs={4}
                md={2}
                style={{ textAlign: "left", alignSelf: "center" }}
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{
                    color: "#9632BE",
                    fontSize: "70%",
                    paddingLeft: "5%",
                  }}
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{
                    color: "#0077B5",
                    fontSize: "70%",
                    paddingLeft: "6%",
                  }}
                />
                <FontAwesomeIcon
                  icon={faApple}
                  style={{
                    color: "#C7C5C5",
                    fontSize: "70%",
                    paddingLeft: "8%",
                  }}
                />
                <FontAwesomeIcon
                  icon={faAndroid}
                  style={{
                    color: "#3DD382",
                    fontSize: "70%",
                    paddingLeft: "5%",
                  }}
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{
                    color: "#1D9BF0",
                    fontSize: "70%",
                    paddingLeft: "5%",
                  }}
                />
              </Col>

              <Col xs={6} md={10} style={{ textAlign: "left" }}>
                {/* <Navbar>
                  <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#features">Features</Nav.Link>
                      <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                  </Container>
                </Navbar> */}
                <Navbar
                  collapseOnSelect
                  expand="lg"
                  className="bg-body-tertiary fixed-left"
                >
                  <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">
                          <p
                            className="SolaimanLipi"
                            style={{
                              fontSize: "22px",
                              color: "#020F5D",
                              fontWeight: "bold",
                            }}
                          >
                            হোম
                          </p>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Bangladesh/">
                          <p
                            className="SolaimanLipi"
                            style={{
                              fontSize: "22px",
                              color: "#020F5D",
                              fontWeight: "bold",
                            }}
                          >
                            {" "}
                            বাংলাদেশ
                          </p>
                        </Nav.Link>
                        <Nav.Link href="#pricing">
                          {" "}
                          <p
                            className="SolaimanLipi"
                            style={{
                              fontSize: "22px",
                              color: "#020F5D",
                              fontWeight: "bold",
                            }}
                          >
                            অর্থ-বাণিজ্য
                          </p>
                        </Nav.Link>
                        <Nav.Link href="#features">
                          {" "}
                          <p
                            className="SolaimanLipi"
                            style={{
                              fontSize: "22px",
                              color: "#020F5D",
                              fontWeight: "bold",
                            }}
                          >
                            শিক্ষা
                          </p>
                        </Nav.Link>
                        <Nav.Link href="#contact">
                          <p
                            className="SolaimanLipi"
                            style={{
                              fontSize: "22px",
                              color: "#020F5D",
                              fontWeight: "bold",
                            }}
                          >
                            আন্তর্জাতিক
                          </p>
                        </Nav.Link>
                        <Nav.Link href="#contact">
                          {" "}
                          <p
                            className="SolaimanLipi"
                            style={{
                              fontSize: "22px",
                              color: "#020F5D",
                              fontWeight: "bold",
                            }}
                          >
                            খেলা
                          </p>
                        </Nav.Link>
                        <Nav.Link href="#contact">
                          <p
                            className="SolaimanLipi"
                            style={{
                              fontSize: "22px",
                              color: "#020F5D",
                              fontWeight: "bold",
                            }}
                          >
                            বিনোদন
                          </p>
                        </Nav.Link>
                        <Nav.Link href="#contact">
                          <p
                            className="SolaimanLipi"
                            style={{
                              fontSize: "22px",
                              color: "#020F5D",
                              fontWeight: "bold",
                            }}
                          >
                            স্বাস্থ্য
                          </p>
                        </Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </Col>
            </Row>
          </div>
          <hr />
        </Container>

        <Routes>
          <Route path="/" element={<HomeComponent />}></Route>
          <Route path="/newsApp/create" element={<FeaturesComponent />}></Route>
          <Route path="/newsApp/singlePage" element={<SinglePage />}></Route>
          <Route
            path="/Bangladesh/"
            element={<BangladeshPageComponent />}
          ></Route>
        </Routes>
      </BrowserRouter>
      <div>
        <div style={{ marginTop: "1vh" }} />
        <ScrollToTop smooth />
      </div>
      <HeaderComponent />
    </div>
  );
}

export default App;

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar, Nav } from "react-bootstrap";

// function App() {
//   return (
//     <div>
//       <Navbar fixed="top" bg="dark" variant="dark">
//         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//         <Nav className="mr-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#features">Features</Nav.Link>
//           <Nav.Link href="#pricing">Pricing</Nav.Link>
//         </Nav>
//       </Navbar>
//       <div style={{ marginTop: "56px" }}>
//         {/* Content below the navbar */}
//         <h1>Main Content</h1>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
//           tempor ipsum, quis gravida arcu. Integer ut commodo turpis. In sodales
//           tincidunt sem, nec tempor urna mollis ut.
//         </p>

//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
//           tempor ipsum, quis gravida arcu. Integer ut commodo turpis. In sodales
//           tincidunt sem, nec tempor urna mollis ut.
//         </p>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
//           tempor ipsum, quis gravida arcu. Integer ut commodo turpis. In sodales
//           tincidunt sem, nec tempor urna mollis ut.
//         </p>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
//           tempor ipsum, quis gravida arcu. Integer ut commodo turpis. In sodales
//           tincidunt sem, nec tempor urna mollis ut.
//         </p>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
//           tempor ipsum, quis gravida arcu. Integer ut commodo turpis. In sodales
//           tincidunt sem, nec tempor urna mollis ut.
//         </p>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
//           tempor ipsum, quis gravida arcu. Integer ut commodo turpis. In sodales
//           tincidunt sem, nec tempor urna mollis ut.
//         </p>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
//           tempor ipsum, quis gravida arcu. Integer ut commodo turpis. In sodales
//           tincidunt sem, nec tempor urna mollis ut.
//         </p>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
//           tempor ipsum, quis gravida arcu. Integer ut commodo turpis. In sodales
//           tincidunt sem, nec tempor urna mollis ut.
//         </p>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
//           tempor ipsum, quis gravida arcu. Integer ut commodo turpis. In sodales
//           tincidunt sem, nec tempor urna mollis ut.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default App;
