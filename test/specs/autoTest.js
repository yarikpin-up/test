// const Page = require('../pageobjects/GooglePage');
// const GooglePage = new Page();
const assert = require('assert');


describe('TaskTest', () => {
    it('should login with valid credentials', async () => {

        await console.log('openPage CasinoPage');
        await browser.url ("https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin");
        await browser.maximizeWindow();


        const Email = await $("#identifierId");
        await Email.setValue("autotestqa122@gmail.com"); //вводим пошту для входу


        const EmailButton = await $("#identifierNext > div > button > span");
        await EmailButton.click();

        const Password = await $("#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input");
        await Password.setValue("AutotestqA122"); //пароль от пошты

        const PasswordButton = await $("#passwordNext > div > button > span");
        await PasswordButton.click();

        const TitleLine = await $("#docs-title-widget > input")

        await assert.deepStrictEqual(await TitleLine.getValue(), "Table for autotesting");

    });
});
