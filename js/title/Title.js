import React from 'react';
import ReactDom from 'react-dom';

export default class Title extends React.Component {
    
    render() {
        return(
            <h1>Welcome {this.props.title}</h1>
        );
    }
}