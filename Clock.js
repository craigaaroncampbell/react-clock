import React from 'react';
import moment from  'moment';
import { createStore } from 'redux';

function currentTime(time='getting the current time!!!', action) {
    switch(action.type) {
      case 'TICK':
        time = moment().format('hh:mm:ss');
        return time;
      default:
        return time;
    }
}

let store = createStore(currentTime);

let times;
let Clock = React.createClass({
  componentWillMount: function() {
    store.subscribe(() => {
      var state = store.getState();
      this.setState({
        time: state
      })
    });
  },

  componentDidMount: function() {
    times = setInterval(() => store.dispatch({type: 'TICK'}) , 1000);
  },

  componentWillUnmount: function() {
    clearInterval(times);
  },

  getInitialState: function() {
    return {
      time: store.getState()
    }
  },

  render: function(props) {
    return (
      <div>
        <h1>
          Greetings, {this.props.user}!
        </h1>
        <h2>
          The current time is:
        </h2>
        <h3>{this.state.time}</h3>
        <div className='clock-face'>
          <div className="hand hour-hand" style={{transform: 'rotate(' + ((parseInt(this.state.time.slice(0,2)) - 3 +  parseInt(this.state.time.slice(3,5))/60 + (parseInt(this.state.time.slice(-2))) / 3600) * 30) + 'deg)'}} >
          </div>

          <div className="hand minute-hand" style={{transform: 'rotate(' + ((parseInt(this.state.time.slice(3,5)) - 15 + (parseInt(this.state.time.slice(-2))) / 60) * 6) + 'deg)'}} >
          </div>

          <div className="hand second-hand" style={{transform: 'rotate(' + (parseInt(this.state.time.slice(-2)) - 15)*6 + 'deg)'}} >
          </div>

          {this.props.hours.map(function(hour){
            return <div key={'h' + hour} className={'hour'+ hour + ' hour'}><p>{hour}</p></div>
          })}

          {this.props.minutes.map(function(minute){
            return <div key={'m' + minute} className={'minute'+ minute + ' minute'}></div>
          })}

        </div>
      </div>
    );
  }
});

export default Clock;
