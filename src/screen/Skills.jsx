import React, { useState } from 'react';

const Skills = () => {
  const skillsSections = [
    {
      title: 'My Skills',
      items: [
        { name: 'Problem Solving', icon: 'ri-lightbulb-flash-line' },
        { name: 'Analytical Thinking', icon: 'ri-search-eye-line' },
        { name: 'Teamwork', icon: 'ri-group-line' },
        { name: 'Adaptability', icon: 'ri-repeat-line' },
        { name: 'Self-learning / Fast Learner', icon: 'ri-rocket-2-line' },
        { name: 'Communication Skill', icon: 'ri-chat-1-line' },
        { name: 'Software Development', icon: 'ri-code-s-slash-line' },
        { name: 'Social Media', icon: 'ri-share-box-line' },
      ]
    },

    {
      title: 'IT Tools',
      items: [
        { name: 'Python', icon: 'ri-python-fill' },
        { name: 'JavaScript', icon: 'ri-javascript-fill' },
        { name: 'React.js', icon: 'ri-reactjs-fill' },
        { name: 'HTML, CSS', icon: 'ri-html5-fill' },
        { name: 'React Native', icon: 'ri-smartphone-line' },
        { name: 'Android Studio', icon: 'ri-android-line' },
        { name: 'Firebase', icon: 'ri-fire-line' },
        { name: 'GitHub', icon: 'ri-github-fill' },
        { name: 'Jupyter Notebook', icon: 'ri-notebook-line' },
        { name: 'ChatGPT', icon: 'ri-brain-line' },
        { name: 'Gemini AI', icon: 'ri-planet-line' },
        { name: 'Claude AI', icon: 'ri-ai-fill' },
      ]
    },

    {
      title: 'Media Tools',
      items: [
        { name: 'CapCut', icon: 'ri-video-line' },
        { name: 'Canva', icon: 'ri-pencil-ruler-2-line' },
        { name: 'Adobe Photoshop', icon: 'ri-image-line' },
        { name: 'Notion', icon: 'ri-notification-3-line' },
        { name: 'TikTok Analytics', icon: 'ri-tiktok-line' },
        { name: 'Instagram Insights', icon: 'ri-instagram-line' },
        { name: 'Google Analytics', icon: 'ri-graph-up-line' },
      ]
    }
  ];

  const [selected, setSelected] = useState({});

  const toggleSkill = (sectionIndex, skillName) => {
    const key = `${sectionIndex}:${skillName}`;
    setSelected(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleKey = (e, sectionIndex, skillName) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleSkill(sectionIndex, skillName);
    }
  };

  return (
    <div className="page-content">
      <h1 className="page-title gradient-text">My Skills</h1>
      <p className="page-subtitle">Skill Individu yang saya miliki :</p>

      {skillsSections.map((section, sIdx) => (
        <section key={sIdx} className="skill-section">
          <h3 className="section-header"><i className="ri-stack-line"></i> {section.title}</h3>
          <div className="skills-grid">
            {section.items.map((skill, idx) => {
              const key = `${sIdx}:${skill.name}`;
              const isSelected = !!selected[key];
              return (
                <div
                  key={key}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  onClick={() => toggleSkill(sIdx, skill.name)}
                  onKeyDown={(e) => handleKey(e, sIdx, skill.name)}
                  className={`skill-card ${isSelected ? 'selected' : ''}`}
                  title={skill.name}
                >
                  <div className="skill-icon"><i className={skill.icon}></i></div>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-meta">{isSelected ? 'Selected' : ''}</div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Skills;
