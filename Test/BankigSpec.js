"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe("AirJet Blue App test", function () {
    beforeEach(function () {
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.get("https://www.jetblue.com/");
    });
    it("Verify the flow ", function () {
        protractor_1.browser.refresh();
        protractor_1.element(protractor_1.by.xpath('//div[contains(text(),"One-way")]')).click();
        protractor_1.element(protractor_1.by.id("city-selector_2civyl3xo")).sendKeys("Albany, NY (ALB)");
        protractor_1.browser.sleep(10000);
    });
});
//# sourceMappingURL=BankigSpec.js.map