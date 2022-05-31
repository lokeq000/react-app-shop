interface IUser {
    isAuth: false;
    email: string;
    password: string;
}

interface IUserStore {
    user: IUser;
}

const store: IUserStore = {
    user: {
        isAuth: false,
        email: '',
        password: '',
    },
};

// ACTIONS TYPES

enum ActionCase {
    TEST = 'TEST',
}

interface ITestAction {
    type: ActionCase.TEST;
    payload: IUser;
}

type TypeActions = ITestAction;
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
