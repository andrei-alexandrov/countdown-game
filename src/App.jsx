import Player from './components/Player/Player';
import TimerChallenge from "./components/TimerChallenge/TimerChallenge";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="EASY" timer={1} />
        <TimerChallenge title="NOT EASY" timer={5} />
        <TimerChallenge title="GETTING TOUGH" timer={10} />
        <TimerChallenge title="PROS ONLY" timer={15} />
      </div>
    </>
  );
}

export default App;
