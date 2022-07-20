export interface IUser {
    isAuth: boolean;
    isAdmin:boolean,
    email: string;
    password: string;
}

export interface IUserStore {
    user: IUser;
}

// ACTIONS TYPES

export enum ActionCase {
    TEST = 'TEST',
}

export interface ITestAction {
    type: ActionCase.TEST;
    payload: IUser;
}

export type TypeActions = ITestAction;
