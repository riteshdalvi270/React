import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default class Layout extends React.Component {
    
        constructor() {
            super();
            this.state = {title:"Welcome"};
        }

        changedTitle(title) {
            this.setState({title});
        }

        render() {
            return (
            
                <div>
                    <Header changedTitle={this.changedTitle.bind(this)} title={this.state.title}/>
                    <Footer/>
                </div>    
            )
        }
    }