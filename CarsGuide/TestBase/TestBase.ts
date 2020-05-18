import { LogUtils } from '../LogManager/LogUtils';
export class TestBase {

    /**
     * Perform initialization to start testing.
     */
    private static initialization() {
        LogUtils.debugMessage("Browser is launched", TestBase.name);
        browser.maximizeWindow();
        LogUtils.debugMessage("Window is Maximize", TestBase.name);
        browser.deleteAllCookies();
        LogUtils.debugMessage("Cookies  are Deleted", TestBase.name);
    }

    /**
     * Enter the url 
     * @param url Url to enter.
     */
    public static getUrl(url: string) {
        browser.url(url)
        LogUtils.debugMessage(url + "is launched", TestBase.name)
        TestBase.initialization();
    }
}