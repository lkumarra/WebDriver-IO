import { TestBase } from '../TestBase/TestBase';
import { HomePageActions } from '../Pages/Actions/CarsGuideHomePage';
import { SearchCarsActions } from '../Pages/Actions/CarsGuideSearchCars';
let homePageActions:HomePageActions = new HomePageActions();
let searchCarsActions:SearchCarsActions;
describe('webdriver.io page', () => {
    before( ()=>{
        TestBase.getUrl('https://www.carsguide.com.au/');
        homePageActions.moveToBuyAndSale();
        searchCarsActions =  homePageActions.clickOnSearchCars();
        searchCarsActions.selectSearchCarMake("BMW Alpina");
        searchCarsActions.selectSerchCarModel("B5");
        searchCarsActions.selectSearchCarLocation("ACT - All");
        searchCarsActions.selectSearchCarPrice("$100,000");
        searchCarsActions.clickOnFindMyNextCar();
    })


    it('Verify the title ', () => {
        expect(browser.getTitle()).toBe("Bmw Alpina B5 Under 100000 for Sale ACT | carsguide");
    })
    
    after(()=>{
        browser.closeWindow();
    })

})