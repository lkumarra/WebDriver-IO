import { Utilities, LogUtils } from '../../Libs/UtilsLib';
import { UsedCarLocators } from '../../Libs/LocatorsLib';
let utilities: Utilities = Utilities.getUtilitiesInstane();
let usedCarLocators: UsedCarLocators = UsedCarLocators.getUsedCarLocatorInstance();
export class UsedCarAction {

    /**
     * Select car make on used car page.
     * @param make Make to select.
     */
    public selectUsedCarMake(make: string): void {
        utilities.selectByVisibleText(usedCarLocators.getUsedCarsMakeDropdownLocator(), make);
        LogUtils.debugMessage("Car Make on used car page " + make + " is selected", UsedCarAction.name);
    }

    /**
     * Select car model on used car page.
     * @param model Model to select.
     */
    public selectUsedCarModel(model: string): void {
        utilities.selectByVisibleText(usedCarLocators.getUsedCarsModelDropdownLocator(), model);
        LogUtils.debugMessage("Car Model on Used Car Page " + model + " is selected", UsedCarAction.name);
    }

    /**
     * Select car location on used car page. 
     * @param location location to select.
     */
    public selectUsedCarLocation(location: string): void {
        utilities.selectByVisibleText(usedCarLocators.getUsedCarsLocationDropdownLocator(), location);
        LogUtils.debugMessage("Car Location on Used Car Page" + location + " is selected", UsedCarAction.name);
    }

    /**
     * Select car price on used car page.
     * @param price price to select.
     */
    public seletUsedCarPrice(price: string): void {
        utilities.selectByVisibleText(usedCarLocators.getUsedCarsPriceDropdwonLocator(), price);
        LogUtils.debugMessage("Car Price on Used Car Page " + price + " is selected", UsedCarAction.name);
    }

    /**
     * Click on find my next car on used car page.
     */
    public clickOnFindMyNextCar(): void {
        utilities.clickOnElement(usedCarLocators.getUsedCarsSearchSubmitButtonLocator());
        LogUtils.debugMessage("Clicked on Find My Next Car Button on Used Car Page", UsedCarAction.name);
    }
}