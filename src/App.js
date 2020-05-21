import React, { Component } from "react";
import TOC from "./components/TOC"
import Content from "./components/Content"
import Subject from "./components/Subject"
import "./App.css";

class App extends Component {
  constructor(props){ // 제일 먼저 실행 될때 초기화
    super(props);
    this.state = {
      mode:"read",
      seleted_content_id:2,
      subject:{title:"WEB", sub:"world wide web"},
      welcome:{title:"Welcome", desc:"Hello, React!!"},
      contents:[
        {id:1, title:"HTML", desc:"HTML is HyperText..."},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"Javascript", desc:"Javascript is for interactive..."}
      ]
    }
  }
  render() {
    var _title, _desc = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      for(var i = 0; i < this.state.contents.length; i++) {
        var data = this.state.contents[i];
        if(data.id === this.state.seleted_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
      }
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:"welcome"})
          }.bind(this)}
        >
        </Subject>
        <TOC onChangePage={function(){
          this.setState({
            mode:"read",
            seleted_content_id: 0
          })
        }.bind(this)}
        data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
