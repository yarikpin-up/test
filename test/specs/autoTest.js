const assert = require('assert');


describe('TaskTest', () => {
    it('should login with valid credentials', async () => {

        await console.log('openPage CasinoPage');
        await browser.url ("https://docs.google.com/spreadsheets/d/1wV_b5TnfUw-9s-KzqhTHluDfVMkb2lQTLNUfty0ufnw/edit#gid=0");
        await browser.maximizeWindow();


        const Email = await $("#identifierId");
        await Email.setValue("autotestqa122@gmail.com"); //вводим пошту для входу

        //await browser.debug();

        const EmailButton = await $("#identifierNext > div > button > span");
        await EmailButton.click();

        //await browser.debug();

        const RepeatTryButton = await $("//*[@id='next']/div/button/span");
        await RepeatTryButton.click();

        //await browser.debug();
        const Email2 = await $("#identifierId");
        await Email2.setValue("autotestqa122@gmail.com"); //вводим пошту для входу

        //await browser.debug();

        const RepeatTryButton2 = await $("//*[@id='identifierNext']/div/button");
        await RepeatTryButton2.click();

        const Info = await $("//*[@id='view_container']/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div/div[1]/a");
        await Info.click();
        await browser.url('https://support.google.com/accounts/answer/7675428?hl=ru');

        //await browser.debug();

        const TitleLine = await $("/html/body/div[2]/div/section/div/div[1]/article/section/h1");
        const Title = await TitleLine.getText()

        await assert.deepStrictEqual(Title, "Как войти в аккаунт в поддерживаемом браузере");

    });
});
