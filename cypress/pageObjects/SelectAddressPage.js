import { BasePage } from "../pageObjects/basePage";
export class  SelectAddressPage extends BasePage {

    static get cartCheckButton(){
        return cy.get('#mat-radio-42-input')
      }


      static get continueButton(){
        return cy.get("button[aria-label='Proceed to payment selection']");
      
      }
      

      static get ordersAndPayment(){
        return cy.get("button[aria-label='Show Orders and Payment Menu']");
      }
 
      static get savedadreses(){
        return cy.get("button[aria-label='Go to saved address page']");
      }
 
      
      static get checkAddresses(){
        return cy.get("mat-row");  
      }

     
}
 
