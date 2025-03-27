import { BasePage } from "../pageObjects/basePage";
export class BasketPage extends BasePage {
 


    static get cechkoutButton(){
        return cy.get('#checkoutButton')
      }




}
