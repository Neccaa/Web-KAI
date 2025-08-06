import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLeaving, setIsLeaving] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword || !name) {
      alert('Semua field wajib diisi!');
      return;
    }

    if (password !== confirmPassword) {
      alert('Konfirmasi kata sandi tidak cocok.');
      return;
    }

    // Simpan status login ke localStorage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);

    alert(`Pendaftaran berhasil!\nEmail: ${email}`);

    setIsLeaving(true);
    setTimeout(() => navigate('/'), 500); // Navigasi setelah animasi
  };

  return (
    <div className={`login-container ${isLeaving ? 'fade-out' : 'fade-in'}`}>
      <div className="login-card">
        <div className="login-header">
          <h2>Buat Akun</h2>
          <p>Silakan isi data Anda untuk mendaftar</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="name">Nama Lengkap</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama lengkap Anda"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email Anda"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Kata Sandi</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Buat kata sandi"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Konfirmasi Kata Sandi</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Ulangi kata sandi"
            />
          </div>

          <button type="submit" className="login-button">Daftar</button>
        </form>

        <div className="divider">
          <span>atau</span>
        </div>

        <button className="google-login-button" onClick={() => alert('Daftar dengan Google diklik')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Daftar dengan Google
        </button>

        <div className="signup-link">
          Sudah punya akun? <Link to="/login">Masuk</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
