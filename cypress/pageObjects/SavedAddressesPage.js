import { BasePage } from "../pageObjects/basePage";
export class  SavedAddressesPage extends BasePage {

    static get savedadreses(){
        return cy.get("button[aria-label='Add a new address']");
      }
 
  
}
 
