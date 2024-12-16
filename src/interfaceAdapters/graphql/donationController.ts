import { DonationService } from "../../aplication/donationService";
import { InMemoryDonationRepository } from "../repositories/inMemoryDonationRepository";

const repository = new InMemoryDonationRepository();
const service = new DonationService(repository);

export const resolvers = {
  Query: {
    donations: () => service.getDonations(),
  },
  Mutation: {
    addDonation: (
      _: any,
      args: {
        amount: number;
        donorName: string;
        month: string;
        category: string;
      }
    ) =>
      service.addDonation(
        args.amount,
        args.donorName,
        args.month,
        args.category
      ),
  },
};
