import { createStore, combineReducers } from "redux";

export const deposit = (value) => {
  return {
    type: `balance/deposit`,
    payload: value,
  };
};

export const withdraw = (value) => {
  return {
    type: `balance/withdraw`,
    payload: value,
  };
};

export const changeLang = (newLang) => {
  return {
    type: `locale/changeLang`,
    payload: newLang,
  };
};

const initialStore = {
  balance: {
    value: 0,
  },
  locale: {
    lang: `uk`,
  },
};

const balanceReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case `balance/deposit`:
      return {
        ...state,
        value: state.value + action.payload,
      };

    case `balance/withdraw`:
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
};

const langReducer = (state = { lang: `uk` }, action) => {
  switch (action.type) {
    case `locale/changeLang`:
      return {
        ...state,
        lang: action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  balance: balanceReducer,
  locale: langReducer,
});

export const store = createStore(rootReducer);
