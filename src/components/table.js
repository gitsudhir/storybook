import React from 'react'
/**
 *take input from user and print the table of that.
 * @class PrintTable
 * @extends {React.Component}
 */
class PrintTable extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { number: 0 };
        // this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return <div>
            <label htmlFor={'inputTable'}>Enter a number</label>
            <input name={'inputTable'} onChange={(event) => { this.setState({ number: +event.target.value }) }} />
            {/* <p>Hi {this.props.number}</p> */}
            {
                [...new Array(10)].map((ele, ind) => {
                    return <p key={ind}>{this.state.number}*{ind + 1}={this.state.number * (ind + 1)}</p>
                })
            }
        </div>
    }
}

export default PrintTable;