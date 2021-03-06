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
            type='text' // change to date?
            placeholder='Date (mm/dd)'
            name='date'
            value={this.state.date}
            onChange={this.handleChange}
          />

          <input
            type='text' // change to time?
            placeholder='Time'
            name='time'
            value={this.state.time}
            onChange={this.handleChange}
          />

          <input
            type='number'
            placeholder='Number of guests'
            name='number'
            value={this.state.number}
            onChange={this.handleChange}
          />

          <button className="res-button" onClick={this.submitResy}>Make Reservation</button>
        </form>
      </>
    )
  }
}

export default Form
