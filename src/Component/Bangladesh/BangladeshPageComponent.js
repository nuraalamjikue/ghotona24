// import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const BangladeshPageComponent = () => {
  // const navigate = useNavigate();
  const MenuLists = [
    {
      id: "1",
      title: "জাতীয় ◐",
    },
    {
      id: "2",
      title: "রাজধানী ◐",
    },
    {
      id: "3",
      title: "সারা দেশ ◐",
    },
    {
      id: "4",
      title: "রাজধানী ◐",
    },
    {
      id: "5",
      title: "রাজধানী ◐",
    },
    {
      id: "6",
      title: "রাজধানী ◐",
    },
    {
      id: "7",
      title: "রাজধানী ◐",
    },
    {
      id: "8",
      title: "রাজধানী ◐",
    },
    {
      id: "9",
      title: "রাজধানী ◐",
    },
    {
      id: "10",
      title: "রাজধানী ◐",
    },
    {
      id: "11",
      title: "রাজধানী ◐",
    },
    {
      id: "12",
      title: "রাজধানী ◐",
    },
  ];

  const Fristtitle1 = [
    {
      id: "1",
      title: "বৃষ্টির পরও ‘অস্বাস্থ্যকর’ ঢাকার বাতাস",
      Desc: "নির্বাচনের আগে পেট্রল ডিজেলের দাম কমাল ভারত | নির্বাচনের আগে পেট্রল ডিজেলের দাম কমাল ভারত | নির্বাচনের আগে পেট্রল ডিজেলের দাম কমাল ভারত",
      image: require("../../Images/Logo/Logo1.png"),
    },

    {
      id: 2,
      title: "সবচেয়ে সুখ ফিনল্যান্ডে, বাংলাদেশের অবস্থান ১২৯ ",
      Desc: "সবচেয়ে সুখ ফিনল্যান্ডে, বাংলাদেশের অবস্থান ১২৯ ",
      image: require("../../Images/Logo/Logo1.png"),
    },
    {
      id: 3,
      title: "রাজধানী",
      Desc: "ঢাকার বাতাস ‘অস্বাস্থ্যকর’, বাইরে মাস্ক পরার পরামর্শ",
      image: require("../../Images/Logo/Logo1.png"),
    },
    {
      id: 4,
      title: "রাজধানী",
      Desc: "ঢাকার বাতাস ‘অস্বাস্থ্যকর’, বাইরে মাস্ক পরার পরামর্শ",
      image: require("../../Images/Logo/Logo1.png"),
    },
  ];

  return (
    <Container style={{ marginBottom: "2%" }}>
      <Row style={{ marginTop: "5%" }}>
        {MenuLists.slice(0, 12).map((item) => (
          <Col xs={3} md={1}>
            <Link
              // to={`/newsApp/singlePage/${item.id}`}
              to={`/newsApp/singlePage`}
              style={{ textDecoration: "none", color: "#212529" }}
            >
              <p>{item?.title}</p>
            </Link>
          </Col>
        ))}
      </Row>

      <p style={{ textAlign: "left", paddingTop: "2%" }}>
        বাংলাদেশ{" "}
        <FontAwesomeIcon
          icon={faCaretRight}
          style={{
            color: "#000",
            fontSize: "100%",
            paddingLeft: "1%",
          }}
        />
      </p>
      <Row>
        <Col xs={12} md={3}>
          {Fristtitle1.slice(0, 2).map((item) => (
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
                    // lineHeight: 1.5,
                  }}
                  className="SolaimanLipi"
                >
                  {item.title}
                </h5>
              </Link>
            </div>
          ))}
        </Col>

        <Col xs={12} md={6}>
          {Fristtitle1.slice(0, 1).map((item) => (
            <div key={item.id}>
              <Link
                // to={`/newsApp/singlePage/${item.id}`}
                to={`/newsApp/singlePage`}
                style={{ textDecoration: "none", color: "#212529" }}
              >
                <Image src={item.image} alt="logo" fluid />
                <h4
                  style={{
                    textAlign: "left",
                    marginTop: "2%",
                    // lineHeight: 1.5,
                  }}
                  className="SolaimanLipi"
                >
                  {item.title}
                </h4>
                <h5
                  style={{
                    textAlign: "left",
                    marginTop: "2%",
                  }}
                  className="SolaimanLipi"
                >
                  {item.Desc}
                </h5>
              </Link>
            </div>
          ))}
        </Col>
        <Col xs={12} md={3}>
          {Fristtitle1.slice(0, 2).map((item) => (
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
                    // lineHeight: 1.5,
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

      <Row>
        {Fristtitle1.slice(0, 4).map((item) => (
          <Col xs={12} md={3} key={item?.id}>
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
                  // lineHeight: 1.5,
                }}
                className="SolaimanLipi"
              >
                {item.title}
              </h5>
            </Link>
          </Col>
        ))}
      </Row>
      <hr />
      <Row>
        <Col xs={12} md={3}></Col>
        <Col xs={12} md={6}>
          {Fristtitle1.slice(0, 5).map((item) => (
            <Row style={{ paddingTop: "3%" }}>
              <Col xs={12} md={4} key={item.id}>
                <Link
                  // to={`/newsApp/singlePage/${item.id}`}
                  to={`/newsApp/singlePage`}
                  style={{ textDecoration: "none", color: "#212529" }}
                >
                  <Image src={item.image} alt="logo" fluid />
                </Link>
              </Col>{" "}
              <Col xs={12} md={8}>
                <h4
                  style={{
                    textAlign: "left",
                    marginTop: "2%",
                    // lineHeight: 1.5,
                  }}
                  className="SolaimanLipi"
                >
                  {item.title}
                </h4>

                <h5
                  style={{
                    textAlign: "left",
                    marginTop: "2%",
                  }}
                  className="SolaimanLipi"
                >
                  {item.Desc}
                </h5>
              </Col>
            </Row>
          ))}
        </Col>
        <Col xs={12} md={3}></Col>
      </Row>
      <br />
      <br />

      <button
        style={{
          backgroundColor: "#F4F4F4",
          color: "#000",
          border: "none",
          width: "50%",
          height: "50px",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bold",
            paddingTop: "5px",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#FA5354")}
          onMouseLeave={(e) => (e.target.style.color = "#000")}
        >
          Read more
        </p>
      </button>
    </Container>
  );
};

export default BangladeshPageComponent;
