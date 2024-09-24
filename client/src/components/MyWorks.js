import React from 'react';

const MyWorks = () => {
  return (
    <section className="section my-works" id="section3">
      <div className="container">
        <div className="section-heading">
          <h2>My Works</h2>
          <div className="line-dec"></div>
          <span>Burada projelerini ve çalışmalarını paylaşabilirsin.</span>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src="https://via.placeholder.com/300" alt="Work 1" />
            <h4>Proje 1</h4>
          </div>
          <div className="col-md-4">
            <img src="https://via.placeholder.com/300" alt="Work 2" />
            <h4>Proje 2</h4>
          </div>
          <div className="col-md-4">
            <img src="https://via.placeholder.com/300" alt="Work 3" />
            <h4>Proje 3</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
