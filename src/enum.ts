export enum CustomerType {
  REGULAR = 'REGULAR',
  VIP = 'VIP',
  PREMIUM = 'PREMIUM',
}

export type Customer = {
  id: string;
  name: string;
  type: CustomerType;
};
