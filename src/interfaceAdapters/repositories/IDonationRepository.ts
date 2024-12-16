import { Donation } from "../../domain/Donation";

export interface IDonationRepository {
  add(donation: Donation): void;
  getAll(): Donation[];
  count(): number;
}

export interface AddDonationArgs {
  amount: number;
  donorName: string;
  month: string;
  category: string;
}
