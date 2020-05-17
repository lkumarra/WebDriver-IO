let usedCarLocators: UsedCarLocators
export class UsedCarLocators {

    /**
    * Return the instance of UsedCarLocators page.
    */
    public static getUsedCarLocatorInstance(): UsedCarLocators {
        if (usedCarLocators == null) {
            usedCarLocators = new UsedCarLocators();
        }
        return usedCarLocators;
    }

    private usedCarsMakeDropdown: string = "#makes";
    private usedCarsModelDropdown: string = "#models";
    private usedCarsLocationDropdown: string = "#locations";
    private usedCarsPriceDropdwon: string = "#priceTo";
    private usedCarsSearchSubmitButton: string = "#search-submit";

    /**
     * Return the locator of cars make dropdown on usedcars page.
     */
    public getUsedCarsMakeDropdownLocator(): string {
        return this.usedCarsMakeDropdown;
    }

    /**
     * Return the locator of cars model dropdown on usedcars page.
     */
    public getUsedCarsModelDropdownLocator(): string {
        return this.usedCarsModelDropdown;
    }

    /**
     * Return the locator of cars location dropdown on usedcars page.
     */
    public getUsedCarsLocationDropdownLocator(): string {
        return this.usedCarsLocationDropdown;
    }

    /**
     * Return the locator of cars price dropdown loactor on usedcars page.
     */
    public getUsedCarsPriceDropdwonLocator(): string {
        return this.usedCarsPriceDropdwon;
    }

    /**
     * Return the locator of Find My Next Cars Button on used cars page.
     */
    public getUsedCarsSearchSubmitButtonLocator(): string {
        return this.usedCarsSearchSubmitButton;
    }
}