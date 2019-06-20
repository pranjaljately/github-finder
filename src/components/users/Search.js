import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    console.log(this.state.text);
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search users...'
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input
            className='btn btn-dark btn-block'
            type='submit'
            value='Seach'
          />
        </form>
      </div>
    );
  }
}

export default Search;
