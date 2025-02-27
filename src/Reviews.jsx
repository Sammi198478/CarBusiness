import { Col, Row } from "react-bootstrap";
// import { SectionTitle } from "./common/title";

const reviews = [
  {
    img: "img/Img4.png",
    name:"2021 Cadillac Escalade",
    content:
      "The 2021 Escalade is a technological showcase and a worthy claimant of the flagship American luxury vehicle title",
    user: {
      img: "img/Oval.png",
      name: "Hironaka Hiroe",
      position: "Chief Editor",
      stars: 4.91,
      total: 98
    },
  },
  {
    img: "img/Img5.png",
    name:"2021 Hyundai Elantra",
    content:
      "If developing a car was a marathon technological showcase, Hyundai didn’t run the last mile with the 2021 Elantra. ",
    user: {
      img: "img/Oval Copy.png",
      name: "Debashis Bhuiyan",
      position: "News Editor",
      stars: 4.65,
      total: 93,
    },
  },
  {
    img: "img/Img6.png",
    name:"2021 Mercedes-Benz GLA250",
    content:
      "The new entry point into Mercedes-Benz’s SUV lineup is bigger and improved, but still features a frustrating powertrain. ",
    user: {
      img: "img/Oval Copy 2.png",
      name: "Lew Silverton",
      position: "Chief Editor",
      stars: 4.55,
      total: 35
    },
  },
];

 const Reviews = () => {
  return (
    <div style={{ paddingTop: "100px" }} className="container">
      <h1 className="text-center fw-bold pb-4">Recent reviews</h1>

      <Row
        style={{ paddingTop: "54px" }}
        className="d-flex justify-content-center"
      >
        {reviews.map(({ img, content, name, user }, i) => (
          <Col key={i} md={4}>
            <div className="card border-0" style={{ width: "25rem" }}>
              <img src={img} className="card-img-top" alt={name}/>
              <div className="card-body">
                <h5 className="card-title fw-bolder">{name}</h5>
                <p className="card-text opacity-50">{content}</p>
                <div className="d-flex align-items-center mt-3">
                  <img
                    alt=""
                    src={user.img}
                    className="rounded-circle me-3"
                    style={{ width: "50px", height: " 50px" }}
                  />
                  <div className="flex-grow-1">
                    <h6 className="mb-0 fw-bold">{user.name}</h6>
                    <small className="text-muted">{user.position}</small>
                  </div>
                  <div className="d-flex align-items-center ms-auto">
                    <span className="text-warning fw-bold">★</span>
                    <span className="ms-1 fw-bold">{user.stars}</span>
                    <span className="text-muted ms-2">({user.total})</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default Reviews;