import React from "react";

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
                <h1>It's {this.getName()}</h1>
            );
        }
    }