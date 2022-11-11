import ScoreAndResults from './sections/ScoreAndResults';
import ChooseAndPlay from './sections/ChooseAndPlay';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.titleCtn}>
        <h1>ROCK, PAPER, SCISSORS</h1>
        <p>React Typescript Game!</p>
      </div>
      <ScoreAndResults />
      <ChooseAndPlay />
    </div>
  );
}

export default App;
