import React from 'react';
import ReactDom from 'react-dom';
import Title from "../title/Title"

export default class Header extends React.Component {

    render() {
        this.props.changedTitle("New Title");
        return(
            <div>
            <Title title ={this.props.title}/>
            <input />
            </div>
        );
    }
}