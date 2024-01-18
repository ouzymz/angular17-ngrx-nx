import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthActions } from "./authentication.actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { AuthenticationService } from "../authentication.service";

// @Injectable()
// export class AuthEffects {

//   constructor(
//     private authActions$: Actions,
//     private authService: AuthenticationService
//   ) { }

//   login$ = createEffect(() =>
//     this.authActions$.pipe(
//       ofType(AuthActions.loginInit),
//       exhaustMap(action =>
//         this.authService.login(action.user).pipe(
//           map(data => AuthActions.loginSucces({ user: data.user, token: data.token })),
//           catchError(error => of(AuthActions.loginFailure({ error })))
//         )
//       )
//     ))

//   validateToken$ = createEffect(() => this.authActions$.pipe(
//     ofType(AuthActions.validateToken),
//     exhaustMap(() =>
//       this.authService.validateToken().pipe(
//         map(() => AuthActions.validationSucceed()),
//         catchError(error => of(AuthActions.validationFailure({ error })))
//       )
//     ))
//   );
// }