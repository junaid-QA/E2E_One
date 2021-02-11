"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CucumberReportExtension = void 0;
var fs = require("fs");
var mkdirp_1 = require("mkdirp");
var report = require("cucumber-html-reporter");
var Cucumber = require('cucumber');
var CucumberReportExtension = /** @class */ (function () {
    function CucumberReportExtension() {
    }
    CucumberReportExtension.CreateReportFile = function (dirName) {
        //Check of the directory exist
        if (!fs.existsSync(dirName))
            mkdirp_1.mkdirp.sync(dirName);
    };
    CucumberReportExtension.GenerateCucumberReport = function () {
        report.generate(this.cucumberReporterOptions);
    };
    CucumberReportExtension.jsonDir = process.cwd() + "/reports/json";
    CucumberReportExtension.htmlDir = process.cwd() + "/reports/html";
    CucumberReportExtension.jsonFile = CucumberReportExtension.jsonDir + "/cucumber_report.json";
    CucumberReportExtension.cucumberReporterOptions = {
        theme: "bootstrap",
        jsonFile: CucumberReportExtension.jsonFile,
        output: CucumberReportExtension.htmlDir + "/cucumber_reporter.html",
        reportSuiteAsScenarios: true,
        metadata: {
            "App Version": "0.0.1",
            "Test Environment": "Testing",
            "Browser": "Chrome  59.0.945",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Local"
        }
    };
    return CucumberReportExtension;
}());
exports.CucumberReportExtension = CucumberReportExtension;
//# sourceMappingURL=CucumberReportExtension.js.map