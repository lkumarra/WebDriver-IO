import { TestBase } from '../TestBase/TestBase';
import { HomePageActions } from '../Pages/Actions/CarsGuideHomePage';
import { UsedCarAction } from '../Pages/Actions/CarsGuideUsedCars';
let homePageActions:HomePageActions = new HomePageActions();
let usedCarAction:UsedCarAction
describe('webdriver.io page', () => {
    before( ()=>{
        TestBase.getUrl('https://www.carsguide.com.au/');
        homePageActions.moveToBuyAndSale();
        usedCarAction =  homePageActions.clickOnUsedCars();
        usedCarAction.selectUsedCarMake("Audi");
        usedCarAction.selectUsedCarModel("A4");
        usedCarAction.selectUsedCarLocation("ACT - All");
        usedCarAction.seletUsedCarPrice("$100,000");
        usedCarAction.clickOnFindMyNextCar();
    })

    it('Verify the title ', async () => {
        expect(browser.getTitle()).toBe("Used Audi A4 Under 100000 for Sale ACT | carsguide");
    })
    
    after(()=>{
        browser.closeWindow();
    })

})