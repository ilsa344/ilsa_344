import React from "react";

const Clients = (props) => {
  return <div>
    <div className="container py-5">
    <h3 class="we-hel">{props.clients[0].title[0]}<strong>{props.clients[0].title[1]}</strong>.</h3>

    <div className="row py-3">
      <div className="col-lg-6">
      <div class="kc-elm kc-css-877887 kc_text_block kc-pc-loaded" >
        <p>{props.clients[0].description1}</p>
        <p>{props.clients[0].description2}</p>
        <p>{props.clients[0].description3}<br/>
        </p>
</div>
      </div>
      <div className="col-lg-6">
      <div class="kc-elm kc-css-918453 kc_shortcode kc_single_image">

<img src={props.clients[0].capital_protection_img} class="" alt=""/>    </div>
      </div>
    </div>
    </div>
    <hr/>
  </div>;
};

export default Clients;
