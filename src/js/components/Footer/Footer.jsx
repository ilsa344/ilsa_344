import React from "react";

const Footer = (props) => {
  return <div className="main-footer">
    <div className="conatiner-fluid bg-color">
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-4">
          <div class="footer-content-123-inner-right">
            <h3>{props.footer[0]. contact_title}</h3>
            <p>{props.footer[0].Address[0]}<br/>
            {props.footer[0].Address[1]}<br/>
            {props.footer[0].Address[2]}</p>
            <p class="footer-content-123-inner-right-p">{props.footer[0].phone_no[0]}<a href="tel:+442036951157">{props.footer[0].phone_no[1]}</a></p>
            </div>
          </div>
          <div className="col-sm-8">
          <div class="footer-content-123-inner-left">
            <h3>{props.footer[1].contac_about_title}</h3>
            <p>{props.footer[1].description}</p>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
        	<div class="container">
            	<div class="row text-center">
                	
										<div class="column  col-sm-12 col-xs-12">
                    	<div class="copyright"><p>{props.footer[2].copyright}</p></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="scroll-to-top scroll-to-target" data-target="html"
         style={{"display": "block"}}><span class="fa fa-angle-up"></span></div>
  </div>;
};

export default Footer;
