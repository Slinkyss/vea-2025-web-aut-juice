import { BasePage } from "../pageObjects/basePage";
export class  PaymentOptionsPage extends BasePage {

    static get card() {
        return cy.get("#mat-radio-46");
    }

    static get continueButton(){
        return cy.get("button[aria-label='Proceed to review']");
      
      }
    

      static get paymentOptions(){
        return cy.get("button[aria-label='Go to saved payment methods page']");
      
      }
    }
 
