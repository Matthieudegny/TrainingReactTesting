import React from 'react';
import styles from './ChooseAndPlay.module.css';
import HandSelection from '../components/HandSelection';
import { useOptions } from '../context/optionsContext';

import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from 'react-icons/fa';

const ChooseAndPlay = () => {
  const optionsContext = useOptions();

  const HanpOptionsArray = optionsContext.options.map((hand) => {
    return <HandSelection name={hand.name} icon={hand.icon} />;
  });

  return (
    <>
      <div className={styles.choiceBtnCtn}>{HanpOptionsArray}</div>
      <button className={styles.playBtn}>Play</button>
    </>
  );
};

export default ChooseAndPlay;
