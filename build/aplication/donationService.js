"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonationService = void 0;
const Donation_1 = require("../domain/Donation");
class DonationService {
    constructor(donationRepository) {
        this.donationRepository = donationRepository;
    }
    addDonation(amount, donorName, month, category) {
        const newDonation = new Donation_1.Donation((this.donationRepository.count() + 1).toString(), amount, donorName, month, category);
        this.donationRepository.add(newDonation);
        return newDonation;
    }
    getDonations() {
        return this.donationRepository.getAll();
    }
}
exports.DonationService = DonationService;
