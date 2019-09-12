describe('CCNotes Quotes', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });
  it('Renders', () => {
    cy.get('.quote').first().contains('Before you judge a man, walk a mile in his shoes. After that who cares?... He’s a mile away and you’ve got his shoes!');
  });
});
