import { Utilities, LogUtils } from '../../Libs/UtilsLib';
import { HomePageLocators } from '../../Libs/LocatorsLib';
import { SearchCarsActions, UsedCarAction } from '../../Libs/PagesLibs';
let utilities: Utilities = Utilities.getUtilitiesInstane();
let homePageLocators: HomePageLocators = HomePageLocators.getHomePageLocatorInstance();
export class HomePageActions {

    /**
     * Move to buy+sell menu.
     */
    public moveToBuyAndSale(): void {
        utilities.moveToElement(homePageLocators.getBuySellMenuLocator());
        LogUtils.debugMessage("Move to Buy and sell menu", HomePageActions.name);
    }

    /**
     * Move to reviews menu.
     */
    public moveToReviews(): void {
        utilities.moveToElement(homePageLocators.getReviewsMenuLocator());
        LogUtils.debugMessage("Move to Reviews menu", HomePageActions.name);
    }

    /**
     * Move to news menu.
     */
    public moveToNews(): void {
        utilities.moveToElement(homePageLocators.getNewsMenuLocator());
        LogUtils.debugMessage("Move to News Menu", HomePageActions.name);
    }

    /**
     * Move to advice menu.
     */
    public moveToAdvice(): void {
        utilities.moveToElement(homePageLocators.getAdviceMenuLocator());
        LogUtils.debugMessage("Move to Advice", HomePageActions.name);
    }

    /**
     * Move to pricing and spec menu.
     */
    public moveToPricingAndSpec(): void {
        utilities.moveToElement(homePageLocators.getPriceAndSpecMenuLocator());
        LogUtils.debugMessage("Move to Price and Spec", HomePageActions.name);
    }

    /**
     * Move to advice.
     */
    public moveToGuides(): void {
        utilities.moveToElement(homePageLocators.getGuidesMenuLocator());
        LogUtils.debugMessage("Move to Guide menu", HomePageActions.name);
    }

    /**
     * click on search cars options .
     */
    public clickOnSearchCars(): SearchCarsActions {
        utilities.clickOnElement(homePageLocators.getSearchCarsMenuLocator());
        LogUtils.debugMessage("Clicked on search cars", HomePageActions.name);
        return new SearchCarsActions();
    }

    /**
     * Click on used car menu.
     */
    public clickOnUsedCars(): UsedCarAction {
        utilities.clickOnElement(homePageLocators.getUsedCarsMenuLocator());
        LogUtils.debugMessage("Clicked on Search Cars ", HomePageActions.name);
        return new UsedCarAction();
    }
}