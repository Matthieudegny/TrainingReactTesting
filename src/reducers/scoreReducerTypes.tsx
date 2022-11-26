export enum OptionActionKind {
  UPDATE_PLAYER_CHOICE = 'UPDATE_PLAYER_CHOICE',
}

interface UpdatePlayerChoice {
  type: OptionActionKind.UPDATE_PLAYER_CHOICE;
  payload: number;
}

export type ActionTypes = UpdatePlayerChoice;
