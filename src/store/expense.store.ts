import { create } from 'zustand';

type Expense = {
  id: number;
  name: string;
  amount: number;
  date: Date;
  status: 'paid' | 'unpaid';
};

type ExpenseSlice = {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  updateExpense: (id: number, expense: Expense) => void;
  deleteExpense: (id: number) => void;
};

export const useExpenseStore = create<ExpenseSlice>((set) => ({
  expenses: [],
  addExpense: (expense) => set((state) => ({ expenses: [...state.expenses, expense] })),
  updateExpense: (id, expense) =>
    set((state) => ({ expenses: state.expenses.map((e) => (e.id === id ? expense : e)) })),
  deleteExpense: (id) => set((state) => ({ expenses: state.expenses.filter((e) => e.id !== id) })),
}));
