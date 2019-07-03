import React, { Component } from 'react';
import Form from 'react-jsonschema-form';

const schema = {
  type: 'object',
  properties: {
    firstName: { type: 'string', default: 'Dan' },
    lastName: { type: 'string', default: 'Abramov' },
  },
};

class JSONSchemaForm extends Component {
  handleSubmit = ({ formData }) => {
    console.log(formData);
  };

  render() {
    return (
      <Form schema={schema} onSubmit={this.handleSubmit} />
    );
  }
}

export default JSONSchemaForm;
