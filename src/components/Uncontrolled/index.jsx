import React, { Component } from 'react';

class Uncontrolled extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    const { lastName, firstName } = this.state;
    e.preventDefault();
    console.log(`${firstName} ${lastName}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="lastName"
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Uncontrolled;
