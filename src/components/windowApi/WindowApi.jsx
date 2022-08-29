import React from "react";
import ReactDOM from "react-dom";
import MeetAppProj from "../meetAppProj/MeetAppProj";


export default class MyWindowPortal extends React.Component {
constructor(props) {
    super(props);
    this.state = { win: null, el: null };
}

componentDidMount() {
    
    let el = document.createElement("div");
    el.id = "window-container";
    let win = window.open("", "", "width=600,height=400,");
     win.document.body.appendChild(el);
     this.setState({ win, el });
    
}

componentWillUnmount() {
    // this.state.win.close();
}

render() {
    
    const { el } = this.state;
    return el ? ReactDOM.createPortal(<MeetAppProj />, el) : null;
   
}


}