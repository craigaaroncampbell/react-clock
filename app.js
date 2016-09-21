import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';
import './styles.css';

ReactDOM.render(<Clock user="Craig" hours={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}/>, document.getElementById('root'));
