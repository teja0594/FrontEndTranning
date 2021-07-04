"use strict";
exports.__esModule = true;
exports.HDFCBank = void 0;
var HDFCBank = /** @class */ (function () {
    function HDFCBank(id, name) {
        this.si = 3.5;
        this.fi = 7;
        this.ri = 9.5;
        this.custID = id;
        this.custName = name;
    }
    HDFCBank.prototype.getSavingsDeposit = function (amount) {
        console.log("SavingsDeposit");
        console.log("Deposit Amount: " + amount);
        console.log("SavingsIntrestRate: " + this.si + "%");
        console.log("Amount after 2 years " + amount * Math.pow((1 + this.si / 100), 2));
    };
    HDFCBank.prototype.getFixedDeposit = function (amount) {
        console.log("FixedDeposit");
        console.log("Deposit Amount: " + amount);
        console.log("FixedIntrestRate: " + this.fi + "%");
        console.log("Amount after 2 years " + (amount + (amount * (this.fi / 100) * 2)));
    };
    HDFCBank.prototype.getRecuringDeposit = function (amount) {
        console.log("RecuringDeposit");
        console.log("Deposit Amount: " + amount);
        console.log("RecuringIntrestRate: " + this.ri + "%");
        var rintrest = 0;
        var Pn = amount * 2 * 12;
        rintrest = rintrest + ((Pn * (2 + 1)) / 2) * (this.ri / 100) * (1 / 12);
        console.log("Amount after 2 years " + (Pn + rintrest));
    };
    return HDFCBank;
}());
exports.HDFCBank = HDFCBank;
