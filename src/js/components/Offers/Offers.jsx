import React from "react";

const Offers = (props) => {

    let leftSideOffers=props.offers[0].offer_detail1.map((v,i)=>{
      return(
        <div key="i">
        <h3 class="n1">{v.title}</h3>
        <p>{v.description}</p>
        </div>
      )
    })
    let rightSideOffers=props.offers[0].offer_detail2.map((v,i)=>{
      return(
        <div key="i">
        <h3 class="n1">{v.title}</h3>
        <p>{v.description}</p>
        </div>
      )
    })

  return (
  <div>
    <div className="conatiner-fliud bg-light">
      <div className="container py-5">
          <h3 className="text-center">{props.offers[0].title}</h3>
        <div className="row">
          <div className="col-lg-4 col-sm-12">
          <div class="threee-col-left-content">
            {leftSideOffers}
              
          </div>
          </div>
          <div className="col-lg-4 col-sm-12">

          <div class="kc-elm kc-css-550131 kc_shortcode kc_single_image kc-pc-loaded" >

              <img src={props.offers[0].offer_img} class="" alt=""/>    
        </div>
            
          </div>
          <div className="col-lg-4 col-sm-12">
          <div class="threee-col-right-content">
            {rightSideOffers}
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Offers;
