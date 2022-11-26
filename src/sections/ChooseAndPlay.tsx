import styles from './ChooseAndPlay.module.css';
import HandSelection from '../components/HandSelection';
import { useOptions } from '../context/optionsContext';

const ChooseAndPlay = () => {
  const optionsContext = useOptions();

  const HanpOptionsArray = optionsContext.options.map((hand, i) => {
    return <HandSelection name={hand.name} icon={hand.icon} handChoiceIndex={i} />;
  });

  return (
    <>
      <div className={styles.choiceBtnCtn}>{HanpOptionsArray}</div>
      <button className={styles.playBtn}>Play</button>
    </>
  );
};

export default ChooseAndPlay;
