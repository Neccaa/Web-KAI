import { Container, Row, Col } from "react-bootstrap";
import { semuaKelas } from "../data/index";

import FaqComponent from "../components/FaqComponent";

const KelasPage = () => {
  return (
    <div className="kelas-page">
    <div className="kelas min-vh-100">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s" >Daftar Kereta</h1>
            <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, doloremque.
              Impedit sint voluptatibus earum aspernatur, consectetur reprehenderit quo?
              Provident nobis iste maiores, voluptas sequi error doloremque nostrum vel.
              Fugiat, unde.
            </p>
          </Col>
        </Row>
        <Row>
           {semuaKelas.map((kelas) => (
                        <Col key={kelas.id} className="mb-4 s shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay}>
                          <div className="bg-white rounded shadow-sm">
                            <img
                              src={kelas.image}
                              alt="unsplash.com"
                              className="w-100 mb-3 rounded-top"
                            />
                            <div className="star mb-2 px-3">
                              <i className={kelas.star1}></i>
                              <i className={kelas.star2}></i>
                              <i className={kelas.star3}></i>
                              <i className={kelas.star4}></i>
                              <i className={kelas.star5}></i>
                            </div>
                            <h5 className="mb-3 px-3">{kelas.title}</h5>
                            <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                              <p className="mb-0 text-primary fw-bold">{kelas.price}</p>
                              <button className="btn btn-danger rounded-1">{kelas.buy}</button>
                            </div>
                          </div>
                        </Col>
                      ))}
        </Row>
      </Container>
    </div>

    <FaqComponent></FaqComponent>
    </div>

  );
};

export default KelasPage;
