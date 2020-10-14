import React from 'react';
import AnimatedLoader from './AnimationLoader';

class Loader extends React.Component {
  state = {
    timer: null,
  };

  componentDidMount = () => {
    const timeoutFunc = this.props.onTimeout || (() => {});
    if (this.props.timeout) {
      this.timer = setTimeout(timeoutFunc, this.props.timeout);
    }
  };

  componentWillUnmount = () => {
    if (this.timer) {
      clearInterval(this.timer);
    }
  };

  render() {
    return (
      <div className="loading loading-full">
        <div className="loading-header">.....</div>
        <div>
          <AnimatedLoader small />
        </div>
      </div>
    );
  }
}

export default Loader;
