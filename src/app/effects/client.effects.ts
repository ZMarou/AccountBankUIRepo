import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { ClientService } from '../services/client.service';
import { ClientActionType, AddClientActionSuccess, AddClientActionFailed, AddClientAction } from '../actions/client.actions';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { Client } from '../models/client';
import { of } from 'rxjs';
import * as fromRoot from '../reducers/index'
import { Store } from '@ngrx/store';

@Injectable()
export class clientEffects {

  constructor(
    private actions$: Actions,
    private clientService: ClientService,
    public store: Store<fromRoot.State>
  ) { }

  @Effect()
  addClient$ = this.actions$.pipe(
    ofType(ClientActionType.ADD_CLIENT),
    switchMap((client: AddClientAction) =>
      this.clientService.addClient(client.payload).pipe(
        tap(_ => {
          console.warn('addClient effect');
          console.log(_)
        }),
        map((client: Client) => new AddClientActionSuccess(client)),
        catchError(error => of(new AddClientActionFailed(error)))
      )
    )
  );
}