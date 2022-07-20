import { ActionCase, IUser, IUserStore, TypeActions } from "./types";

const store: IUserStore = {
    user: {
        isAuth: false,
        isAdmin: false,
        email: '',
        password: '',
    },
};

export const userReducer = (state = store, action: TypeActions): IUserStore => {
    switch (action.type) {
        case ActionCase.TEST:
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

export const testAction = (payload: IUser) => ({
    type: ActionCase.TEST,
    payload,
});
