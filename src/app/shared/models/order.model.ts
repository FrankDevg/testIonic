// order.model.ts
export interface Order {
  id: string;
  orderDate: Date;
  soldBy: string;
  total: number;
  mgGr: string;
  customerId: string;
}
