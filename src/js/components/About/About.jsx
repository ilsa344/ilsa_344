import React from "react";

const About = (props) => {
  return <div>
    <div className="bg-light container-fluid">
      <div className="container  py-5">
        <div className="row">
          <div class="title-column col-lg-5 col-md-12 col-sm-12">
            <div class="inner-column">
              <div class="sec-title">
                <h2>{props.about[0].title}</h2>
                <div class="title-text"><p>
                {props.about[0].description}
                </p>
                <p>
                {props.about[0].description_part}
                </p>
                </div>

              </div>

              <div class="text"></div>
            </div>

          </div>
          <div class="video-column col-lg-7 col-md-12 col-sm-12">

          <div class="inner-column wow fadeInRight animated" data-wow-delay="600ms" data-wow-duration="1500ms" 
          style={{"visibility": "visible", "animation-duration": "1500ms", "animation-delay": "600ms", "animation-name": "fadeInRight"}}>

                        <div class="video-box">

                            <figure class="image">

                                <img src={props.about[0].about_img} alt="Image"/>

                            </figure>
                            

                        </div>

					</div>

				</div>
      </div>
    </div>
    
    </div>
  </div>;
};

export default About;
