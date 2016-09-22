import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';
import './styles.css';

let hours = [];
let minutes = [];

for (var i = 1; i < 60; i++) {
  if (i < 13) hours.push(i);
  if (i%5) minutes.push(i);
}


ReactDOM.render(<Clock user="Craig" hours={hours} minutes={minutes}/>, document.getElementById('root'));
