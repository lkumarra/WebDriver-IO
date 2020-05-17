import { Utilities } from '../../Utils/TestUtils';
import { SearchCarsLocators } from '../Locators/CarsGuideSearchCarsLocators';
let utilities: Utilities = Utilities.getUtilitiesInstane();
let searchCarsLocators: SearchCarsLocators = SearchCarsLocators.getSearchCarsLocatorsInstance();
export class SearchCarsActions {

    /**
     * Select cars make,
     * @param carsMake Cars make to select.
     */
    public selectSearchCarMake(carsMake: string) {
        utilities.selectByVisibleText(searchCarsLocators.getSerchCarsMakeDropdownLocator(), carsMake);
    }

    /**
     * Select search car model,
     * @param model Car model to select.
     */
    public selectSerchCarModel(model: string) {
        utilities.selectByVisibleText(searchCarsLocators.getSearchCarsModelDropdownLocator(), model);
    }

    /**
     * Select search car location
     * @param location location to select.
     */
    public selectSearchCarLocation(location: string) {
        utilities.selectByVisibleText(searchCarsLocators.getSeachCarsLocationDropdownLocator(), location);
    }

    /**
     * Select search car price.
     * @param price Price to select.
     */
    public selectSearchCarPrice(price: string) {
        utilities.selectByVisibleText(searchCarsLocators.getSearchCarsPriceDropdwonLocator(), price);
    }

    /**
     * Click on find ny next car.
     */
    public clickOnFindMyNextCar() {
        utilities.clickOnElement(searchCarsLocators.getSearchCarsSearchSubmitButtonLocator());
    }


}