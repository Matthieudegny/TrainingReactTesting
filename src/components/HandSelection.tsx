import React from 'react';
import { useOptions } from '../context/optionsContext';
import { OptionActionKind } from '../reducers/scoreReducerTypes';
import styles from './HandSelection.module.css';

interface Props {
  name: string;
  icon: JSX.Element;
  handChoiceIndex: number;
}

const HandSelection: React.FC<Props> = ({ name, icon, handChoiceIndex }) => {
  const optionsContext = useOptions();

  const { dispatch, state } = optionsContext;

  const selectOption = (index: number) => {
    dispatch({ type: OptionActionKind.UPDATE_PLAYER_CHOICE, payload: index });
  };

  console.log(state);

  return (
    <>
      <button className={styles.choiceBtn} onClick={() => selectOption(handChoiceIndex)}>
        {name}
        {icon}
      </button>
    </>
  );
};

export default HandSelection;
