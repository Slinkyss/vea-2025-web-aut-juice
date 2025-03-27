import { BasePage } from "../pageObjects/basePage";

export class RegistrationPage extends BasePage {
 //
  

  
  static get emailField(){
    return cy.get("#emailControl")
  }
  static get passwordField(){
    return cy.get("#passwordControl")
  }
  static get repatPasswordField(){
    return cy.get("#repeatPasswordControl")
  }

  static get securityQuestion() {
    return cy.get('mat-select[name="securityQuestion"]');
  }

  static get favoritePetChoice(){
    return cy.get('#mat-option-9')
  }

  static get securityQuestionAnswer(){
    return cy.get('#securityAnswerControl')
  }
  static get registerButton(){
    return cy.get('#registerButton')
  }
}