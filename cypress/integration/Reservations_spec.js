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

  // it('Should show an error message for a server side error for all movies API', () => {
  //   cy
  //     .intercept({
  //       method: 'GET',
  //       url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
  //     },
  //     {
  //       statusCode: 500
  //     })
  //     .visit('http://localhost:3000')
  //     .get('.error-message').contains('h2', 'Unable to find movies.')
  // })
  //
  // it('Should be able to search by movie title', () => {
  //   cy
  //     .visit('http://localhost:3000')
  //     .get('.input-field').type('war')
  //     .get('.search-button').click()
  //     .get('.poster:first').contains('h2', 'Onward')
  //     .get('.poster').should('not.contain', 'Mulan')
  // })
  //
  // it('Should be able to filter by minimum movie rating', () => {
  //   cy
  //     .visit('http://localhost:3000')
  //     .get('.input-field').type('6')
  //     .get('.search-button').click()
  //     .get('.poster').should('not.contain', 'Mulan')
  // })
})
