let utilities: Utilities = null;
import * as chai from 'chai';
const expect = chai.expect;
export class Utilities {

    /**
     * Return the instance of Utilities class.
     */
    public static getUtilitiesInstane(): Utilities {
        if (utilities === null) {
            utilities = new Utilities();
        }
        return utilities;
    }
    /**
     * Wait until element is in  clickable state.
     * @param element Element for which wait.
     */
    private elementToBeClickableWait(element: WebdriverIO.Element) {
        element.waitForClickable({ timeout: 30000 })
    }

    /**
     * Wait until a element is visible
     * @param element Element for which wait.
     */
    private elementToBeVisibleWait(element: WebdriverIO.Element) {
        element.waitForDisplayed({ timeout: 30000 })
    }

    /**
     * Return the element finder.
     * @param locator locator to find.
     */
    private getElementFinder(locator: string): WebdriverIO.Element {
        return browser.$(locator);
    }

    /**
     * Perform click action on the locator
     * @param locator Locator on which click action has performed.
     */
    public async clickOnElement(locator: string) {
        let element: WebdriverIO.Element = this.getElementFinder(locator);
        this.elementToBeClickableWait(element);
        element.click();
    }

    /**
     * Enter text on the locator.
     * @param locator Locator to enter the text
     * @param text Text to enter.
     */
    public enterTextIntoElement(locator: string, text: string) {
        let element: WebdriverIO.Element = this.getElementFinder(locator);
        this.elementToBeClickableWait(element);
        element.setValue(text);
    }

    /**
     * Enter text into locator after clear
     * @param locator Locator to enter the text
     * @param text Text to enter.
     */
    public enterTextWithClear(locator: string, text: string) {
        let element: WebdriverIO.Element = this.getElementFinder(locator);
        this.elementToBeClickableWait(element);
        element.clearValue();
        element.setValue(text);
    }

    /**
     * Return the text of locator
     * @param locator Locator to get text.
     */
    public getElementText(locator: string): string {
        let element: WebdriverIO.Element = this.getElementFinder(locator);
        this.elementToBeVisibleWait(element);
        return element.getText();
    }

    /**
     * Select the value from dropdown.
     * @param locator locator to select
     * @param text value to select.
     */
    public selectByVisibleText(locator: string, text: string) {
        let element: WebdriverIO.Element = this.getElementFinder(locator);
        this.elementToBeVisibleWait(element);
        let selectElement:WebdriverIO.Element = this.getElementFinder(this.getXpathByText("option", text));
        this.elementToBeVisibleWait(selectElement);
        element.selectByVisibleText(text);
    }

    /**
     * Perform mouse move funtion on the locator.
     * @param locator locator on which mouse move action has performed.
     */
    public moveToElement(locator: string) {
        let element: WebdriverIO.Element = this.getElementFinder(locator);
        this.elementToBeVisibleWait(element);
        element.moveTo();
    }


    /**
     * Return the xpath from text
     * @param text text to design xpath
     */
    public getXpathByText(tagName: string, text: string): string {
        let xpath: string = "//" + tagName + "[text()='" + text + "']"
        return xpath;
    }

    /**
     * Make xpath
     * @param tagName Tag name to design xpath
     * @param attribute Attribute name
     * @param value attribute alue
     */
    public async makeXpath(tagName: string, attribute: string, value: string) {
        let xpath: string = "//" + tagName + "[@" + attribute + "='" + value + "']"
        return xpath;
    }

    /**
     * Verify the actual and expected value.
     * @param actual Actual value.
     * @param expected Expected value.
     */
    public static async verifyEquals(actual: string, expected: string) {
        expect(actual).to.equal(expected, "Incorrect value is displayed")
    }

    /**
     * Verify the actual and expected value.
     * @param actal Actual value.
     * @param expected Expected value.
     */
    public static veifyEquals(actal: number, expected: number) {
        expect(actal).to.equal(expected)
    }

    /**
     * Verify the given value is true.
     * @param value value to verify
     */
    public static verifyTrue(value: boolean) {
        expect(value).to.true;
    }

    /**
     * Verify the given value is false.
     * @param value vale to verify.
     */
    public static verifyFalse(value: boolean) {
        expect(value).to.false;
    }

    /**
     * Return the title of the given page.
     */
    public static getTitle(): string {
        return browser.getTitle();
    }


}