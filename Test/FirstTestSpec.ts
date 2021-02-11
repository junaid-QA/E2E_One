import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { b } from '@angular/core/src/render3';
import { clearSupportCodeFns } from 'cucumber';
import { browser, element, by, protractor, $$, $ } from 'protractor';

describe("Banking Project Test" ,function(){
    function verifyAndCloseAlert(text:String){
        let EE = protractor.ExpectedConditions;
        browser.wait(EE.alertIsPresent(), 4000,"Alert is not found");
        let alert =browser.switchTo().alert();
        let message = alert.getText();
        message.then(function(txt){
            console.log(txt);
        })
        
        browser.sleep(3000);
        expect(message).toContain(text);
       
        alert.accept();
    }
    beforeEach(function(){
        browser.manage().window().maximize();
        browser.get("http://way2automation.com/angularjs-protractor/banking/#/manager/addCust");
});
    it("Verify the flow of add customer ",function(){
        element(by.model('fName')).sendKeys("abc");
        element(by.model('lName')).sendKeys("DEF");
        element(by.model('postCd')).sendKeys("1234");
        element(by.className('btn btn-default')).click();
        // 
        verifyAndCloseAlert("Customer added successfully");
        element(by.buttonText('Open Account')).click();
        let Customer = element(by.model('custId'));
        let options = Customer.all(by.tagName('option'));
        options.then(function(items){
        let length = items.length;
            for(let i=0;i<length;i++){
                items[i].getText().then(function(txt:any){
                    console.log(txt);
                    if(txt == "abc DEF"){
                        console.log("Item Find in the List");
                        items[i].click();
                    }
                

                });
            }
        });
        element(by.model('currency')).$('[value="Dollar"]').click();
        element(by.buttonText('Process')).click();
        browser.sleep(5000);
       verifyAndCloseAlert("Account created");
       element(by.buttonText('Customers')).click();
       let rows = element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
       browser.sleep(4000);
       rows.each(function(row){
       let cells =row.$$('td');
       cells.get(0).getText().then(function(txt:any){
        if(txt =="abc"){
            console.log("I want to delete the row which has first name start with abc")
            cells.get(4).$('button').click();
            console.log("Row Deleted successfully");
            browser.sleep(1000);
        }

       });
    });

    })
});

