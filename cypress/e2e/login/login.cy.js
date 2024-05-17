import { idLogin } from "./login-id"; 

describe('Testes referente a tela de login da aplicação', () => {
    it('Valida o login com sucesso', () => {
        cy.login('standard_user', 'secret_sauce')

        cy.url()
            .should('be.equal', 'https://www.saucedemo.com/inventory.html')

        cy.get('#contents_wrapper').should('be.visible')
    });

    it('Valida o login com credenciais inválidas', () => {
        cy.login('incorrrect_user', 'invalid_sauce')

        cy.get('[data-test="error"]')
            .should('have.a.text', 'Epic sadface: Username and password do not match any user in this service')
    });

    it('Valida o login com campos em branco', () => {
        cy.visit('/')

        cy.get(idLogin.btn_login).click()

        cy.get('[data-test="error"]')
            .should('have.a.text', 'Epic sadface: Username is required')

        cy.get(idLogin.input_username).type('standard_user')
        cy.get(idLogin.btn_login).click()

        cy.get('[data-test="error"]')
            .should('have.a.text', 'Epic sadface: Password is required')
    });
});