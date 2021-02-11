import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { b } from '@angular/core/src/render3';
import { clearSupportCodeFns } from 'cucumber';
import { browser, element, by, protractor, $$, $ } from 'protractor';

describe("AirJet Blue App test" ,function(){
beforeEach(function(){
    browser.manage().window().maximize();
    browser.get("https://www.jetblue.com/");
});
it("Verify the flow ",function(){
    browser.refresh();
    element(by.xpath('//div[contains(text(),"One-way")]')).click();
    element(by.id("city-selector_2civyl3xo")).sendKeys("Albany, NY (ALB)");

    browser.sleep(10000);
});
});