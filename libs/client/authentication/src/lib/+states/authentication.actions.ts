import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../models/authentication.model'

export const AuthActions = createActionGroup({
    source: 'Auth',
    events: {
        // 'Login Init': props<{ user: User }>(), // AuthActions.loginInit()
        // 'Login Succes': props<{ user: User, token: string }>(), // AuthActions.loginSuccess()
        // 'Login Failure': props<{ error: any }>(), // AuthActions.loginFailure()
    }
})