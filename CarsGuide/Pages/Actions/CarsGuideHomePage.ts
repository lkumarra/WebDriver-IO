import { Utilities } from '../../Utils/TestUtils';
import { HomePageLocators } from '../Locators/CarsGuideHomePageLocators';
import { SearchCarsActions } from './CarsGuideSearchCars';
import { UsedCarAction } from './CarsGuideUsedCars';
import { LogUtils } from '../../LogManager/LogUtils';
let utilities: Utilities = Utilities.getUtilitiesInstane();
let homePageLocatos: HomePageLocators = HomePageLocators.getHomePageLocatorInstance();
export class HomePageActions {

    /**
     * Move to buy+sell menu.
     */
    public moveToBuyAndSale() {
        utilities.moveToElement(homePageLocatos.getBuySellMenuLocator());
        LogUtils.debugMessage("Move to Buy and sell menu", HomePageActions.name);
    }

    /**
     * Move to reviews menu.
     */
    public moveToReviews() {
        utilities.moveToElement(homePageLocatos.getReviewsMenuLocator());
        LogUtils.debugMessage("Move to Reviews menu", HomePageActions.name);
    }

    /**
     * Move to news menu.
     */
    public moveToNews() {
        utilities.moveToElement(homePageLocatos.getNewsMenuLocator());
        LogUtils.debugMessage("Move to News Menu", HomePageActions.name);
    }

    /**
     * Move to advice menu.
     */
    public moveToAdvice() {
        utilities.moveToElement(homePageLocatos.getAdviceMenuLocator());
        LogUtils.debugMessage("Move to Advice", HomePageActions.name);
    }

    /**
     * Move to pricing and spec menu.
     */
    public moveToPricingAndSpec() {
        utilities.moveToElement(homePageLocatos.getPriceAndSpecMenuLocator());
        LogUtils.debugMessage("Move to Price and Spec", HomePageActions.name);
    }

    /**
     * Move to advice.
     */
    public moveToGuides() {
        utilities.moveToElement(homePageLocatos.getGuidesMenuLocator());
        LogUtils.debugMessage("Move to Guide menu", HomePageActions.name);
    }

    /**
     * click on search cars options .
     */
    public clickOnSearchCars(): SearchCarsActions {
        utilities.clickOnElement(homePageLocatos.getSearchCarsMenuLocator());
        LogUtils.debugMessage("Clicked on search cars", HomePageActions.name);
        return new SearchCarsActions();
    }

    /**
     * Click on used car menu.
     */
    public clickOnUsedCars(): UsedCarAction {
        utilities.clickOnElement(homePageLocatos.getUsedCarsMenuLocator());
        LogUtils.debugMessage("Clicked on Search Cars ", HomePageActions.name);
        return new UsedCarAction();
    }
}