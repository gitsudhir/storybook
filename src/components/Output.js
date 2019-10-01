import React, { Component } from "react";
import Jump from 'react-reveal/Fade';
export default class KeyPad extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='result'>
                <Jump top big cascade>
                    <p>{this.props.result}</p>
                </Jump>

            </div>
        );
    }
}