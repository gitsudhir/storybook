import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Table from '../components/table'
import App from '../components/App'
export default {
    title: 'Hello',
};

export const TableReact = () =>  <Table number = {5}/>
export const Calculator = () =>  <App />
export const helloWorld = () => {
    const pStyle = {};
    pStyle.color = "red";
    return (
        <div>
            <p style={{ "color": "green" }}>Hi, I am sudhir kumar</p>
            <p style={{ "color": "blue" }}>Start Learning React JS from Scratch</p>
            <h3 style={pStyle}>Hello World</h3>
        </div>);
}
  
;
