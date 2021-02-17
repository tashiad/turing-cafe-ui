import React, { Component } from 'react'
import './App.css'
import Reservations from '../Reservations/Reservations'
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      resData: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(resys => this.setState({ resData: resys }))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <Reservations resData={this.state.resData}/>
        </div>
      </div>
    )
  }
}

export default App
