import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {

    render() {
        return (
            <h1>It works!</h1>
        );
    }
}

var app = document.getElementById('app');
ReactDOM.render(<Layout/>,app);
