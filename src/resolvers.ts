interface AddDonationArgs {
  amount: number;
  donorName: string;
  month: string;
  category: string;
}

const donations = [
  {
    id: "1",
    month: "Jan",
    amount: 4000,
    donorName: "John Doe",
    category: "education",
  },
  {
    id: "2",
    month: "Feb",
    amount: 3000,
    donorName: "Jane Smith",
    category: "healthcare",
  },
  {
    id: "3",
    month: "Mar",
    amount: 5000,
    donorName: "John Doe",
    category: "environment",
  },
  {
    id: "4",
    month: "Apr",
    amount: 4500,
    donorName: "Jane Smith",
    category: "poverty",
  },
  {
    id: "5",
    month: "May",
    amount: 6000,
    donorName: "John Doe",
    category: "arts",
  },
  {
    id: "6",
    month: "Jun",
    amount: 5500,
    donorName: "Jane Smith",
    category: "education",
  },
  {
    id: "7",
    month: "Jul",
    amount: 5000,
    donorName: "John Doe",
    category: "healthcare",
  },
  {
    id: "8",
    month: "Aug",
    amount: 1430,
    donorName: "Jane Smith",
    category: "environment",
  },
  {
    id: "9",
    month: "Sep",
    amount: 5790,
    donorName: "John Doe",
    category: "poverty",
  },
  {
    id: "10",
    month: "Oct",
    amount: 7600,
    donorName: "Jane Smith",
    category: "arts",
  },
  {
    id: "11",
    month: "Nov",
    amount: 8300,
    donorName: "John Doe",
    category: "education",
  },
  {
    id: "12",
    month: "Dec",
    amount: 9800,
    donorName: "Jane Smith",
    category: "healthcare",
  },
];

export const resolvers = {
  Query: {
    donations: () => donations,
    metrics: () => [
      { label: "Lives Impacted", type: 1, value: 12.45 },
      { label: "Projects Funded", type: 2, value: 89 },
      { label: "Success Rate", type: 3, value: 94 },
    ],
  },
  Mutation: {
    addDonation: (
      _: unknown,
      { amount, donorName, month, category }: AddDonationArgs
    ) => {
      const newDonation = {
        id: (donations.length + 1).toString(),
        amount,
        donorName,
        month,
        category,
      };

      donations.push(newDonation);
      return newDonation;
    },
  },
};
