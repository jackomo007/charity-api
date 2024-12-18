"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const donationService_1 = require("../../aplication/donationService");
const inMemoryDonationRepository_1 = require("../repositories/inMemoryDonationRepository");
const repository = new inMemoryDonationRepository_1.InMemoryDonationRepository();
const service = new donationService_1.DonationService(repository);
exports.resolvers = {
    Query: {
        donations: () => service.getDonations(),
    },
    Mutation: {
        addDonation: (_, args) => service.addDonation(args.amount, args.donorName, args.month, args.category),
    },
};
