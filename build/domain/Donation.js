"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Donation = void 0;
class Donation {
    constructor(id, amount, donorName, month, category) {
        this.id = id;
        this.amount = amount;
        this.donorName = donorName;
        this.month = month;
        this.category = category;
    }
}
exports.Donation = Donation;
