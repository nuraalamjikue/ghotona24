import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col, Image } from "react-bootstrap";

const PComponent = () => {
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
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <h3
            style={{
              textAlign: "left",
              lineHeight: 1.5,
            }}
            className="SolaimanLipi"
          >
            প্রোগ্রাম
          </h3>
        </Col>
        {Fristtitle1.slice(0, 6).map((item) => (
          <Col xs={12} md={4} key={item.id} style={{ paddingTop: "1.5%" }}>
            <Image src={item.image} alt="logo" fluid style={{}} />
          </Col>
        ))}
      </Row>
      <hr />
    </Container>
  );
};

export default PComponent;
