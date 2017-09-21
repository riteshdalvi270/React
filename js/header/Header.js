import React from 'react';
import ReactDom from 'react-dom';
import Title from "../title/Title"

export default class Header extends React.Component {
    
    render() {
        return(
            <Title title ={this.props.title}/>
        );
    }
}