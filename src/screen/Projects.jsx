import React, { useState } from 'react';

const Projects = () => {
  const projectList = [
    { title: "GeoCulture Mobile App", desc: "sebuah aplikasi mobile berbasis GIS untuk mencari dan menemukan letak tokoh, situs, atau wisata bersejarah yang ada di indonesia atau dunia.", tag: "Mobile App", icon: "ri-map-pin-line", demo: "https://drive.google.com/drive/folders/1OkpjpK4Oyz1_Q9w232MdxDi-xjF8tR1B?usp=drive_link", repo: "https://github.com/Abesttar/geoculturemobile" },

    { title: "GeoCulture Web", desc: "sebuah Web berbasis GIS untuk mencari dan menemukan letak tokoh, situs, atau wisata bersejarah yang ada di indonesia atau dunia.", tag: "Web App", icon: "ri-earth-line", demo: "https://drive.google.com/drive/folders/1Js42obz9vtxBsb971rOZzx7zYoa0cgsU?usp=sharing", repo: "https://github.com/Abesttar/geocultureweb" },

    { title: "LabuanBajoApp", desc: "aplikasi mobile yang rencana pengembangannya adalah untuk memfasilitasi liburan orang orang agar lebih mudah dari beli tiket pesawat, penginapan, dan hal hal yang dibutuhkan lainnya dalam satu aplikasi. (aplikasi dalam tahap develop)", tag: "Mobile App (Dev)", icon: "ri-suitcase-line", demo: "https://drive.google.com/drive/folders/1XKhd0tJDx4slUr6TXREw86WYUw4jXaCs?usp=drive_link", repo: "https://github.com/Abesttar/LabuanBajoApp" },

    { title: "Personality Person App", desc: "Ini adalah model AI yang saya buat, AI ini bisa mendeteksi personality manusia dengan beberapa informasi yang dikirim oleh usernya, entah itu Extrovert, Introvert atau Ambivert.", tag: "AI Model", icon: "ri-robot-line", demo: "https://personality-person-group5.streamlit.app/", repo: "https://github.com/Abesttar/personality-person" }
  ];

  const [open, setOpen] = useState({});
  const toggle = (i) => setOpen(prev => ({ ...prev, [i]: !prev[i] }));

  return (
    <div className="page-content">
      <h1 className="page-title gradient-text">Selected Works</h1>
      <p className="page-subtitle">Koleksi proyek inovatif yang telah saya kerjakan.</p>

      <div className="grid-system">
        {projectList.map((item, index) => (
          <div key={index} className={`card project-card ${open[index] ? 'expanded' : ''}`}>
            <div className="card-head">
              <h3><i className={item.icon} style={{color: 'var(--primary)'}}></i> {item.title}</h3>
              <button
                className="card-toggle"
                onClick={() => toggle(index)}
                aria-expanded={!!open[index]}
                aria-controls={`project-detail-${index}`}
                aria-label={open[index] ? 'Tutup detail proyek' : 'Buka detail proyek'}
              >
                <i className={`ri-arrow-down-s-line ${open[index] ? 'rotated' : ''}`}></i>
              </button>
            </div>

            <span className="card-tag">{item.tag}</span>

            <div id={`project-detail-${index}`} className={`card-details ${open[index] ? 'open' : ''}`}>
              <p>{item.desc}</p>
              <div className="card-actions">
                {item.demo && (
                  <a href={item.demo} className="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer" aria-label={`Demo - ${item.title}`}>
                    <i className="ri-play-line"></i>
                    <span>Demo</span>
                  </a>
                )}
                {item.repo && (
                  <a href={item.repo} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer" aria-label={`GitHub - ${item.title}`}>
                    <i className="ri-github-line"></i>
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
