import React from 'react';
import moment from  'moment';
var times;
var Clock = React.createClass({
  componentDidMount: function() {
    times = setInterval(this.getTime, 1000);
  },

  componentWillUnmount: function() {
    clearInterval(times);
  },

  getTime: function() {
    var time = moment().format('hh:mm:ss');
    this.setState({
      time: time
    });
  },

  getInitialState: function() {
    return {
      time: "getting current time..."
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
            return <div key={hour} className={'hour'+ hour + ' hour'}><p>{hour}</p></div>
          })}

        </div>
      </div>
    );
  }
});

export default Clock;
