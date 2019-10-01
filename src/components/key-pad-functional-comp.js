import React from "react";
function KeyPad(props) {
    const buttonList = ['(', 'C', 'CE', ')', 1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 0, '.', '=', '/'].map((ele, ind) =>
        <button key={ind} name={ele} onClick={() => props.buttonPressed(ele)}>
            {ele}
        </button>
    )
    return (
        <div className="buttons">
            {buttonList}
        </div>
    )
}

export default KeyPad;