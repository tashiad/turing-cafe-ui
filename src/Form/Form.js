import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  render() {
    return(
      <>
        <form>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
          />

          <input
            type='text'
            placeholder='Date'
            name='date'
            value={this.state.date}
            onChange={this.handleChange}
          />

          <input
            type='text'
            placeholder='Time'
            name='time'
            value={this.state.time}
            onChange={this.handleChange}
          />

          <input
            type='text'
            placeholder='Number of Guests'
            name='number'
            value={this.state.number}
            onChange={this.handleChange}
          />
        </form>

        <button onClick={this.submitIdea}>MAKE RESERVATION</button>
      </>
    )
  }
}

export default Form
