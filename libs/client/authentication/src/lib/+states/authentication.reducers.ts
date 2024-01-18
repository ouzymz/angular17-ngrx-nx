import { createFeature, createReducer, on } from "@ngrx/store";
import { User, AuthState } from "../models/auth.models";

export const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    jwtToken: null,
};

export const authReducer = createReducer(
    initialState,

    // on(AuthActions.loginInit, (state, { user }) => ({ ...state, isAuthenticated: AuthTypes.UNAUTHENTICATED, user: user })),
    // on(AuthActions.loginSucces, (state, { user, token }) => ({ ...state, isAuthenticated: AuthTypes.AUTHENTICATED, jwtToken: token, user: user })),
    // on(AuthActions.loginFailure, (state => ({ ...state, isAuthenticated: AuthTypes.UNAUTHENTICATED, user: null, jwtToken: null }))),
);