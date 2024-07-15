describe('Keeper to do list', () => {
    beforeEach(() => {
   
    cy.visit('http://localhost:8000/')
   })


  it('adds a note when submit button is clicked', () => {
    const testTitle = 'Test Title';
    const testContent = 'Test Content';

    // Expande a textarea
    cy.get('textarea[name="content"]').click();
    
    // Digita o título
    cy.get('input[name="title"]').type(testTitle);
    
    // Digita o conteúdo
    cy.get('textarea[name="content"]').type(testContent);
    
    // Clica no botão de adicionar
    cy.get('button').click();

    cy.contains(testTitle).should('be.visible');
    cy.contains(testContent).should('be.visible');

});
});

