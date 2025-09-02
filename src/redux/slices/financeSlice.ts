import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Item = {
  id: string;
  title: string;
  amount: number;
};

type FinanceState = {
  expenses: Item[];
  income: Item[];
  investments: Item[];
};

const financeSlice = createSlice({
  name: "finance",
  initialState: {
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
  },
});

export const { setExpenses, setIncome } = financeSlice.actions;
export default financeSlice.reducer;
