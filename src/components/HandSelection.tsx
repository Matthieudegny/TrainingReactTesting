import React from 'react';
import styles from './HandSelection.module.css';

interface Props {
  name: string;
  icon: JSX.Element;
}

const HandSelection: React.FC<Props> = ({ name, icon }) => {
  return (
    <>
      <button className={styles.choiceBtn}>
        {name}
        {icon}
      </button>
    </>
  );
};

export default HandSelection;
