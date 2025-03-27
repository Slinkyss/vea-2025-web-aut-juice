import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton(){
    return cy.get("#navbarAccount")
  }

  static get accountButton(){
    return cy.get("#navbarAccount")
  }

  static get loginButton(){
    return cy.get("#navbarLoginButton")
  }
  static get userProfileMenuButton() {
    return cy.get("button[aria-label='Go to user profile']");
  }

  static get searchOption() {
    return cy.get("#searchQuery");
  }

  static get searchField() {
    return cy.get("#mat-input-0");
  }

//   //lemon scenarijs nepareizi sapratu uzdevumu ieliku cart nevis aspskatijos informaciju
//   static get LemonButton(){
//     return cy.get("button[aria-label='Add to Basket']");
//   }

   static get cartButton(){
    return cy.get("button[aria-label='Show the shopping cart']");
   }

//   static get checkProduct(){
//     return cy.get("mat-dialog-container");
//   }
// 

//lemon search
static get LemonButton(){
     return    cy.get('.product img[src="assets/public/images/products/lemon_juice.jpg"]')
    }

static get checkProduct(){
  return cy.get("mat-dialog-container")
}

//500ml search each
static get eggFruitButton(){
  return    cy.get('.product img[src="assets/public/images/products/eggfruit_juice.jpg"]')
}

static get closeCard(){
  return cy.get("button[aria-label='Close Dialog']");

  
}

static get strawButton(){
  return    cy.get('.product img[src="assets/public/images/products/strawberry_juice.jpeg"]')
}

// create scenario
static get kingButton(){
  return    cy.get('.product img[src="assets/public/images/products/fan_facemask.jpg"]')
}


static get review() {
  return cy.get('mat-expansion-panel[aria-label="Expand for Reviews"]');
}

//make a review

static get straw100button(){
  return    cy.get('.product img[src="assets/public/images/products/raspberry_juice.jpg"]')
}

static get reviewField(){
  return cy.get('textarea[aria-label="Text field to review a product"]');
}

static get submitButton(){
  return cy.get("button[aria-label='Send the review']");

}


//validate amount 
static get validateCount(){
  return cy.get("div.product");

}


static get changeAmount(){
  return cy.get('mat-select');
}

static get changeAmountClick(){
  return cy.get('mat-option');
}



// Buy t shirt
static get buyGirlTshirt(){
  return cy.get("button[aria-label='Add to Basket']");

}

}
