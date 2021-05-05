import React from 'react';

class Header extends React.Component{
    render(){
        return (
            <div>
            <div className="collapse navbar-collapse custom-navmenu" id="main-navbar">
              <div className="container py-2 py-md-5">
                <div className="row align-items-start">
                  <div className="col-md-2">
                    <ul className="custom-menu">
                      <li className="active"><a href="/">Home</a></li>
                      <li><a href="/about">About Me</a></li>
                      <li><a href="/services">Services</a></li>
                      <li><a href="/works">Works</a></li>
                      <li><a href="/contact">Contact</a></li>
                    </ul>
                  </div>
                  <div className="col-md-6 d-none d-md-block  mr-auto">
                    <div className="tweet d-flex">
                      <span className="bi bi-twitter text-white mt-2 mr-3" />
                      <div>
                        <p><em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore. <br /> <a href="#">t.co/v82jsk</a></em></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 d-none d-md-block">
                    <h3>Hire Me</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiisexplicabo inventore. <br /> <a href="#">myemail@gmail.com</a></p>
                  </div>
                </div>
              </div>
            </div>
            <nav className="navbar navbar-light custom-navbar">
              <div className="container">
                <a className="navbar-brand" href="/">MyPortfolio.</a>
                <a href="#" className="burger" data-bs-toggle="collapse" data-bs-target="#main-navbar">
                  <span />
                </a>
              </div>
            </nav>
          </div>
        );
    }
}

export default Header;