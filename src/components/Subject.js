import React, { Component } from "react";

class Subject extends Component {
    render() { // 함수 function 생략
    return ( // 
        <header>
            <h1><a href="/" onClick={function(e) {
                e.preventDefault();
                this.state.mode = "welcome";
            }.bind(this)}>{this.props.title}</a></h1>
            {this.props.sub}
        </header>
    );
    }
}

export default Subject;