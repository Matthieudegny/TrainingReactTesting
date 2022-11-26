import { IInitialState } from '../context/optionsContextTypes';
import { ActionTypes } from './scoreReducerTypes';

export default function scoreReducer(state: IInitialState, action: ActionTypes) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_PLAYER_CHOICE':
      return {
        ...state,
        playerHand: payload,
      };
    default:
      return {
        ...state,
        results: {
          winner: 'error',
          message: 'We have an error',
        },
      };
  }
}
