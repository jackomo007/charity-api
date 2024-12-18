"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryDonationRepository = void 0;
class InMemoryDonationRepository {
    constructor() {
        this.donations = [];
    }
    add(donation) {
        this.donations.push(donation);
    }
    getAll() {
        return this.donations;
    }
    count() {
        return this.donations.length;
    }
}
exports.InMemoryDonationRepository = InMemoryDonationRepository;
