import createStore from "redux-zero";
const initialState = {
    selected: 0,
    successLogin: false,
    user: {
        id: null,
        email: null,
        fullname: null,
    }
};

const store = createStore(initialState);
export default store;