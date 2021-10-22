// const assert = require('assert');
//
// let config =    require('../../../../conf').Config;
// let dataSet =   require('../../../../test.data/test.data').DataSet;
//
// const profileSubMenuPage = require('../../../../pageobjects/Casino/profile.sub.menu.page');
// const Page =               require('../../../../pageobjects/Casino/main.page');
// const CasinoPage = new Page();
//
// const bonusesDialog =       require('../../../../pageobjects/dialogs/bonuses.dialog');
// const loginDialog =         require('../../../../pageobjects/dialogs/login.dialog');
// const logoutDialog =        require('../../../../pageobjects/dialogs/log.out.dialog');
// const registrationDialog =  require('../../../../pageobjects/dialogs/registration.dialog');
// const quizDialog =          require('../../../../pageobjects/dialogs/quiz.dialog');
// const winDialog =           require('../../../../pageobjects/dialogs/win.dialog');
//
//
// describe('casino nl authorization', async () => {
//     let {
//         NON_REGISTERED_USER_ERROR_TEXT,
//         CHECK_DETAILS_ERROR_TEXT
//     } = config.getLanguage();
//
//     await it('should have right authorization by email from login button on main page', async () => {
//         await CasinoPage.open();
//         await CasinoPage.click_login_btn();
//
//         await loginDialog.login(dataSet.TEST_EMAIL_AUTH, dataSet.TEST_PASSWORD);
//
//         await quizDialog.close_quiz_dialog();
//         await winDialog.close_win_dialog();
//         // await bonusesDialog.close_popup();
//
//         await CasinoPage.click_profile_btn();
//         await assert.deepStrictEqual(await (await profileSubMenuPage.email_field).getValue(), dataSet.TEST_EMAIL_AUTH);
//         await CasinoPage.click_log_out_btn();
//
//         await logoutDialog.click_logout_btn();
//
//         await registrationDialog.close_popup();
//
//         await CasinoPage.click_login_btn();
//
//         await loginDialog.login('test','passed');
//
//         // await expect(CasinoPage.alerts_area).toHaveTextContaining(`${NON_REGISTERED_USER_ERROR_TEXT} ${CHECK_DETAILS_ERROR_TEXT}`)
//
//         // await assert.deepStrictEqual(await (await CasinoPage.alerts_area).getText(), `${NON_REGISTERED_USER_ERROR_TEXT} ${CHECK_DETAILS_ERROR_TEXT}`);
//     });
// });
