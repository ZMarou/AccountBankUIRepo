import * as fromClient from './client.reducer'
import { Client } from '../models/client';

export const reducers = {
  client: fromClient.clientReducer,
}

export interface State {
    client: Client,
  }

export const getClientState = (state: State) => state.client;