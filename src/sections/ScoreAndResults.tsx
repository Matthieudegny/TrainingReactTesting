import React, { useEffect, useState } from 'react';
import { p } from 'vitest/dist/index-9f5bc072';
import { useOptions } from '../context/optionsContext';
import { OptionActionKind } from '../reducers/scoreReducerTypes';
import { checkWinner } from '../utils/checkWinner';
import styles from './ScoreAndResults.module.css';

const ScoreAndResults = () => {
  const [timer, setTimer] = useState<number>(3);

  const optionsContext = useOptions();
  const { runTimer } = optionsContext.state;
  const { dispatch } = optionsContext;

  const playerHandIndex = optionsContext.state.playerHand;
  const playerHandName = optionsContext.options[playerHandIndex].name;
  const playerHandIcon = optionsContext.options[playerHandIndex].icon;
  const playerScore = optionsContext.state.score.player;

  const computerHandIndex = optionsContext.state.computerHand;
  const computerHandName = optionsContext.options[computerHandIndex].name;
  const computerHandIcon = optionsContext.options[computerHandIndex].icon;
  const computerScore = optionsContext.state.score.computer;

  const { winner, message } = optionsContext.state.results;

  useEffect(() => {
    if (runTimer) {
      const newInterValId = setInterval(() => {
        setTimer((prevCount) => {
          if (prevCount === 1) {
            clearInterval(newInterValId);
          }

          return prevCount - 1;
        });
      }, 1000);
    }
  }, [runTimer]);

  useEffect(() => {
    if (timer === 0) {
      setTimer(3);
      dispatch({ type: OptionActionKind.RUN_TIMER, payload: false });
      checkWinner(dispatch, playerHandName, computerHandName);
    }
  }, [timer]);

  return (
    <>
      <div className={styles.scoreCtn}>
        <div className={styles.score}>
          <h3>Score</h3>
          <p>Player: {playerScore}</p>
        </div>
        <div className={styles.score}>
          <h3>Score</h3>
          <p>Computer: {computerScore}</p>
        </div>
      </div>
      <div className={styles.results}>
        <div className={styles.playerHand}>
          {!runTimer && winner && (
            <>
              <div>{playerHandIcon}</div>
              <p>{playerHandName}</p>
            </>
          )}
        </div>
        <div className={styles.midCol}>
          {runTimer && (
            <p data-testid="timer" className={styles.timer}>
              {timer}
            </p>
          )}
          {!runTimer && winner && <p className={styles.resultWinner}>{winner} wins!</p>}
          {!runTimer && winner && <p className={styles.resultMessage}>{message}</p>}
        </div>
        <div className={styles.computerHand}>
          {!runTimer && winner && (
            <>
              <div>{computerHandIcon}</div>
              <p>{computerHandName}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ScoreAndResults;
