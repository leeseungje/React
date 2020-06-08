import React, { Component } from "react";

class TOC extends Component {
    shouldComponentUpdate(newProps, newState){
        if(this.props.date === newProps.date){
            return false;
        }
        return true;
    }
    render() {
        var lists = [];
        var data = this.props.data;
        for (var i = 0; i < data.length; i++) {
            lists.push(<li key={data[i].id}>
            <a 
                data-id={data[i].id} 
                href={"/content/" + data[i].id + ".html"} 
                onClick={function(id, e){
                    e.preventDefault();
                    this.props.onChangePage(id);
                }.bind(this, data[i].id)}
            >{data[i].title}</a></li>)
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;