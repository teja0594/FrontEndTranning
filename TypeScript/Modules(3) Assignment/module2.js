"use strict";
exports.__esModule = true;
exports.Bank = void 0;
var Bank = /** @class */ (function () {
    function Bank(id, name) {
        this.customerId = id;
        this.customerName = name;
    }
    Bank.prototype.getFixedDeposit = function (amount, intrestRtate, tenure) {
        var fdi = amount * (intrestRtate / 100) * tenure;
        return amount + fdi;
    };
    Bank.prototype.getRecurringDeposit = function (moneyPerMonth, intrestRate, tenure) {
        var rintrest = 0;
        var Pn = moneyPerMonth * tenure * 12;
        rintrest = rintrest + ((Pn * (tenure + 1)) / 2) * (intrestRate / 100) * (1 / 12);
        return Pn + rintrest;
    };
    return Bank;
}());
exports.Bank = Bank;
