describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://cypresstesting7-001-site1.jtempurl.com/', {
      auth: {
        username: '11190287',
        password: '60-dayfreetrial',
      },
    })
  })
})