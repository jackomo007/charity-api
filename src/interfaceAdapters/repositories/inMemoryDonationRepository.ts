import { Donation } from "../../domain/Donation";
import { IDonationRepository } from "./IDonationRepository";

export class InMemoryDonationRepository implements IDonationRepository {
  private donations: Donation[] = [];

  add(donation: Donation): void {
    this.donations.push(donation);
  }

  getAll(): Donation[] {
    return this.donations;
  }

  count(): number {
    return this.donations.length;
  }
}
