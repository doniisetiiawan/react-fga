import PropTypes from 'prop-types';
import React, { Component, createContext } from 'react';

export const ListContext = createContext();

export class ListProvider extends Component {
  static propTypes = {
    children: PropTypes.element,
  };

  state = {
    gists: [],
    status: 'initial',
  };

  componentDidMount() {
    this.fetchGists();
  }

  fetchGists = async () => {
    this.setState({
      gists: [],
      status: 'fetching',
    });

    try {
      const data = await
      fetch('https://api.github.com/users/gaearon/gists')
        .then(response => response.json());

      this.setState({
        gists: data,
        status: 'done',
      });
    } catch (error) {
      this.setState({
        status: 'error',
      });
    }
  };

  myLogAction = () => {
    console.log('This is similar to a Redux action');
  };

  render() {
    const { children } = this.props;

    return (
      <ListContext.Provider
        value={{
          myLogAction: this.myLogAction,
          ...this.state,
        }}
      >
        {children}
      </ListContext.Provider>
    );
  }
}
