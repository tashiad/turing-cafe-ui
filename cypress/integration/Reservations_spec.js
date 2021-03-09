describe('Reservations Homepage', () => {
  it('Should display the correct header on load', () => {
    cy
      .visit('http://localhost:3000')
      .get('h1').should('have.text', 'Turing Cafe Reservations')
  })

  it('Should display the reservations form on load', () => {
    cy
      .visit('http://localhost:3000')
      .get('form input[type=text]')
      .get('form input[name=name]')
      .get('form input[name=date]')
      .get('form input[name=time]')
      .get('form input[name=number]')
      .get('form').contains('button', 'Make Reservation')
  })

  it('Should display existing reservations on load', () => {
    cy
      .intercept('http://localhost:3001/api/v1/reservations', {fixture: 'mock-resy-data.json'})
      .visit('http://localhost:3000')
      .get('.card:first').contains('Test 1')
  })

  it('Should be able to add a new reservation', () => {
    cy
      .intercept('POST', 'http://localhost:3001/api/v1/reservations', {
        statusCode: 200,
        body: {
          "id": 18939837,
          "name": "Test 4",
          "date": "12/13",
          "time": "6:30",
          "number": 2
        }
      })
      .intercept('http://localhost:3001/api/v1/reservations', {fixture: 'mock-resy-data.json'})
      .visit('http://localhost:3000')
      .get('form input[name=name]').type('Test 4').should('have.value', 'Test 4')
      .get('form input[name=date]').type('12/13').should('have.value', '12/13')
      .get('form input[name=time]').type('6:30').should('have.value', '6:30')
      .get('form input[name=number]').type('2').should('have.value', '2')
      .get('.res-button').click()
      .get('.card').contains('Test 4')
  })

  //add test for deleting a reservation.
})
