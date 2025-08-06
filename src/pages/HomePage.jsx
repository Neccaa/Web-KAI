import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import { kelasTerbaru, dataSwiper } from "../data/index";
import { useNavigate } from "react-router-dom";
import FaqComponent from "../components/FaqComponent";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


const Homepage = () => {

  let navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                BATAL LIBURAN NAIK KERETA? <br />UANG KEMBALI <br />100%
              </h1>
              
              <p className="mb-4  animate__animated animate__fadeInUp animate__delay-1s">
                Syarat & Ketentuan Berlaku.
              </p>
              <button
      className="btn btn-outline-white btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s"
      onClick={() => navigate("/kelas")}
    >
        <i className="fa-solid fa-train-subway"></i> 
      Lihat Kelas Kereta
    </button>
              <button className="btn btn-outline-white btn-lg rounded-1 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s">   <i className="fa-solid fa-tags"></i> Lihat Promo</button>
            </Col>
           <Col lg="6" className="pt-lg-0 pt-5 d-none d-lg-block">
  <img src={HeroImage} alt="hero-img" className="animate__animated animate__fadeInUp"/>
</Col>

          </Row>
        </Container>
      </header>

      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h1 className="fw-bold">Kereta Terbaru</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) => (
              <Col key={kelas.id} className="mb-4 s shadow rounded " data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay}>
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
          <Row>
            <Col className="text-center mt-5">
            <button className="btn btn-success btn-lg rounded-5" data-aos="fade-up" data-aos-duration="1000" onClick={() => navigate("/kelas")}>
              Lihat Semua Kereta
          
            <i className="fa-solid fa-chevron-right ms-3"></i>
              </button>
            </Col>
            </Row>

        </Container>
      </div>
     <div className="testimonial py-5">
  <Container>
    <Row>
      <Col>
        <h1 className="text-center fw-bold my-5">Testimonial</h1>
      </Col>
    </Row>
    <Row>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
           1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {dataSwiper.map((data) => {
          return <SwiperSlide key={data.id} className="shadow-sm p-4">
            <p className="people">{data.desc}</p>
            <div className="people">  
              <img src={data.image} alt="testimonial" />
              <div>
                <h5 className="mb-1">{data.name}</h5>
                <p className="m-0 fw-bold">
                  {data.skill}
                </p>
              </div>
            </div>
          </SwiperSlide>;
})}
      </Swiper>
    </Row>
  </Container>
</div>

{/* Section FAQ */}
<FaqComponent></FaqComponent>
{/* Section FAQ */}

    </div>
  );
};

export default Homepage;
