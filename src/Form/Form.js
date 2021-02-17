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

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitResy = event => {
    event.preventDefault()
    const newResy = {
      id: Date.now(),
      ...this.state
    }
    this.props.addResy(newResy)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ name: '', date: '', time: '', number: '' })
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

        <button onClick={this.submitResy}>MAKE RESERVATION</button>
      </>
    )
  }
}

export default Form
