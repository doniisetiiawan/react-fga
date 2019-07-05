import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class Form extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      value,
    });
  };

  render() {
    const { value } = this.state;
    const { onSubmit } = this.props;

    return (
      <div>
        <input
          type="text"
          value={value}
          onChange={this.handleChange}
        />
        <button onClick={() => onSubmit(value)}>+
        </button>
      </div>
    );
  }
}

export default Form;
