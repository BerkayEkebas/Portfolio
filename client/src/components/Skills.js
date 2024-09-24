import React from 'react';

const Skills = () => {
  return (
    <section className="section skills" id="section2">
      <div className="container">
        <div className="section-heading">
          <h2>Skills</h2>
          <div className="line-dec"></div>
          <span>Bu bölümde hangi yeteneklere sahip olduğunu vurgulayabilirsin.</span>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h4>HTML5 & CSS3</h4>
            <p>Gelişmiş ön yüz geliştirme becerileri.</p>
          </div>
          <div className="col-md-6">
            <h4>JavaScript & React</h4>
            <p>Modern web geliştirme teknolojileri.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
