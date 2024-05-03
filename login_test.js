Feature('Login');

Scenario('Login with valid credentials', async ({ I }) => {
  I.amOnPage('https://evlotime-demo.web.app/login');
  I.fillField('Username', 'srini@yopmail.com');
  I.fillField('Password', 'omni@123');
  I.click('Login');
  I.see('Welcome, your_username');
});