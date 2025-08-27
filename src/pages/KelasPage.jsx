import { Container, Row, Col } from "react-bootstrap";
import { semuaKelas } from "../data/index";

import FaqComponent from "../components/FaqComponent";

const KelasPage = () => {
  return (
    <div className="kelas-page">
      <div className="kelas min-vh-100">
        <Container>
          {/* Header */}
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">
                Daftar Kereta
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, doloremque.
                Impedit sint voluptatibus earum aspernatur, consectetur reprehenderit quo?
                Provident nobis iste maiores, voluptas sequi error doloremque nostrum vel.
                Fugiat, unde.
              </p>
            </Col>
          </Row>

          {/* Cards */}
          <Row>
            {semuaKelas.map((kelas) => (
              <Col
                key={kelas.id}
                md={4}
                className="mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={kelas.delay}
              >
                <div className="anime-card">
                  {/* Gambar */}
                  <img src={kelas.image} alt={kelas.title} />

                  {/* Rating Bintang */}
                  <div className="star mb-2 px-3 mt-2">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>

                  {/* Judul */}
                  <h5 className="px-3">{kelas.title}</h5>

                  {/* Info Harga & Tombol */}
                  <div className="anime-info">
                    <p>{kelas.price}</p>
                    <button className="btn btn-danger rounded-1">{kelas.buy}</button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* FAQ Section */}
      <FaqComponent />
    </div>
  );
};

export default KelasPage;
