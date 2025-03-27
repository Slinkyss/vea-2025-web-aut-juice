import { BasketPage } from "../pageObjects/BasketPage";
import { CreateAddressPage } from "../pageObjects/CreateAddressPage";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethodPage";
import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { OrderCompletionPage } from "../pageObjects/OrderCompletionPage";
import { OrderSummaryPage } from "../pageObjects/OrderSummaryPage";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionsPage";
import { RegistrationPage } from "../pageObjects/RegistrationPage";
import { SavedAddressesPage } from "../pageObjects/SavedAddressesPage";
import { SavedPaymentMethodsPage } from "../pageObjects/SavedPaymentMethodsPage";
import { SelectAddressPage } from "../pageObjects/SelectAddressPage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type("demo");
      // Set password value to "demo"
      LoginPage.passwordField.type("demo");
      // Click Log in
      LoginPage.loginButtonClick.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.userProfileMenuButton.should("contain.text", "demo");
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.notYetACustomerLink.click();
      // Find - how to generate random number in JS
          const randomNumber = Math.floor(Math.random() * 9999) + 1000
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
        let email = "email_" + randomNumber + "@inbox.lv"
      // Save that email address to some variable
      RegistrationPage.emailField.type(email);
      // Fill in password field and repeat password field with same password
     RegistrationPage.passwordField.type('parole123');
     RegistrationPage.repatPasswordField.type('parole123');
      // Click on Security Question menu
      RegistrationPage.securityQuestion.click();
      // Select  "Name of your favorite pet?"
      RegistrationPage.favoritePetChoice.click();
      // Fill in answer
      RegistrationPage.securityQuestionAnswer.type('Suns');
      // Click Register button
      RegistrationPage.registerButton.click();
      // Set email value to previously created email
      LoginPage.emailField.type(email);
      // Set password value to previously used password value
      LoginPage.passwordField.type('parole123');
      // Click login button
      LoginPage.loginButtonClick.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.userProfileMenuButton.should("contain.text", email);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      HomePage.searchOption.click()
      // Search for Lemon
      HomePage.searchField.type("Lemon").type("{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.LemonButton.click();
      // Validate that the card (should) contains "Sour but full of vitamins."
       HomePage.checkProduct.should("contain.text", "Sour but full of vitamins.");
    });

    it("search and validate lemon with 500ml", () => {
    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    // Click on search icon
     HomePage.searchOption.click()
    // Search for 500ml
    HomePage.searchField.type("500ml").type("{enter}");
    // Select a product card - Lemon Juice (500ml)
    HomePage.LemonButton.click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.checkProduct.should("contain.text", "Sour but full of vitamins.");
    });

    it("Search and validate Lemon", () => {
    // Create scenario - Search 500ml and validate cards
    // Click on search icon
    HomePage.searchOption.click()
    // Search for 500ml
    HomePage.searchField.type("500ml").type("{enter}");
    // Select a product card - Eggfruit Juice (500ml)
    HomePage.eggFruitButton.click();
    // Validate that the card (should) contains "Now with even more exotic flavour."
    HomePage.checkProduct.should("contain.text", "Now with even more exotic flavour.");
    // Close the card
    HomePage.closeCard.click();
    // Select a product card - Lemon Juice (500ml)
    HomePage.LemonButton.click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.checkProduct.should("contain.text", "Sour but full of vitamins.");
    // Close the card
    HomePage.closeCard.click();
    // Select a product card - Strawberry Juice (500ml)
    HomePage.strawButton.click();
    // Validate that the card (should) contains "Sweet & tasty!"
    HomePage.checkProduct.should("contain.text", "Sweet & tasty!");

  });

  it("Read a review", () => {
    // Create scenario - Read a review
    HomePage.searchOption.click()
    // Click on search icon
    // Search for King
    HomePage.searchField.type("King").type("{enter}");
    // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
    HomePage.kingButton.click();
    // Click expand reviews button/icon (wait for reviews to appear)
    HomePage.review.click();
    // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
    HomePage.checkProduct.should("contain.text", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
  });

  it("Make a review", () => {
    // Create scenario - Add a review
    // Click on search icon
    HomePage.searchOption.click()
    // Search for Raspberry
    HomePage.searchField.type("Raspberry").type("{enter}");
    // Select a product card - Raspberry Juice (1000ml)
    HomePage.straw100button.click();
    // Type in review - "Tastes like metal"
    cy.wait(1000);
    HomePage.reviewField.type("Tastes like metal");
    // Click Submit
    HomePage.submitButton.click();
    // Click expand reviews button/icon (wait for reviews to appear)
    HomePage.review.click();
    // Validate review -  "Tastes like metal"
    HomePage.checkProduct.should("contain.text", "Tastes like metal");
  });

  it("Validate amount", () => {
    // Create scenario - Validate product card amount

    // Validate that the default amount of cards is 12
    HomePage.validateCount.should("have.length",12);
    // Change items per page (at the bottom of page) to 24
    HomePage.changeAmount.click();
    // Validate that the amount of cards is 24
    HomePage.changeAmountClick.contains("24").click();
    HomePage.validateCount.should("have.length",24);
    // Change items per page (at the bottom of page) to 36
    HomePage.changeAmount.click();
    HomePage.changeAmountClick.contains("36").click();
    HomePage.validateCount.should("have.length",36);
    // Validate that the amount of cards is 35
  });

  it("Buy Girlie T-shirt", () => {
    // Create scenario - Buy Girlie T-shirt
    // Click on search icon
    HomePage.searchOption.click()
    // Search for Girlie
    HomePage.searchField.type("Girlie").type("{enter}");
    // Add to basket "Girlie"
    HomePage.buyGirlTshirt.click();
    // Click on "Your Basket" button
    HomePage.cartButton.click();
    // Create page object - BasketPage
    // Click on "Checkout" button
    BasketPage.cechkoutButton.click();
    // Create page object - SelectAddressPage

    // Select address containing "United Fakedom"
    SelectAddressPage.cartCheckButton.click();
    // Click Continue button
    SelectAddressPage.continueButton.click();
    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
    DeliveryMethodPage.standardDelivery.click();
   
    // Click Continue button
    DeliveryMethodPage.continueButton.click();

    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
    PaymentOptionsPage.card.click();
    // Click Continue button
    PaymentOptionsPage.continueButton.click();
    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
    OrderSummaryPage.continueButton.click();
    // Create page object - OrderCompletionPage
    OrderCompletionPage.checkPurchase.should("contain.text","Thank you for your purchase!");
    // Validate confirmation - "Thank you for your purchase!"
  });

  it("Add address", () => {
    // Create scenario - Add address
    // Click on Account
    HomePage.accountButton.click();
    // Click on Orders & Payment
    SelectAddressPage.ordersAndPayment.click();
    // Click on My saved addresses
    SelectAddressPage.savedadreses.click();
    // Create page object - SavedAddressesPage
    // Click on Add New Address
    SavedAddressesPage.savedadreses.click();
    // Create page object - CreateAddressPage
    // Fill in the necessary information
    CreateAddressPage.country.type("Latvija");
    CreateAddressPage.name.type("Daniels");
    CreateAddressPage.mobileNumber.type("12345678");
    CreateAddressPage.zipCode.type("lv2222");
    CreateAddressPage.address.type("Latvija");
    CreateAddressPage.city.type("Riga");
    CreateAddressPage.state.type("Kurzeme");
    CreateAddressPage.submitButton.click();
    // Click Submit button
    SelectAddressPage.checkAddresses.should("contain.text", "Daniels");
    // Validate that previously added address is visible
  });

  it.only("Add payment", () => {
    // Create scenario - Add payment option
    // Click on Account
    HomePage.accountButton.click();
    // Click on Orders & Payment
    SelectAddressPage.ordersAndPayment.click();
    // Click on My payment options
    PaymentOptionsPage.paymentOptions.click();
    // Create page object - SavedPaymentMethodsPage
    SavedPaymentMethodsPage.CreatePayment.click()
    // Click Add new card
    // Fill in Name
    SavedPaymentMethodsPage.name.type("Daniels");
    // Fill in Card Number
    SavedPaymentMethodsPage.cardNumber.type("1234567891234567");
    // Set expiry month to 7
    SavedPaymentMethodsPage.expiryMonth.select("7");
    // Set expiry year to 2090
    SavedPaymentMethodsPage.expiryYear.select("2090");
    // Click Submit button
    SavedPaymentMethodsPage.submitButton.click();
    // Validate that the card shows up in the list
    SelectAddressPage.checkAddresses.should("contain.text", "Daniels");
  });
  });
});
