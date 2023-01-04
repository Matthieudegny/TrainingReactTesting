import React, { useEffect, useState } from 'react';
import { useOptions } from '../context/optionsContext';
import { OptionActionKind } from '../reducers/scoreReducerTypes';
import styles from './ScoreAndResults.module.css';

const ScoreAndResults = () => {
  const [timer, setTimer] = useState<number>(3);

  const optionsContext = useOptions();
  const { runTimer } = optionsContext.state;
  const { dispatch } = optionsContext;

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
    }
  }, [timer]);

  return (
    <>
      <div className={styles.scoreCtn}>
        <div className={styles.score}>
          <h3>Score</h3>
          <p>Player:</p>
        </div>
        <div className={styles.score}>
          <h3>Score</h3>
          <p>Computer:</p>
        </div>
      </div>
      <div className={styles.results}>
        <div className={styles.playerHand}></div>
        <div className={styles.midCol}>{runTimer && <p className={styles.timer}>{timer}</p>}</div>
        <div className={styles.computerHand}></div>
      </div>
    </>
  );
};

export default ScoreAndResults;
