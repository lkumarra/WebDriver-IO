import { Utilities } from '../../Utils/TestUtils';
import { SearchCarsLocators } from '../Locators/CarsGuideSearchCarsLocators';
import { LogUtils } from '../../LogManager/LogUtils';
let utilities: Utilities = Utilities.getUtilitiesInstane();
let searchCarsLocators: SearchCarsLocators = SearchCarsLocators.getSearchCarsLocatorsInstance();
export class SearchCarsActions {

    /**
     * Select cars make,
     * @param carsMake Cars make to select.
     */
    public selectSearchCarMake(carsMake: string) {
        utilities.selectByVisibleText(searchCarsLocators.getSerchCarsMakeDropdownLocator(), carsMake);
        LogUtils.debugMessage("CarMake on Search car page " + carsMake + " is Selected", SearchCarsActions.name);
    }

    /**
     * Select search car model,
     * @param model Car model to select.
     */
    public selectSerchCarModel(model: string) {
        utilities.selectByVisibleText(searchCarsLocators.getSearchCarsModelDropdownLocator(), model);
        LogUtils.debugMessage("Car Model on Search car page " + model + " is selected", SearchCarsActions.name)
    }

    /**
     * Select search car location
     * @param location location to select.
     */
    public selectSearchCarLocation(location: string) {
        utilities.selectByVisibleText(searchCarsLocators.getSeachCarsLocationDropdownLocator(), location);
        LogUtils.debugMessage("Car Location on Search car page " + location + " is selected", SearchCarsActions.name);
    }

    /**
     * Select search car price.
     * @param price Price to select.
     */
    public selectSearchCarPrice(price: string) {
        utilities.selectByVisibleText(searchCarsLocators.getSearchCarsPriceDropdwonLocator(), price);
        LogUtils.debugMessage("Car Price on Search car page " + price + " is selectted", SearchCarsActions.name);
    }

    /**
     * Click on find ny next car.
     */
    public clickOnFindMyNextCar() {
        utilities.clickOnElement(searchCarsLocators.getSearchCarsSearchSubmitButtonLocator());
        LogUtils.debugMessage("Clicked on Find MY Next Car Buttom on Search car page ", SearchCarsActions.name);
    }


}