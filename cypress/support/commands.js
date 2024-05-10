import { idLogin } from "../e2e/login/login-id";

Cypress.Commands.add('login', (username, password) => {
    cy.visit('/')

    cy.get(idLogin.input_username)
        .should('is.visible')
        .type(username)
        .should('have.value', username)

    cy.get(idLogin.input_password)
        .should('is.visible')
        .type(password)
        .should('have.value', password)

    cy.get(idLogin.btn_login)
        .should('is.visible')
        .click()
});