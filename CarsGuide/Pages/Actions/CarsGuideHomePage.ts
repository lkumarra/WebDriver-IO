import { Utilities } from '../../Utils/TestUtils';
import { HomePageLocators } from '../Locators/CarsGuideHomePageLocators';
import { SearchCarsActions } from './CarsGuideSearchCars';
import { UsedCarAction } from './CarsGuideUsedCars';
let utilities: Utilities = Utilities.getUtilitiesInstane();
let homePageLocatos: HomePageLocators = HomePageLocators.getHomePageLocatorInstance();
export class HomePageActions {

    /**
     * Move to buy+sell menu.
     */
    public moveToBuyAndSale() {
        utilities.moveToElement(homePageLocatos.getBuySellMenuLocator());
    }

    /**
     * Move to reviews menu.
     */
    public moveToReviews() {
        utilities.moveToElement(homePageLocatos.getReviewsMenuLocator());
    }

    /**
     * Move to news menu.
     */
    public moveToNews() {
        utilities.moveToElement(homePageLocatos.getNewsMenuLocator());
    }

    /**
     * Move to advice menu.
     */
    public moveToAdvice() {
        utilities.moveToElement(homePageLocatos.getAdviceMenuLocator());
    }

    /**
     * Move to pricing and spec menu.
     */
    public moveToPricingAndSpec() {
        utilities.moveToElement(homePageLocatos.getPriceAndSpecMenuLocator());
    }

    /**
     * Move to advice.
     */
    public moveToGuides() {
        utilities.moveToElement(homePageLocatos.getGuidesMenuLocator());
    }

    /**
     * click on search cars options .
     */
    public clickOnSearchCars(): SearchCarsActions {
          utilities.clickOnElement(homePageLocatos.getSearchCarsMenuLocator());
        return new SearchCarsActions();
    }

    /**
     * Click on used car menu.
     */
    public clickOnUsedCars(): UsedCarAction {
        utilities.clickOnElement(homePageLocatos.getUsedCarsMenuLocator());
        return new UsedCarAction();
    }
}