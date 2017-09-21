import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default class Layout extends React.Component {
    
        constructor() {
            super();
            this.state = {name:'Will'};
        }
    
        /*
        getName() {
            return this.name;
        }
        */
    
        render() {

            setTimeout(() => {
                this.setState({ name:'BOB' });
              }, 1000)

            return (
                <div>
                <Header/>
                <h1>It's {this.state.name}</h1>
                <Footer/>
                </div>
            );
        }
    }