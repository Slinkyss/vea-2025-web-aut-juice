import { BasePage } from "../pageObjects/basePage";
export class  DeliveryMethodPage extends BasePage {
 

        static get standardDelivery() {
            return cy.get("mat-row").contains("Standard Delivery");
        }
    
        
    
   
      static get continueButton(){
        return cy.get("button[aria-label='Proceed to delivery method selection']");
      
      }
}