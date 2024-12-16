import { Donation } from "../domain/Donation";
import { IDonationRepository } from "../interfaceAdapters/repositories/IDonationRepository";

export class DonationService {
  constructor(private donationRepository: IDonationRepository) {}

  addDonation(
    amount: number,
    donorName: string,
    month: string,
    category: string
  ): Donation {
    const newDonation = new Donation(
      (this.donationRepository.count() + 1).toString(),
      amount,
      donorName,
      month,
      category
    );

    this.donationRepository.add(newDonation);
    return newDonation;
  }

  getDonations(): Donation[] {
    return this.donationRepository.getAll();
  }
}
