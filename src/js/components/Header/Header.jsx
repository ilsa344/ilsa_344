import React from "react";

const Header = (props) => {

  console.log("header-array",props.header)
  let type=props.header[0].per_value.map((v,i)=>{
    return(
      <li key="i"><span><b>{v.type}</b> {v.investment}</span></li>
    )
  })
  let formOption1=props.header[1].form_question_options.map((v,i)=>{
    return(
      <option key="i">{v.option}</option>
    )
  })
  let formOption2=props.header[1].form_sum_options.map((v,i)=>{
    return(
      <option key="i">{v.option}</option>
    )
  })
  return (
    <div>
     
     <div className="header-bg" style={{backgroundImage:`url(${props.header[0].header_main_img})`}}>
     <div className="py-4 mt-5">
       <div className="container mt-5">
         <div className="row">
           <div className="col-md-7">
             <div class="content py-5" >
                   							
                <h2>{props.header[0].header_title}</h2>
                <div class="text">
                  <div class="v1-banner-main-outer">
                      <h1>{props.header[0].yearly_per[0]} <span class="h1-span-1">{props.header[0].yearly_per[1]} </span>{props.header[0].yearly_per[2]}</h1>
                    <div class="col-banner-an-123">
                      <ul class="list-5">
                        {type}
                      </ul>
                    </div>
                    
                  </div>
                </div>
                                
            <div class="link-box">
            <div class="offer-ban-123456">
              <img class="alignnone size-full" src={props.header[0].per_img} alt="" width="159" height="159"/>
              <img class="alignnone size-full top-arrow" src={props.header[0].arrow} alt="" width="19" height="34"/>
            </div>
              </div>
          </div>
  </div>
           <div className="col-5">
           <form className="bg-white p-4 d-md-block d-none">
           <h3>{props.header[1].title}</h3>
           <p class="text-below-h3-123 ">{props.header[1].description}</p>
  <div class="form-row">
    <div class="form-group col-md-6">
      <input type="text" class="form-control bg-light" id="inputEmail4" placeholder={props.header[1].form_name}/>
    </div>
    <div class="form-group col-md-6">
      <input type="text" class="form-control bg-light" id="inputPassword4" placeholder={props.header[1].form_phone}/>
    </div>
  </div>
  <div class="form-group">
    <input type="email" class="form-control bg-light" id="inputAddress" placeholder={props.header[1].form_emailAddress}/>
  </div>
  <div class="form-group">
  <select id="inputState" class="form-control bg-light">
        <option selected>{props.header[1].form_question}</option>
        { formOption1}
      </select>
  </div>
  <div class="form-group">
  <select id="inputState" class="form-control bg-light">
        <option selected>{props.header[1].form_sum}</option>
        {formOption2}
      </select>
  </div>
  
  
  <button type="submit" class="btn btn-green mt-2 form-control">{props.header[1].form_btn}</button>
</form>
           </div>
         </div>
       </div>
     </div>
     </div>
    </div>
  );
};

export default Header;
