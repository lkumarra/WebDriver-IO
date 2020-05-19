let homePageLocators:HomePageLocators;
export class HomePageLocators {

    /**
     * Return the instance of HomePageLocators page.
     */
    public static getHomePageLocatorInstance():HomePageLocators{
        if(homePageLocators === null){
            homePageLocators = new HomePageLocators();
        }
        return homePageLocators;
    }

    private buySellMenu:string="//a[@data-gtm-label = 'top nav car buy and sell']";
    private reviewsMenu: string = "=reviews";
    private newsMenu: string = "=news";
    private adviceMenu: string = "=advice";
    private priceAndSpecMenu: string = "=pricing + specs";
    private guidesMenu: string = "=guides";
    private searchCarsMenu: string = "=Search Cars";
    private usedCarsMenu: string = "=Used";

    /**
     * Return the locator of buy+sell menu on carsguide home page.
     */
    public getBuySellMenuLocator(): string {
        return this.buySellMenu;
    }

    /**
     * Return the locator of reviews menu on carsguide home page.
     */
    public getReviewsMenuLocator(): string {
        return this.reviewsMenu;
    }

    /**
     * Return the locator of news menu on carsguide home page.
     */
    public getNewsMenuLocator(): string {
        return this.newsMenu;
    }

    /**
     * Return the locator of advice menu on cars guide home page.
     */
    public getAdviceMenuLocator(): string {
        return this.adviceMenu;
    }

    /**
     * Return the locator of price and spec menu on cars guide home page.
     */
    public getPriceAndSpecMenuLocator(): string {
        return this.priceAndSpecMenu;
    }

    /**
     * Return the locator of guides menu on cars guide home page.
     */
    public getGuidesMenuLocator(): string {
        return this.guidesMenu;
    }

    /**
     * Return the locator of search menu on cars guide home page.
     */
    public getSearchCarsMenuLocator(): string {
        return this.searchCarsMenu;
    }

    /**
     * Return the locator of used cars menu on cars guide home page.
     */
    public getUsedCarsMenuLocator(): string {
        return this.usedCarsMenu;
    }

}