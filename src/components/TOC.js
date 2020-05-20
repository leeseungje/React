import React, { Component } from "react";

class TOC extends Component {
    render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;
        for (i=0; i < data.length; i++) {
            lists.push(<li key={data[i].id}><a href={"/content/" + data[i].id + ".html"}>{data[i].title}</a></li>)
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