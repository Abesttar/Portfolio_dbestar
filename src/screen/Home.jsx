import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const experiences = [
    {
      role: "Ketua Umum",
      org: "Jurnalis Nuansa",
      date: "2024 — 2025",
      desc: "Jurnalis Nuansa adalah LPM (Lembaga Pers Mahasiswa) paling besar yang ada di Sukabumi, bergerak dalam pembuatan konten digital untuk kebutuhan informasi dalam dan luar kampus, juga untuk memberikan hiburan kepada target penonton.",
      image: "/media/images/jurnalis.jpg"
    },
    {
      role: "Social Media Manager",
      org: "PT. Glory Benediction Granted",
      date: "2025",
      desc: "Di Glory Benediction Granted sebagai Social Media Manager, mengelola konten digital dari mulai ide, perencanaan, hingga penguploadan untuk kebutuhan marketing perusahaan.",
      image: "/media/images/smm.jpg"
    },
    {
      role: "Ketua Divisi Media",
      org: "MABIM Universitas Nusa Putra",
      date: "2025",
      desc: "Mabim adalah salah satu project berskala lumayan besar, terutama divisi media; kami menangani pembuatan konten, story dan visual branding, website, live streaming, dan operator acara.",
      image: "/media/images/mabim.jpg"
    },
    {
      role: "Ketua Divisi Kaderisasi",
      org: "Himpunan Mahasiswa Teknik Informatika",
      date: "2025",
      desc: "Menangani Human Resources di dalam HMTI baik Akademik maupun Non Akademik dengan tujuan mengembangkan Human Resources yang ada di HMTI.",
      image: "/media/images/hmti.jpg"
    }
  ];

  return (
    <div className="page-content">
      {/* HERO SECTION BARU (CYBER FRAME & DATA PANEL) */}
      <section className="about-grid">
        {/* Foto dengan Cyber Frame */}
        <div className="profile-column">
          <div className="profile-container">
            <img src="/media/images/profile.jpg" alt="Profile" className="profile-img" />
          </div>

          <div className="profile-actions">
            {/* Pastikan file PDF ada di public/media/docs/cvdbest.pdf */}
            <a href="/media/docs/cvdbest.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer" aria-label="Lihat CV saya">Lihat CV saya</a>
          </div>
        </div>

        {/* Teks dengan Data Panel */}
        <div className="about-card about-text">
          <h1 className="page-title gradient-text" style={{fontSize: '56px', marginBottom:'16px'}}>D BEST AR</h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <span style={{ height: '3px', width: '40px', background: 'linear-gradient(to right, var(--primary), transparent)', borderRadius:'2px' }}></span>
            <h2 style={{ color: 'var(--text-main)', fontWeight: '500', fontSize: '22px', margin: 0, letterSpacing:'0.5px' }}>
              SoftDev <span style={{color:'var(--primary)'}}>&</span> Social Media Manager
            </h2>
          </div>

          <p>
           Saya adalah mahasiswa Teknik Informatika semester 5 yang memiliki kemampuan di bidang Teknologi
Informasi serta pengelolaan dan pemanfaatan media sosial. Terbiasa mengombinasikan keterampilan
teknis IT dengan pemahaman strategi konten digital untuk mendukung kebutuhan informasi dan
komunikasi. Memiliki kemampuan adaptasi yang baik, komunikatif, dan mampu bekerja secara
mandiri maupun dalam tim.
          </p>

          <div className="btn-group">
            <NavLink to="/projects" className="btn btn-primary">
              Explore Portfolio <i className="ri-arrow-right-up-line" style={{marginLeft:'5px'}}></i>
            </NavLink>
            <a href="#contact" className="btn btn-outline">Hubungi Saya</a>
          </div>
        </div>

      </section>

      {/* EXPERIENCE SECTION (TETAP SAMA) */}
      <h3 className="section-header"><i className="ri-briefcase-4-line"></i> Professional Journey</h3>
      
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="exp-item" tabIndex={0} role="button" aria-expanded="false">
            <div className="exp-header">
              <div>
                <strong style={{fontSize: '18px', display:'block'}}>{exp.role}</strong>
                <span style={{ color: 'var(--primary)', fontSize:'14px', fontWeight:'500' }}>{exp.org}</span>
              </div>
              <span style={{color: 'var(--text-muted)', fontSize: '14px'}}>{exp.date}</span>
            </div>
            <div className="exp-details">
              <p>{exp.desc}</p>
              {exp.image && (
                <img src={exp.image} alt="Documentation" className="exp-img" />
              )}
            </div>
          </div>
        ))} 
      </div>

      {/* CONTACT SECTION (ENHANCED) */}
      <section id="contact" style={{marginTop: '100px'}}>
        <h3 className="section-header"><i className="ri-send-plane-fill"></i> Let's Connect</h3>
        <p style={{ marginBottom: '24px', color: 'var(--text-muted)' }}>Siap berkolaborasi dalam proyek inovatif? Temukan saya di:</p>
        <div className="contact-links">
          <a href="mailto:abesttar@gmail.com" className="contact-item" aria-label="Email: abesttar@gmail.com">
            <span className="contact-icon"><i className="ri-mail-line"></i></span>
            <span className="contact-text">
              <strong>Email</strong>
              <small>abesttar@gmail.com</small>
            </span>
          </a>

          <a href="https://github.com/Abesttar" className="contact-item" target="_blank" rel="noopener noreferrer" aria-label="GitHub: Abesttar">
            <span className="contact-icon"><i className="ri-github-line"></i></span>
            <span className="contact-text">
              <strong>GitHub</strong>
              <small>@Abesttar</small>
            </span>
          </a>

          <a href="https://wa.me/qr/L7HJNGPBBQPHE1" className="contact-item contact-wa" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp: Chat via WA">
            <span className="contact-icon"><i className="ri-whatsapp-line"></i></span>
            <span className="contact-text">
              <strong>WhatsApp</strong>
              <small>Chat via WA</small>
            </span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
