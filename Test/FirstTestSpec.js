"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe("Banking Project Test", function () {
    function verifyAndCloseAlert(text) {
        var EE = protractor_1.protractor.ExpectedConditions;
        protractor_1.browser.wait(EE.alertIsPresent(), 4000, "Alert is not found");
        var alert = protractor_1.browser.switchTo().alert();
        var message = alert.getText();
        message.then(function (txt) {
            console.log(txt);
        });
        protractor_1.browser.sleep(3000);
        expect(message).toContain(text);
        alert.accept();
    }
    beforeEach(function () {
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.get("http://way2automation.com/angularjs-protractor/banking/#/manager/addCust");
    });
    it("Verify the flow of add customer ", function () {
        protractor_1.element(protractor_1.by.model('fName')).sendKeys("abc");
        protractor_1.element(protractor_1.by.model('lName')).sendKeys("DEF");
        protractor_1.element(protractor_1.by.model('postCd')).sendKeys("1234");
        protractor_1.element(protractor_1.by.className('btn btn-default')).click();
        // 
        verifyAndCloseAlert("Customer added successfully");
        protractor_1.element(protractor_1.by.buttonText('Open Account')).click();
        var Customer = protractor_1.element(protractor_1.by.model('custId'));
        var options = Customer.all(protractor_1.by.tagName('option'));
        options.then(function (items) {
            var length = items.length;
            var _loop_1 = function (i) {
                items[i].getText().then(function (txt) {
                    console.log(txt);
                    if (txt == "abc DEF") {
                        console.log("Item Find in the List");
                        items[i].click();
                    }
                });
            };
            for (var i = 0; i < length; i++) {
                _loop_1(i);
            }
        });
        protractor_1.element(protractor_1.by.model('currency')).$('[value="Dollar"]').click();
        protractor_1.element(protractor_1.by.buttonText('Process')).click();
        protractor_1.browser.sleep(5000);
        verifyAndCloseAlert("Account created");
        protractor_1.element(protractor_1.by.buttonText('Customers')).click();
        var rows = protractor_1.element.all(protractor_1.by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
        protractor_1.browser.sleep(4000);
        rows.each(function (row) {
            var cells = row.$$('td');
            cells.get(0).getText().then(function (txt) {
                if (txt == "abc") {
                    console.log("I want to delete the row which has first name start with abc");
                    cells.get(4).$('button').click();
                    console.log("Row Deleted successfully");
                    protractor_1.browser.sleep(1000);
                }
            });
        });
    });
});
//# sourceMappingURL=FirstTestSpec.js.map