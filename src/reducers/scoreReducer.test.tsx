import { render, screen } from '@testing-library/react';
import { useEffect, useReducer } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { initialState } from '../context/initialContextValues';
import scoreReducer from './scoreReducer';
import { ActionTypes, OptionActionKind } from './scoreReducerTypes';

vi.mock('../context/initialContextValues', () => {
  return {
    initialState: {
      playerHand: 2,
      computerHand: 0,
      runTimer: false,
      score: {
        player: 0,
        computer: 0,
      },
      results: {
        winner: '',
        message: '',
      },
    },
  };
});

interface Iprops {
  myaction: ActionTypes;
}

const TestingComponent = (props: Iprops) => {
  const [state, dispatch] = useReducer(scoreReducer, initialState);

  useEffect(() => {
    dispatch(props.myaction);
  }, []);

  return (
    <>
      <p>playerhand: {state.playerHand}</p>
      <p>computerhand: {state.computerHand}</p>
    </>
  );
};

describe('scoreReducer', () => {
  it('should update the scoreReducer with the correct playerhand', () => {
    render(
      <TestingComponent myaction={{ type: OptionActionKind.UPDATE_PLAYER_CHOICE, payload: 0 }} />
    );

    expect(screen.getByText(/playerhand: 0/)).toBeInTheDocument();
  });

  it('should update the scoreReducer with the correct computerHand', () => {
    render(
      <TestingComponent myaction={{ type: OptionActionKind.UPDATE_COMPUTER_CHOICE, payload: 1 }} />
    );

    expect(screen.getByText(/computerhand: 1/)).toBeInTheDocument();
  });
});
