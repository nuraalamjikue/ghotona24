import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import "../../Css/CustomCSS.css";
import logo from "../../Images/TestImage/image1.png";

const FristComponent = () => {
  const Fristtitle1 = [
    {
      id: 1,
      title: "অবন্তিকার মৃত্যুতে দ্বীন ইসলামের সংশ্লিষ্টতা নিয়ে তথ্য চায় কমিটি",
      desc: "জগন্নাথ বিশ্ববিদ্যালয়ের (জবি) শিক্ষার্থী ফাইরুজ সাদাফ অবন্তিকার মৃত্যুর ঘটনায় প্ররোচনায় অভিযুক্ত শিক্ষক ও সাবেক সহকারী প্রক্টর দ্বীন ইসলামের সংশ্লিষ্টতার…",
      image: require("../../Images/Logo/Logo1.png"),
    },
  ];

  const Fristtitle2 = [
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
  ];

  const Fristtitle3 = [
    {
      id: 1,
      title: "বাংলাদেশকে ২৩৬ রানের লক্ষ্য দিল শ্রীলঙ্কা",
      image: require("../../Images/Logo/Logo1.png"),
    },
    {
      id: 2,
      title: "বাংলাদেশকে ২৩৬ রানের লক্ষ্য দিল শ্রীলঙ্কা",
      image: require("../../Images/Logo/Logo1.png"),
    },
  ];

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          {Fristtitle1.map((item) => (
            <div key={item.id}>
              {/* Use Link to navigate to a single page */}
              <Link
                // to={`/newsApp/singlePage/${item.id}`}
                to={`/newsApp/singlePage`}
                style={{ textDecoration: "none", color: "#212529" }}
              >
                <div className="zoom-img">
                  <Image src={logo} alt="logo" fluid />
                </div>
                <h2
                  style={{ textAlign: "left", marginTop: "2%" }}
                  className="SolaimanLipi"
                >
                  {item.title}
                </h2>
              </Link>
              <h5
                style={{ textAlign: "left", marginTop: "2%", lineHeight: 1.4 }}
                className="SolaimanLipi"
              >
                {item.desc}
              </h5>
            </div>
          ))}
        </Col>
        <Col xs={12} md={3}>
          {Fristtitle2.map((item, index) => (
            <div key={item.id}>
              <Link
                // to={`/newsApp/singlePage/${item.id}`}
                to={`/newsApp/singlePage`}
                style={{ textDecoration: "none", color: "#212529" }}
              >
                <h3
                  style={{ textAlign: "left", marginTop: "2%" }}
                  className="SolaimanLipi"
                >
                  {item.title}
                </h3>
                <h5
                  style={{
                    textAlign: "left",
                    marginTop: "2%",
                    lineHeight: 1.5,
                  }}
                  className="SolaimanLipi"
                >
                  {item.desc}
                </h5>
              </Link>
              {index !== Fristtitle2.length - 1 && <hr />}
            </div>
          ))}
        </Col>
        <Col xs={12} md={3}>
          {Fristtitle3.map((item) => (
            <div key={item.id}>
              <Link
                // to={`/newsApp/singlePage/${item.id}`}
                to={`/newsApp/singlePage`}
                style={{ textDecoration: "none", color: "#212529" }}
              >
                <Image src={item.image} alt="logo" fluid />
                <h5
                  style={{
                    textAlign: "left",
                    marginTop: "2%",
                    lineHeight: 1.5,
                  }}
                  className="SolaimanLipi"
                >
                  {item.title}
                </h5>
              </Link>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default FristComponent;
