import userData from '../fixtures/userData.json';
import LoginPage from '../pages/loginPage';


const loginPage = new LoginPage();

describe('Orange HRM test', () => {

  const selectorList = {
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid:".orangehrm-dashboard-grid",
    myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField:"[name='lastName']",
    //midleNamefield: "[name='middleName']",
    genericField:".oxd-input--active",
    dataField: "[placeholder='yyyy-dd-mm']",
    genericCombobox:".oxd-select-text--arrow",
    dateCloseButton:".--close",
    SubmitButton:"[type = 'Submit']"
  }
  it.only('User Info Update success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

   
    
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorList.midleNamefield).type('MidleNameTest')
    cy.get(selectorList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorList.genericField).eq(5).clear().type('Employee')
    cy.get(selectorList.genericField).eq(6).clear().type('OtherIdtest')
    cy.get(selectorList.genericField).eq(8).clear().type('DriveLicenseTest')
    cy.get(selectorList.genericField).eq(8).clear().type('ssnNumberTest')
    cy.get(selectorList.genericField).eq(7).clear().type('2025-03-10')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.SubmitButton).eq(0).click()
    cy.get('.oxd-toast').should('contain', 'Successfully Update')
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click
    cy.get(selectorList.genericCombobox).eq(0).click()


    

    




  })
  it('Login-Fail', () => {
        cy.visit('/auth/login')
        cy.get(selectorList.usernameField).type(userData.userFail.username)
        cy.get(selectorList.passwordField).type(userData.userFail.password)
        cy.get(selectorList.loginButton).click()
        cy.get(selectorList.wrongCredentialAlert)
        
    })
})