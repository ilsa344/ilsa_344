import React, { Component } from "react";
import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import  BlogView from "./BlogView/BlogView"
import About from "./About/About";
import Offers from "./Offers/Offers";
import Clients from "./Clients/Clients";
import Calculator from './Calculator/Calculator';
import HappyClients from "./HappyClients/HappyClients";
import Map from "./Map/Map";
import Footer from './Footer/Footer';
import data from "./data"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       data:data
    };
  };

  render() {
    return (
      <div >
        <Nav nav={this.state.data[0].nav}/>
        <Header header={this.state.data[0].header}/>
        <BlogView blog={this.state.data[0].investments_per}/>
        <About about={this.state.data[0].about_company}/>
        <Offers offers={this.state.data[0].offer}/>
        <Clients clients={this.state.data[0].capital_protection}/>
        <Calculator calc={this.state.data[0].Compound_Interest_Calculator}/>
        <HappyClients happy={this.state.data[0]. Happy_Clients} contact={this.state.data[0].contact_detail}/>
        <Map/>
        <Footer footer={this.state.data[0].footer_detail}/>
      </div>
    );
  }
}
export default App;
