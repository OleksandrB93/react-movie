import React, { Component } from 'react';
import Switch from 'react-switch';

export default class SwitchExample extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <label>
        <span></span>
        <Switch
          onChange={this.handleChange}
          checked={this.state.checked}
          height={17}
          width={40}
          onHandleColor={'#ffffff'}
          offHandleColor={'#2f2f2f'}
          onColor={'#ffa200'}
          offColor={'#00ccff'}
          uncheckedIcon={false}
          checkedIcon={true}
        />
      </label>
    );
  }
}
