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

  it('Should be able to fill out the form inputs', () => {
    cy
      .visit('http://localhost:3000')
      .get('form input[name=name]').type('Tashia').should('have.value', 'Tashia')
      .get('form input[name=date]').type('05/30').should('have.value', '05/30')
      .get('form input[name=time]').type('6:45').should('have.value', '6:45')
      .get('form input[name=number]').type('4').should('have.value', '4')
  })

  it('Should be able to add a new reservation', () => {
    cy
      .visit('http://localhost:3000')
      .get('form input[name=name]').type('Tashia').should('have.value', 'Tashia')
      .get('form input[name=date]').type('05/30').should('have.value', '05/30')
      .get('form input[name=time]').type('6:45').should('have.value', '6:45')
      .get('form input[name=number]').type('4').should('have.value', '4')
      .get('button').click()
      .get('.card').contains('Tashia')
  })
})
