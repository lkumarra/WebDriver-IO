let searchCarsLocators: SearchCarsLocators = null;
export class SearchCarsLocators {

    /**
     * Return the instance of SearchCarsLocators page.
     */
    public static getSearchCarsLocatorsInstance(): SearchCarsLocators {
        if (searchCarsLocators === null) {
            searchCarsLocators = new SearchCarsLocators();
        }
        return searchCarsLocators;
    }

    private serchCarsMakeDropdown: string = "#makes";
    private searchCarsModelDropdown: string = "#models";
    private seachCarsLocationDropdown: string = "#locations";
    private searchCarsPriceDropdwon: string = "#priceTo";
    private searchCarsSearchSubmitButton: string = "#search-submit";

    /**
     * Return the locator of cars make dropdown on searchcars page.
     */
    public getSerchCarsMakeDropdownLocator(): string {
        return this.serchCarsMakeDropdown;
    }

    /**
     * Return the locator of cars model dropdown on searchcars page.
     */
    public getSearchCarsModelDropdownLocator(): string {
        return this.searchCarsModelDropdown;
    }

    /**
     * Return the locator of cars location dropdown on searchcars page.
     */
    public getSeachCarsLocationDropdownLocator(): string {
        return this.seachCarsLocationDropdown;
    }

    /**
     * Return the locator of cars price dropdown loactor on searchcars page.
     */
    public getSearchCarsPriceDropdwonLocator(): string {
        return this.searchCarsPriceDropdwon;
    }

    /**
     * Return the locator of Find My Next Cars Button on search cars page.
     */
    public getSearchCarsSearchSubmitButtonLocator(): string {
        return this.searchCarsSearchSubmitButton;
    }
}