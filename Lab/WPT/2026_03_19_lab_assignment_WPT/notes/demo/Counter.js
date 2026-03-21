const { Component } = require("react");


export default class Counter extends Component {

    constructor(props) {
        super(props);
        //bind
        this.btnHandler = this.btnHandler.bind(this);
        this.i = this.props.num1; // instance 
        //this.cnt = 0;// instance 
        this.state = { cnt: 0 }// state variable 
        // react v Dom 
    }

    btnHandler() {
        this.i++;
        this.setState({ cnt: this.i });// 
    }


    render() {

        return <>

            <p> Count  {this.state.cnt}</p>
            <button onClick={this.btnHandler}>Click </button>
            {/*  // btn.btnHandler() */}

        </>
    }






}