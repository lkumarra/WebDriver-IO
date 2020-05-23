import { TestBase, HomePageActions, SearchCarsActions, } from '../Libs/PagesLibs';
import { DATA, SearchCarData } from '../Libs/DataLib';

let homePageActions: HomePageActions = new HomePageActions();
let searchCarsActions: SearchCarsActions;

describe('Search Car Page Tests', () => {
    before(() => {
        TestBase.getUrl(DATA.url);
        homePageActions.moveToBuyAndSale();
        searchCarsActions = homePageActions.clickOnSearchCars();
        searchCarsActions.selectSearchCarMake(SearchCarData.carMake);
        searchCarsActions.selectSerchCarModel(SearchCarData.carModel);
        searchCarsActions.selectSearchCarLocation(SearchCarData.carLocation);
        searchCarsActions.selectSearchCarPrice(SearchCarData.carPrice);
        searchCarsActions.clickOnFindMyNextCar();
    })

    it('Verify the title ', () => {
        expect(browser.getTitle()).toBe(SearchCarData.pageTitle);
    })

    after(() => {
        browser.closeWindow();
    })

})