import { BasePage } from "../pageObjects/basePage";
export class  SavedPaymentMethodsPage extends BasePage {

   

      static get CreatePayment(){
        return cy.get("mat-expansion-panel");
      
      }

      static get name() {
        return cy.get("mat-form-field").contains("Name");
    }

    static get cardNumber() {
        return cy.get("mat-form-field").contains("Card Number");
    }

    static get expiryMonth() {
        return cy.get("#mat-input-3");
    }

    static get expiryYear() {
        return cy.get("#mat-input-4");
    }

    static get submitButton() {
        return cy.get("#submitButton");
    }

    static get validatePayment() {
        return cy.get('mat-row');
    }
    }
 
