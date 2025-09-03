import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Item = {
  id: string;
  title: string;
  amount: number;
};

type FinanceState = {
  balance: Item[];
  savings: Item[];
  expenses: Item[];
  income: Item[];
  investments: Item[];
};

const financeSlice = createSlice({
  name: "finance",
  initialState: {
    balance: [] as Item[],
    savings: [] as Item[],
    expenses: [] as Item[],
    income: [] as Item[],
    investments: [] as Item[],
  } as FinanceState,
  reducers: {
    setExpenses: (state, action: PayloadAction<Item[]>) => {
      state.expenses = action.payload;
    },
    setIncome: (state, action: PayloadAction<Item[]>) => {
      state.income = action.payload;
    },
      setSavings: (state, action: PayloadAction<Item[]>) => {
      state.income = action.payload;
    },
    setInvestments: (state, action: PayloadAction<Item[]>) => {
      state.income = action.payload;
    },
      setBalance: (state, action: PayloadAction<Item[]>) => {
      state.income = action.payload;
    },
  },
});

export const { setExpenses, setIncome, setBalance, setInvestments, setSavings } = financeSlice.actions;
export default financeSlice.reducer;
