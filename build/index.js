"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.numericalWithoutSeparator = exports.numericalSeparator = exports.isNationalID = exports.timeAgo = exports.convertDigitsEnToFa = exports.convertDigitsFaToEn = exports.persianCardValidation = void 0;
var creditCardValidation_1 = __importDefault(require("./modules/creditCardValidation"));
exports.persianCardValidation = creditCardValidation_1.default;
var index_1 = require("./shared/utils/digitConverter/index");
Object.defineProperty(exports, "convertDigitsFaToEn", { enumerable: true, get: function () { return index_1.convertDigitsFaToEn; } });
Object.defineProperty(exports, "convertDigitsEnToFa", { enumerable: true, get: function () { return index_1.convertDigitsEnToFa; } });
var timeAgo_1 = require("./modules/timeAgo");
Object.defineProperty(exports, "timeAgo", { enumerable: true, get: function () { return timeAgo_1.timeAgo; } });
var nationalIDValidation_1 = __importDefault(require("./modules/nationalIDValidation"));
Object.defineProperty(exports, "isNationalID", { enumerable: true, get: function () { return nationalIDValidation_1.default; } });
// import {default as numberToWord } from "./modules/numericalToWords"
var numerical_1 = require("./shared/utils/numerical");
Object.defineProperty(exports, "numericalSeparator", { enumerable: true, get: function () { return numerical_1.numericalSeparator; } });
Object.defineProperty(exports, "numericalWithoutSeparator", { enumerable: true, get: function () { return numerical_1.numericalWithoutSeparator; } });
