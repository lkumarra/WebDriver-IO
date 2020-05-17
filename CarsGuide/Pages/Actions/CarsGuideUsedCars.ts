import { Utilities } from '../../Utils/TestUtils';
import { UsedCarLocators } from '../Locators/CarsGuideUsesCarsLocators';
let utilities: Utilities = Utilities.getUtilitiesInstane();
let usedCarLocators: UsedCarLocators = UsedCarLocators.getUsedCarLocatorInstance();
export class UsedCarAction {

    /**
     * Select car make on used car page.
     * @param make Make to select.
     */
    public selectUsedCarMake(make: string) {
        utilities.selectByVisibleText(usedCarLocators.getUsedCarsMakeDropdownLocator(), make);
    }

    /**
     * Select car model on used car page.
     * @param model Model to select.
     */
    public  selectUsedCarModel(model: string) {
        utilities.selectByVisibleText(usedCarLocators.getUsedCarsModelDropdownLocator(), model);
    }

    /**
     * Select car location on used car page. 
     * @param location location to select.
     */
    public  selectUsedCarLocation(location: string) {
        utilities.selectByVisibleText(usedCarLocators.getUsedCarsLocationDropdownLocator(), location);
    }

    /**
     * Select car price on used car page.
     * @param price price to select.
     */
    public  seletUsedCarPrice(price: string) {
        utilities.selectByVisibleText(usedCarLocators.getUsedCarsPriceDropdwonLocator(), price);
    }

    /**
     * Click on find my next car on used car page.
     */
    public  clickOnFindMyNextCar() {
        utilities.clickOnElement(usedCarLocators.getUsedCarsSearchSubmitButtonLocator());
    }
}