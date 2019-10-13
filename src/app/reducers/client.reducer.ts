import { ClientActionType, ClientActions } from '../actions/client.actions';
import { Client } from '../models/client';

export const initialState: Client = {
    firstName : '',
    lastName : '',
    email: ''
  };

export function clientReducer(state : Client = initialState, action: ClientActions) {
    switch (action.type) {

        case ClientActionType.ADD_CLIENT: {
            console.warn('ADD_CLIENT reducer');
            return { ...state };
        }

        case ClientActionType.ADD_CLIENT_SUCCESS: {
            console.warn('ADD_CLIENT_SUCCESS reducer');
            return {
                ...state,
                client: action.payload,
            };
        }

        case ClientActionType.ADD_CLIENT_FAILED: {
            console.warn('ADD_CLIENT_FAILED reducer');
            return { ...state };
        }
    }
}   