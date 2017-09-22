import React from 'react';
import Title from "../title/Title"

export default class Header extends React.Component {

    handleChange(e) {
        const title = e.target.value;
        this.props.changedTitle(title);
    }

    render() {
        
        return(
            <div>
            <Title title ={this.props.title}/>
            <input onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }
}