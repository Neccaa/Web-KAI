import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";

const SyaratKetenPage = () => {
  return (
    <div>
      <div className="syarat-ketentuan-page">
        <div className="syarat-ketentuan min-vh-100">
          <Container>
            <Row>
              <Col>
                <h1 className="fw-bold text-center mb-2 animate__animated animate__fadeInUp animate__delay-1s">
                  Syarat & Ketentuan
                </h1>
                <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                  Halaman ini menjelaskan syarat dan ketentuan penggunaan layanan pemesanan tiket Kereta Api Indonesia. Mohon dibaca dengan seksama sebelum menggunakan layanan kami.
                </p>
              </Col>
            </Row>

            <Row className="pt-5">
              <Col>
                <p>
                  Dengan mengakses dan menggunakan situs pemesanan tiket kereta ini, pengguna dianggap telah membaca, memahami, dan menyetujui semua isi dalam syarat dan ketentuan ini. Jika Anda tidak menyetujui salah satu atau semua ketentuan ini, kami sarankan untuk tidak menggunakan layanan kami.
                </p>
              </Col>
            </Row>

            <Row>
              <Col>
                <h4 className="fw-bold">1. Pemesanan Tiket</h4>
                <p>
                  Tiket hanya dapat dipesan melalui situs resmi, aplikasi resmi, atau mitra penjualan yang telah ditunjuk oleh Kereta Api Indonesia. Pemesanan tiket wajib dilakukan dengan data penumpang yang benar dan sesuai dengan kartu identitas resmi.
                </p>
                <p>
                  Tiket yang telah dipesan dan dibayar akan dikirimkan dalam bentuk e-ticket yang harus ditunjukkan saat boarding. Perubahan jadwal, pembatalan, atau refund hanya dapat dilakukan sesuai dengan kebijakan yang berlaku.
                </p>
              </Col>
            </Row>

            <Row className="py-3">
              <Col>
                <h4 className="fw-bold">2. Ketentuan Penumpang</h4>
                <p>
                  Penumpang wajib datang tepat waktu ke stasiun dan melakukan boarding paling lambat 30 menit sebelum keberangkatan. Penumpang yang terlambat tidak akan diizinkan naik dan tiket dianggap hangus.
                </p>
                <p>
                  Penumpang wajib menjaga ketertiban dan kenyamanan selama berada di area stasiun maupun di dalam kereta. Segala bentuk tindakan yang mengganggu penumpang lain dapat dikenakan sanksi.
                </p>
              </Col>
            </Row>

            <Row className="py-3">
              <Col>
                <h4 className="fw-bold">3. Barang Bawaan</h4>
                <p>
                  Setiap penumpang diperbolehkan membawa barang pribadi maksimal 20 kg tanpa dikenakan biaya tambahan. Barang berukuran besar atau dalam jumlah banyak dapat dikenakan biaya tambahan atau ditolak jika dianggap mengganggu keselamatan dan kenyamanan.
                </p>
                <p>
                  Barang-barang berbahaya seperti bahan peledak, senjata tajam, atau zat beracun dilarang dibawa ke dalam kereta api. Petugas berhak melakukan pemeriksaan keamanan sewaktu-waktu.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <FaqComponent />
    </div>
  );
};

export default SyaratKetenPage;
