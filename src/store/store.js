import {configureStore, createSlice} from '@reduxjs/toolkit';

const rate = 0.035;

const monthPayAccount = (cost, initial, term) => {
    const pow = Math.pow((1 + rate), term);
    const monthPay = (cost - initial) * ((rate * pow) / (pow - 1));
    return monthPay;
};

const leasingDataSlice = createSlice({
    name: 'leasingData',
    initialState: {
        cost: 3300000,
        percent: 13,
        term: 60,
        initialPayment: 420000,
        totalSum: 4467313,
        monthPay: 114455,
    },
    reducers: {
        changeCost(state, action) {
            const initial = Math.floor((action.payload / 100) * state.percent);
            const monthPay = Math.floor(monthPayAccount(action.payload, initial, state.term));

            state.cost = action.payload;
            state.initialPayment = initial;
            state.monthPay = monthPay;
            state.totalSum = Math.floor(initial + (state.term * monthPay));
        },
        changePercent(state, action) {
            const initial = Math.floor((state.cost / 100) * action.payload);
            const monthPay = Math.floor(monthPayAccount(state.cost, initial, state.term));

            state.percent = action.payload;
            state.initialPayment = initial;
            state.monthPay = monthPay;
            state.totalSum = Math.floor(initial + (state.term * monthPay));
        },
        changeTerm(state, action) {
            const monthPay = monthPayAccount(state.cost, state.initialPayment, action.payload);

            state.term = action.payload;
            state.monthPay = monthPay;
            state.totalSum = Math.floor(state.initialPayment + (action.payload * monthPay));
        }
    },
});

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false,
    },
    reducers: {
        modalOpen(state) {
            state.isOpen = true;
        },
        modalClose(state) {
            state.isOpen = false;
        }
    },
});

const store = configureStore({
    reducer: {
        leasingData: leasingDataSlice.reducer,
        modal: modalSlice.reducer,
    },
});

export const leasingDataActions = leasingDataSlice.actions;
export const modalActions= modalSlice.actions;

export default store;