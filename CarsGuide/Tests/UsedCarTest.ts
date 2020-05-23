import { TestBase, HomePageActions, UsedCarAction } from '../Libs/PagesLibs';
import { DATA, UsedCarData } from '../Libs/DataLib';

let homePageActions: HomePageActions = new HomePageActions();
let usedCarAction: UsedCarAction

describe('Used Car Page Tests', () => {
    before(() => {
        TestBase.getUrl(DATA.url);
        homePageActions.moveToBuyAndSale();
        usedCarAction = homePageActions.clickOnUsedCars();
        usedCarAction.selectUsedCarMake(UsedCarData.carMake);
        usedCarAction.selectUsedCarModel(UsedCarData.carModel);
        usedCarAction.selectUsedCarLocation(UsedCarData.carLocation);
        usedCarAction.seletUsedCarPrice(UsedCarData.carPrice);
        usedCarAction.clickOnFindMyNextCar();
    })

    it('Verify the title ', () => {
        expect(browser.getTitle()).toBe(UsedCarData.pageTitle);
    })

    after(() => {
        browser.closeWindow();
    })

})