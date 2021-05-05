import React from 'react';

class Footer extends React.Component{
    render(){
        return (
        <div>
       <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <p className="mb-1">© Copyright MyPortfolio. All Rights Reserved</p>
              <div className="credits">
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
            <div className="col-sm-6 social text-md-end">
              <a href="#"><span className="bi bi-twitter" /></a>
              <a href="#"><span className="bi bi-facebook" /></a>
              <a href="#"><span className="bi bi-instagram" /></a>
              <a href="#"><span className="bi bi-linkedin" /></a>
            </div>
          </div>
        </div>
      </footer>
        </div>
        );
    }
}

export default Footer;