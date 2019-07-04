import React from "react";

const HappyClients = (props) => {


  let cards=props.happy[0].client_data.map((v,i)=>{
    
    return(
      <div className="col-md-4" key="i">
      <div class="testimonial-inner-123">
        <p class="test-aut-123-img"><img src={v.client_img} alt=""/></p>
        <p class="test-aut-123-text">{v.client_description}</p>
        <p class="test-aut-123">{v.client_name}</p>
      </div>
      </div>
    )
  })

  let formsOption1=props.contact[0].form_question_options.map((v,i)=>{
    return(
      <option key="i">{v.option}</option>
    )
  })
  let formsOption2=props.contact[0].form_sum_options.map((v,i)=>{
    return(
      <option key="i">{v.option}</option>
    )
  })
  return <div id="Testimonials">
    <div className="container-fluid bg-light">
    <div className="container py-5">
      <div className="text-center">
      <h2>{props.happy[0].title}</h2>
      <p className="tiltle-below-test-head">{props.happy[0].description}</p>
      </div>
      <div className="row py-3">
        {cards}
      </div>
      <hr/>
      <div className="row py-3">
        <div className="col-lg-5">

        <form className="bg-white  p-5">
           <h3>{props.contact[0].title}</h3>
  <div class="form-row mt-3">
    <div class="form-group col-md-6">
      <input type="text" class="form-control bg-light" id="inputEmail4" placeholder={props.contact[0].form_name}/>
    </div>
    <div class="form-group col-md-6">
      <input type="text" class="form-control bg-light" id="inputPassword4" placeholder={props.contact[0].form_phone}/>
    </div>
  </div>
  <div class="form-group">
    <input type="email" class="form-control bg-light" id="inputAddress" placeholder={props.contact[0].form_emailAddress}/>
  </div>
  <div class="form-group">
  <select id="inputState" class="form-control bg-light">
        <option selected>{props.contact[0].form_question}</option>
        {formsOption1}
      </select>
  </div>
  <div class="form-group">
  <select id="inputState" class="form-control bg-light">
        <option selected>Investment sum</option>
        {formsOption2}
      </select>
  </div>
  
  
  <button type="submit" class="btn btn-green mt-2 form-control">{props.contact[0].form_btn}</button>
</form>
        </div>
        <div className="col-lg-7 " >

        <div class="kc-elm kc-css-483473 kc_text_block Forminbetweenconetnt-right kc-pc-loaded mt-5" >
        <p class="big-aaa">{props.contact[1].reach_out}</p>
        <p>{props.contact[1].goals}</p>
        <p class="big-aaa">{props.contact[1].phone_description}.</p>
        <p>{props.contact[1].phone_no[0]} <a href="tel:+442036951157">{props.contact[1].phone_no[1]}</a></p>
        <p class="big-aaa">{props.contact[1].GET_QUICKLY}</p>
        <p>{props.contact[1].fill_description}</p>
        </div>
        </div>
      </div>
    </div>
    </div>
   
  </div>;
};

export default HappyClients;
