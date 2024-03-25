import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import adds from "../../Images/Logo/18073983371505864680.gif";
import { Link } from "react-router-dom";

const SecondComponent = () => {
  const Fristtitle4 = [
    {
      id: 1,
      title:
        "সিইউবি ও ইউনিভার্সিটি অব ম্যানিটোবার যৌথ গবেষণায় রচিত বইয়ের মোড়ক উন্মোচন",

      image: require("../../Images/Logo/Logo1.png"),
    },
    {
      id: 2,
      title: "",
      image: require("../../Images/Logo/Logo1.png"),
    },
  ];

  const Fristtitle5 = [
    {
      id: 1,
      title:
        "সিইউবি ও ইউনিভার্সিটি অব ম্যানিটোবার যৌথ গবেষণায় রচিত বইয়ের মোড়ক উন্মোচন",
      image: require("../../Images/Logo/Logo1.png"),
    },
    {
      id: 2,
      title:
        "সিইউবি ও ইউনিভার্সিটি অব ম্যানিটোবার যৌথ গবেষণায় রচিত বইয়ের মোড়ক উন্মোচন",
      image: require("../../Images/Logo/Logo1.png"),
    },
  ];
  const Fristtitle6 = [
    {
      id: 1,
      title: "‘সরলতার প্রতিমা’র গায়ক খালিদ মারা গেছেন",
      image: require("../../Images/Logo/Logo1.png"),
    },
    {
      id: 2,
      title:
        "সিইউবি ও ইউনিভার্সিটি অব ম্যানিটোবার যৌথ গবেষণায় রচিত বইয়ের মোড়ক উন্মোচন",
      image: require("../../Images/Logo/Logo1.png"),
    },
  ];

  const Fristtitle7 = [
    {
      id: 1,
      title: "‘সরলতার প্রতিমা’র গায়ক খালিদ মারা গেছেন",
      desc: "",
      image: require("../../Images/Logo/Logo1.png"),
    },
    {
      id: 2,
      title:
        "সিইউবি ও ইউনিভার্সিটি অব ম্যানিটোবার যৌথ গবেষণায় রচিত বইয়ের মোড়ক উন্মোচন",
      desc: "জগন্নাথ বিশ্ববিদ্যালয়ের (জবি) শিক্ষার্থী ফাইরুজ সাদাফ অবন্তিকার মৃত্যুর ঘটনায় প্ররোচনায় অভিযুক্ত শিক্ষক ও সাবেক সহকারী প্রক্টর দ্বীন ইসলামের সংশ্লিষ্টতার…",
      image: require("../../Images/Logo/Logo1.png"),
    },
    {
      id: 3,
      title:
        "সিইউবি ও ইউনিভার্সিটি অব ম্যানিটোবার যৌথ গবেষণায় রচিত বইয়ের মোড়ক উন্মোচন",

      desc: "জগন্নাথ বিশ্ববিদ্যালয়ের (জবি) শিক্ষার্থী ফাইরুজ সাদাফ অবন্তিকার মৃত্যুর ঘটনায় প্ররোচনায় অভিযুক্ত শিক্ষক ও সাবেক সহকারী প্রক্টর দ্বীন ইসলামের সংশ্লিষ্টতার…",
      image: require("../../Images/Logo/Logo1.png"),
    },
    {
      id: 4,
      title:
        "সিইউবি ও ইউনিভার্সিটি অব ম্যানিটোবার যৌথ গবেষণায় রচিত বইয়ের মোড়ক উন্মোচন",
      desc: "",
      image: require("../../Images/Logo/Logo1.png"),
    },
  ];

  return (
    <Container style={{ marginTop: "1.5%" }}>
      <Row>
        <Col xs={12} md={3}>
          {Fristtitle4.slice(0, 1).map((item) => (
            <div key={item.id}>
              <Link
                // to={`/newsApp/singlePage/${item.id}`}
                to={`/newsApp/singlePage`}
                style={{ textDecoration: "none", color: "#212529" }}
              >
                <Image src={item.image} alt="logo" fluid />
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
              </Link>
            </div>
          ))}
        </Col>
        <Col xs={12} md={3}>
          {Fristtitle5.slice(0, 2).map((item, index) => (
            <Row key={item.id}>
              <Col xs={5} md={5}>
                <Link
                  // to={`/newsApp/singlePage/${item.id}`}
                  to={`/newsApp/singlePage`}
                  style={{ textDecoration: "none", color: "#212529" }}
                >
                  <Image
                    src={item.image}
                    alt="logo"
                    fluid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                </Link>
              </Col>
              <Col xs={7} md={7}>
                <Link
                  // to={`/newsApp/singlePage/${item.id}`}
                  to={`/newsApp/singlePage`}
                  style={{ textDecoration: "none", color: "#212529" }}
                >
                  <h3
                    style={{
                      textAlign: "left",
                      marginTop: "2%",
                      fontSize: "20px",
                    }}
                    className="SolaimanLipi"
                  >
                    {item.title}
                    {index !== Fristtitle5.length - 1 && <hr />}
                  </h3>
                </Link>
              </Col>
            </Row>
          ))}
        </Col>

        <Col xs={12} md={3}>
          {Fristtitle5.slice(0, 2).map((item, index) => (
            <Row key={item.id}>
              <Col xs={7} md={7}>
                <Link
                  // to={`/newsApp/singlePage/${item.id}`}
                  to={`/newsApp/singlePage`}
                  style={{ textDecoration: "none", color: "#212529" }}
                >
                  <h3
                    style={{
                      textAlign: "left",
                      marginTop: "2%",
                      fontSize: "20px",
                    }}
                    className="SolaimanLipi"
                  >
                    {item.title}
                    {index !== Fristtitle5.length - 1 && <hr />}
                  </h3>
                </Link>
              </Col>
              <Col xs={5} md={5}>
                <Link
                  // to={`/newsApp/singlePage/${item.id}`}
                  to={`/newsApp/singlePage`}
                  style={{ textDecoration: "none", color: "#212529" }}
                >
                  <Image
                    src={item.image}
                    alt="logo"
                    fluid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                </Link>
              </Col>
            </Row>
          ))}
        </Col>

        <Col xs={12} md={3}>
          {Fristtitle6.slice(0, 1).map((item) => (
            <div key={item.id}>
              <Link
                // to={`/newsApp/singlePage/${item.id}`}
                to={`/newsApp/singlePage`}
                style={{ textDecoration: "none", color: "#212529" }}
              >
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
              </Link>
            </div>
          ))}
        </Col>
      </Row>
      <hr />

      {/* Four Section Grid */}

      <Row>
        {Fristtitle7.slice(0, 4).map((item) => (
          <Col xs={12} md={3} key={item.id}>
            <Link
              // to={`/newsApp/singlePage/${item.id}`}
              to={`/newsApp/singlePage`}
              style={{ textDecoration: "none", color: "#212529" }}
            >
              <Image src={item.image} alt="logo" fluid style={{}} />
              <h3
                style={{ textAlign: "left", marginTop: "2%", fontSize: "20px" }}
                className="SolaimanLipi"
              >
                {item.title}
              </h3>
            </Link>
          </Col>
        ))}
        <hr />
      </Row>
      <Row style={{ paddingTop: 10, paddingBottom: 20 }}>
        <Col xs={12} md={12}>
          <Link
            // to={`/newsApp/singlePage/${item.id}`}
            to={`/newsApp/singlePage`}
            style={{ textDecoration: "none", color: "#212529" }}
          >
            <Image src={adds} alt="loading..." />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default SecondComponent;
