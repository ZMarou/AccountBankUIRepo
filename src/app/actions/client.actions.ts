import { Client } from '../models/client';
import { Action } from '@ngrx/store';

export enum ClientActionType {
    ADD_CLIENT = 'ADD_CLIENT',
    ADD_CLIENT_SUCCESS = 'ADD_CLIENT_SUCCESS',
    ADD_CLIENT_FAILED = 'ADD_CLIENT_FAILED'
}
export class AddClientAction implements Action {
    readonly type = ClientActionType.ADD_CLIENT;
    constructor(public payload: Client) { }
}

export class AddClientActionSuccess implements Action {
    readonly type = ClientActionType.ADD_CLIENT_SUCCESS;
    constructor(public payload: Client) { }
}

export class AddClientActionFailed implements Action {
    readonly type = ClientActionType.ADD_CLIENT_FAILED;
    constructor(public payload: string) { }
}

export type ClientActions = AddClientAction |
    AddClientActionSuccess |
    AddClientActionFailed;