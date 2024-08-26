export interface Plan {
    createdAt: Date;
    accountNumber: string;
    chargeDate: Date;
    status: string;
    investmentAmount: number,
    accmulatedAmount: number,
    currency: string;
    currentValue: number,
    id: number;
  }

export interface Account {
    createdAt: Date;
    accountNumber: string;
    accountBalance: number;
    currency: string;
    id: number;
  }