import React from 'react';

class About extends React.Component{
    render(){
        return (
            <div>
                <main id="main">
        <section className="section pb-5">
          <div className="container">
            <div className="row mb-5 align-items-end">
              <div className="col-md-6" data-aos="fade-up">
                <h2>About Me</h2>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut
                  officiis explicabo inventore.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 ml-auto order-2" data-aos="fade-up">
                <h3 className="h3 mb-4">Skills</h3>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <div className="d-flex mb-1">
                      <strong>WordPress</strong>
                      <span className="ml-auto">80%</span>
                    </div>
                    <div className="progress custom-progress">
                      <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="d-flex mb-1">
                      <strong>Photoshop</strong>
                      <span className="ml-auto">96%</span>
                    </div>
                    <div className="progress custom-progress">
                      <div className="progress-bar" role="progressbar" style={{width: '96%'}} aria-valuenow={96} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="d-flex mb-1">
                      <strong>HTML5/CSS3</strong>
                      <span className="ml-auto">99%</span>
                    </div>
                    <div className="progress custom-progress">
                      <div className="progress-bar" role="progressbar" style={{width: '99%'}} aria-valuenow={99} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="d-flex mb-1">
                      <strong>Veu</strong>
                      <span className="ml-auto">87%</span>
                    </div>
                    <div className="progress custom-progress">
                      <div className="progress-bar" role="progressbar" style={{width: '87%'}} aria-valuenow={87} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="d-flex mb-1">
                      <strong>Angular</strong>
                      <span className="ml-auto">85%</span>
                    </div>
                    <div className="progress custom-progress">
                      <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="d-flex mb-1">
                      <strong>React</strong>
                      <span className="ml-auto">88%</span>
                    </div>
                    <div className="progress custom-progress">
                      <div className="progress-bar" role="progressbar" style={{width: '88%'}} aria-valuenow={88} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-7 mb-5 mb-md-0" data-aos="fade-up">
                <p><img src="assets/img/person_1_sq.jpg" alt="Image" className="img-fluid" /></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dignissimos delectus minima reprehenderit
                  molestias illo dolorem et, odio!</p>
                <p>Fuga fugit distinctio delectus iure vitae consequatur excepturi, mollitia, consectetur molestias sapiente
                  rem consequuntur, illum adipisci, sed obcaecati!</p>
                <p>Ex, dolorem qui voluptas reprehenderit provident, ad ipsum iure a consequatur voluptatem incidunt nobis.
                  Vitae reiciendis quae ex.</p>
                <p>Optio consectetur culpa nemo, fugit pariatur veniam voluptate laudantium rerum fuga dolor in maiores ea
                  nisi voluptatibus. Minus?</p>
                <p><a href="#" className="readmore">Download my CV</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
            </div>
        );
    }
}

export default About;