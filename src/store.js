import createStore from "redux-zero";
const initialState = {
    selected: 0
};

const store = createStore(initialState);
export default store;