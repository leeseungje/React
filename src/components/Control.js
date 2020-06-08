import React, { Component } from "react";

class Control extends Component {
    render() { // 함수 function 생략
        return ( // 
            <ul>
                <li><a href="/create" onClick={function(e){
                    e.preventDefault();
                    this.props.onChageMode("create")
                }.bind(this)}>create</a></li>
                <li><a href="/update" onClick={function(e){
                    e.preventDefault();
                    this.props.onChageMode("update")
                }.bind(this)}>update</a></li>
                <li><input onClick={function(e){
                    e.preventDefault();
                    this.props.onChageMode("delete")
                }.bind(this)} type="button" value="delete"></input></li>
            </ul>
        );
    }
}

export default Control;