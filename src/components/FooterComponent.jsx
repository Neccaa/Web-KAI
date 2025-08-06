import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer py-5 bg-light text-dark">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h1 className="fw-bold">Kereta Api Indonesia</h1>
            <p className="desc">
              Menyediakan layanan transportasi kereta api yang nyaman, aman, dan tepat waktu ke seluruh wilayah Indonesia. Kami berkomitmen untuk memberikan pengalaman perjalanan terbaik bagi seluruh penumpang.
            </p>
            <div className="no mb-1 mt-4 d-flex align-items-center">
              <i className="fa-brands fa-whatsapp me-2"></i>
              <p className="m-0">+62 812-3456-7890</p>
            </div>
            <div className="mail d-flex align-items-center mt-2">
              <i className="fa-regular fa-envelope me-2"></i>
              <p className="m-0">info@keretaapi.co.id</p>
            </div>
          </Col>

          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Navigasi</h5>
            <Link to="/">Beranda</Link>
            <Link to="/kelas">Kereta</Link>
            <Link to="/testimonial">Testimoni</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/syaratketen">Syarat & Ketentuan</Link>
          </Col>

          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Berlangganan Info Jadwal & Promo</h5>
            <div className="subscribes d-flex">
              <input type="text" className="form-control rounded-0" placeholder="Masukkan email Anda..." />
              <button className="btn btn-danger rounded-end rounded-0">Langganan</button>
            </div>
            <div className="sosial mt-3 d-flex gap-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p className="text-center px-md-0 px-3 m-0">
              &copy; {new Date().getFullYear()} <span className="fw-bold">Bagus</span>. Seluruh hak cipta dilindungi.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
