import React from 'react';
import styles from './ChooseAndPlay.module.css';
import HandSelection from '../components/HandSelection';

import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from 'react-icons/fa';

const ChooseAndPlay = () => {
  return (
    <>
      <div className={styles.choiceBtnCtn}>
        <HandSelection name="rock" icon={<FaRegHandRock size={60} />} />
        <HandSelection name="paper" icon={<FaRegHandPaper size={60} />} />
        <HandSelection name="scissors" icon={<FaRegHandScissors size={60} />} />
      </div>
      <button className={styles.playBtn}>Play</button>
    </>
  );
};

export default ChooseAndPlay;
