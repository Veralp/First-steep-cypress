import userData from '../fixtures/userData.json';


describe('Orange HRM test', () => {

  const selectorList = {
    usernameField:"[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid:".orangehrm-dashboard-grid",
    wrongCredentialAlert:"[role='alert']",
    myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField:"[name='lastName']",
    //midleNamefield: "[name='middleName']",
    genericField:".oxd-input--active",
    dataField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton:".--close",
    SubmitButton:"[type = 'Submit']"
  }
  it.only('User Info Update success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).clear().type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).clear().type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).type('FirstNameTest')
    //cy.get(selectorList.midleNamefield).type('MidleNameTest')
    cy.get(selectorList.lastNameField).type('LastNameTest')
    cy.get(selectorList.genericField).eq(5).clear().type('Employee')
    cy.get(selectorList.genericField).eq(6).clear().type('OtherIdtest')
    cy.get(selectorList.genericField).eq(8).clear().type('DriveLicenseTest')
    //cy.get(selectorList.genericField).eq(8).clear().type('ssnNumberTest')
    cy.get(selectorList.genericField).eq(7).clear().type('2025-03-10')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.SubmitButton).eq(0).click()
    //cy.get('body').should('contain', 'Successfully Update')
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button')
    


    

    




  })
  it('Login-Fail', () => {
        cy.visit('/auth/login')
        cy.get(selectorList.usernameField).type(userData.userFail.username)
        cy.get(selectorList.passwordField).type(userData.userFail.password)
        cy.get(selectorList.loginButton).click()
        cy.get(selectorList.wrongCredentialAlert)
        
    })
})