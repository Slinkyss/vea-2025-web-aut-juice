import { BasePage } from "../pageObjects/basePage";
export class  OrderCompletionPage extends BasePage {


    static get checkPurchase() {
        return cy.get("mat-card");
    }
}
 
