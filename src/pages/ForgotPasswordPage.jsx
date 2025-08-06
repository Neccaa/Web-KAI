import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isLeaving, setIsLeaving] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Email wajib diisi.");
      return;
    }

    alert(`Instruksi reset kata sandi telah dikirim ke ${email}`);

    // Simulasi navigasi setelah animasi
    setIsLeaving(true);
    setTimeout(() => {
      navigate("/login");
    }, 500); // waktu animasi
  };

  return (
    <div className={`login-container ${isLeaving ? "fade-out" : "fade-in"}`}>
      <div className="login-card">
        <div className="login-header">
          <h2>Lupa Kata Sandi?</h2>
          <p>Masukkan email kamu untuk mengatur ulang sandi</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Alamat Email</label>
            <input
              type="email"
              id="email"
              placeholder="Masukkan email kamu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="login-button">
            Kirim Instruksi Reset
          </button>
        </form>

        <div className="signup-link">
          Sudah ingat sandi? <Link to="/login">Masuk</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
