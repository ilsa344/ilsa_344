import React from "react";

const Calculator = (props) => {


  let options=props.calc[4].form_input_options.map((c,l)=>{
   return(
     <option key="l">{c.option_detail}</option>
   )
    
  })


  return <div>
    <div className="container py-5">
      <div className="row">
      <div class="kc-elm kc-css-206765  col-sm-8">
        <div class="kc-col-container">
          <div class="kc-elm kc-css-421817 kc_text_block kc-pc-loaded" >
            <h2 class="vc_custom_heading sectionHeading1" style={{"text-align": "left"}}>{props.calc[0].title}</h2>
            <p class="cal-text-above-123">{props.calc[0].description1}</p>
            <p class="cal-text-above-123">{props.calc[0].description2}</p>

          </div>
        </div>
      </div>

      <div className="col-sm-4">
      <form className="cal-form px-3 py-2" style={{"background":"#dcdcdc"}}>
          <div class="form-row">
    <div class="form-group col-md-6">
    <label for="inputEmail4">{props.calc[1]. form_input_title}</label>
      <input type="text" class="form-control lg-white" id="inputEmail4" />
    </div>
    <div class="form-group col-md-6">
      <label htmlFor="">{props.calc[2]. form_input_title}</label>
      <input type="text" class="form-control lg-white" id="inputPassword4" />
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
    <label for="inputEmail4">{props.calc[3].form_input_title}</label>
    <select id="inputState" class="form-control lg-white">
        {options}
      </select>
    </div>
    <div class="form-group col-md-6">
      <label htmlFor="">{props.calc[5]. form_input_title}</label>
      <input type="text" class="form-control lg-white" id="inputPassword4"/>
    </div>
  </div>

  
  
  <button type="submit" class="btn btn-outline-dark btn-sm  mt-2">{props.calc[6].form_btn}</button>
  
</form>
<div className="amount px-3 py-2">
  <label htmlFor="">{props.calc[6].Interest_Amount}</label> <br/>
     <h4 className="text-white">{props.calc[6].percentage}</h4>

  </div>
      </div>
      </div>
    </div>
  </div>;
};

export default Calculator;
