import { BasePage } from "../pageObjects/basePage";
export class  OrderSummaryPage extends BasePage {


    static get continueButton(){
        return cy.get("button[aria-label='Complete your purchase']");
      
      }
   
}
 
