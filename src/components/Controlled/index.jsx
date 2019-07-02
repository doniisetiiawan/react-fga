import React, { Component } from 'react';

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: 'Dan',
      lastName: 'Abramov',
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
    const { lastName, firstName } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default index;
