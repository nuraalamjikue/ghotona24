import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import "../../index.css";
import { Col, Image } from "react-bootstrap";

const SpecialCapital = () => {
  const Fristtitle1 = [
    {
      id: "1",
      title: "অনুসন্ধান",
      title1: "নির্বাচনের আগে পেট্রল ডিজেলের দাম কমাল ভারত",
      image: require("../../Images/Logo/Logo1.png"),
      filterData: [
        {
          id: "1",
          list: "মহাসড়কে ফিটনেস পরীক্ষা করা পুলিশের গাড়িই ফিটনেসহীন",
        },
        {
          id: "2",
          list: "মহাসড়কে ফিটনেস পরীক্ষা করা পুলিশের গাড়িই ফিটনেসহীন",
        },
        {
          id: "3",
          list: "মহাসড়কে ফিটনেস পরীক্ষা করা পুলিশের গাড়িই ফিটনেসহীন",
        },
      ],
    },

    {
      id: 2,
      title: "বিশেষ",
      title1: "বিভিন্ন খাতে ব্যাপক দুর্নীতির অভিযোগ ইউপি চেয়ারম্যানের বিরুদ্ধে",
      image: require("../../Images/Logo/Logo1.png"),
      filterData: [
        {
          id: "1",
          list: "মহাসড়কে ফিটনেস পরীক্ষা করা পুলিশের গাড়িই ফিটনেসহীন",
        },
        {
          id: "2",
          list: "মহাসড়কে ফিটনেস পরীক্ষা করা পুলিশের গাড়িই ফিটনেসহীন",
        },
        {
          id: "3",
          list: "মহাসড়কে ফিটনেস পরীক্ষা করা পুলিশের গাড়িই ফিটনেসহীন",
        },
      ],
    },
    {
      id: 3,
      title: "রাজধানী",
      title1: "ঢাকার বাতাস ‘অস্বাস্থ্যকর’, বাইরে মাস্ক পরার পরামর্শ",
      image: require("../../Images/Logo/Logo1.png"),
      filterData: [
        {
          id: "1",
          list: "মহাসড়কে ফিটনেস পরীক্ষা করা পুলিশের গাড়িই ফিটনেসহীন",
        },
        {
          id: "2",
          list: "মহাসড়কে ফিটনেস পরীক্ষা করা পুলিশের গাড়িই ফিটনেসহীন",
        },
        {
          id: "3",
          list: "মহাসড়কে ফিটনেস পরীক্ষা করা পুলিশের গাড়িই ফিটনেসহীন",
        },
      ],
    },
  ];

  return (
    <Container style={{ marginTop: "1.5%" }}>
      <Row>
        {Fristtitle1.slice(0, 3).map((item) => (
          <Col xs={12} md={4} key={item.id}>
            <h3
              style={{
                textAlign: "left",
              }}
              className="SolaimanLipi"
            >
              {item.title}
            </h3>
            <Image src={item.image} alt="logo" fluid style={{}} />
            <h4
              style={{
                textAlign: "left",
                paddingTop: "10px",
              }}
              className="SolaimanLipi"
            >
              {item.title1}
            </h4>
            <div className="SpecialCapitalLists">
              {item.filterData &&
                item.filterData.map((lists, index) => (
                  <Col
                    key={lists.id}
                    className="SolaimanLipi"
                    style={{ fontSize: "18px", textAlign: "left" }}
                  >
                    {lists.list}
                    {index !== item.filterData.length - 1 && <hr />}
                  </Col>
                ))}
            </div>
          </Col>
        ))}
      </Row>
      <hr />
    </Container>
  );
};

export default SpecialCapital;
