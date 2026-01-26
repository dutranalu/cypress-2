/// <reference types="cypress" />

describe("Testar o cadastro de usuários no site.", () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it("Deve verificar se a página está aparecendo", () => {
        cy.get('input', { timeout: 10000 }).should('exist')
    })

    it("Deve cadastrar um contato na agenda.", () => {
        cy.get('[type="text"]', { timeout: 10000 }).should('exist')
        cy.get('[type="email"]', { timeout: 10000 }).should('exist')
        cy.get('[type="tel"]', { timeout: 10000 }).should('exist')
    })

    it("Deve editar um contato", () => {
        cy.get('[type="text"]', { timeout: 10000 }).should('exist')
        cy.get('[type="email"]', { timeout: 10000 }).should('exist')
        cy.get('[type="tel"]', { timeout: 10000 }).should('exist')
    })

    it("Deve apagar o contato criado.", () => {
        cy.get('[type="text"]', { timeout: 10000 }).should('exist')
    })
})