import type { Transaction } from "./Transaction";

export interface DashboardState {

    totalCustomers: number;

    totalTransactions: number;

    customerServiceStatus: string;

    transactionServiceStatus: string;
    recentTransactions:Transaction[];

}