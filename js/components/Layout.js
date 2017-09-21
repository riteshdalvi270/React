import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default class Layout extends React.Component {
    
        constructor() {
            super();
            this.name = "Will";
        }
    
        getName() {
            return this.name;
        }
    
        render() {
            return (
                <div>
                <Header/>
                <h1>It's {this.getName()}</h1>
                <Footer/>
                </div>
            );
        }
    }