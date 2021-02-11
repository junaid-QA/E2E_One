//import the class
import { browser, element, by, protractor, $$, $ } from 'protractor';
import { IdentificationType, BasePage } from "./BasePage";
import * as json from 'load-json-file';
import { ExcelUtil } from '../utilities/ExcelUtil';

const Locators = {
    TitleIcon: {
        type: IdentificationType[IdentificationType.Xpath],
        value: "/html/body/jb-app/jb-header/jb-header-desktop/div/div/div/div/jb-subnav-desktop/nav/ul/li[1]/a"
    },

    headings: {
        type: IdentificationType[IdentificationType.Css],
        value: ".well.hoverwell.thumbnail>h2"
    },

    searchText: {
        type: IdentificationType[IdentificationType.Css],
        value: "[class='form-control']"
    }
}


export class HomePage extends BasePage {
    TitleIcon = this.ElementLocator(Locators.TitleIcon).element(by.xpath("//span[contains(text(),'4th')]"));
    //All heading                           
    headings = this.ElementLocator(Locators.headings);

    //Search Textbox
    searchText = this.ElementLocator(Locators.searchText)

    //Open browser
    async OpenBrowser(url: string) {
        await browser.get(url);
    }

    async GetAllHeadings() {
        await this.headings.getText().then((text) => {
            console.log("The heading is :" + text);
        });
    }

    async ClickFirstHeading() {
        //console.log("Can I print the input value from StepDefinition, if yes, this is it" + heading);
        await this.TitleIcon.click();
    }

    async EnterDataInSearchFromJson() {
        json("./data.json").then((x) => {
            this.searchText.sendKeys((<any>x).SearchValue);
        });
    }

    async EnterDataInSearchFromExcel() {
        let sheet = <SearchData>ExcelUtil.ReadExcelSheet("./data.xlsx");

        console.log(sheet.SearchValue);
        
        this.searchText.sendKeys(sheet.SearchValue);
    }


}

interface SearchData{
    SearchValue: string,
    CourseTitle: string,
    Durations: string
}

