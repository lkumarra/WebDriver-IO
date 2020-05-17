export class TestBase{

    /**
     * Perform initialization to start testing.
     */
    private static initialization(){
         browser.maximizeWindow();
         browser.deleteAllCookies();
    }

    /**
     * Enter the url 
     * @param url Url to enter.
     */
    public static getUrl(url:string){
        browser.url(url)
        TestBase.initialization();
    }
}