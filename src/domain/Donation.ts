export class Donation {
  constructor(
    public id: string,
    public amount: number,
    public donorName: string,
    public month: string,
    public category: string
  ) {}
}
