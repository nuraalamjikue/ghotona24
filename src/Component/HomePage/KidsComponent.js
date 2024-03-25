import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col, Image } from "react-bootstrap";
import "../../Css/CustomCSS.css";

import Kids from "../../Images/Logo/kidzone-transparent.png";
const KidsComponent = () => {
  const Fristtitle1 = [
    {
      id: "1",

      image: require("../../Images/Logo/Logo1.png"),
    },

    {
      id: 2,

      image: require("../../Images/Logo/Logo1.png"),
    },
    {
      id: 3,

      image: require("../../Images/Logo/Logo1.png"),
    },
    {
      id: 4,

      image: require("../../Images/Logo/Logo1.png"),
    },
    {
      id: 5,

      image: require("../../Images/Logo/Logo1.png"),
    },
    {
      id: 6,

      image: require("../../Images/Logo/Logo1.png"),
    },
  ];

  return (
    <Container fluid="md">
      <Row>
        <Col xs={12} md={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={Kids} alt="logo" fluid />
          </div>
        </Col>
      </Row>
      <Row>
        {Fristtitle1.slice(0, 6).map((item) => (
          <Col xs={12} md={4} style={{ paddingTop: "2%" }}>
            <Image
              src={item.image}
              alt="logo"
              fluid
              style={{}}
              className="box"
            />
          </Col>
        ))}
      </Row>
      <hr />
    </Container>
  );
};

export default KidsComponent;
