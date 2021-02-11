"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcelUtil = void 0;
var excel = require("ts-xlsx");
var ExcelUtil = /** @class */ (function () {
    function ExcelUtil() {
    }
    ExcelUtil.ReadExcelSheet = function (filepath) {
        var file = excel.readFile(filepath);
        var sheet = file.Sheets["Sheet1"];
        return excel.utils.sheet_to_json(sheet)[0];
    };
    return ExcelUtil;
}());
exports.ExcelUtil = ExcelUtil;
//# sourceMappingURL=ExcelUtil.js.map