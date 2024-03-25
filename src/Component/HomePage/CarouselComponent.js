import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../Images/TestImage/image7.png";
import Carousel from "better-react-carousel";
import { Image } from "react-bootstrap";

const CarouselComponent = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <Carousel cols={4} rows={1} gap={1} loop={true} autoplay={2000}>
            <Carousel.Item>
              <Image src={logo} rounded />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={logo} rounded />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={logo} rounded />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={logo} rounded />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={logo} rounded />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={logo} rounded />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={logo} rounded />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={logo} rounded />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={logo} rounded />
            </Carousel.Item>
            <Carousel.Item>
              {/* anything you want to show in the grid */}
            </Carousel.Item>
            {/* ... */}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default CarouselComponent;
