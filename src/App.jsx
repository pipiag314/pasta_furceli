import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import GameTable from "./components/GameTable";

function App() {
  const [players, setPlayers] = useState({
    player1: {
      name: "",
      id: 1,
      score: 0,
    },
    player2: {
      name: "",
      id: 2,
      score: 0,
    },
    player3: {
      name: "",
      id: 3,
      score: 0,
    },
    player4: {
      name: "",
      id: 4,
      score: 0,
    },
  });

  const [settings, setSettings] = useState({
    gameType: "ცხრიანები",
    khishti: 500,
    isLastScoreDeletable: true,
    dealerId: 4,
  });

  const [isFormFilled, setIsFormFilled] = useState(false);

  return (
    <div className="App">
      {!isFormFilled ? (
        <Form
          settings={settings}
          setSettings={setSettings}
          setIsFormFilled={setIsFormFilled}
          players={players}
          setPlayers={setPlayers}
        />
      ) : (
        <GameTable players={players} settings={settings} setSettings={setSettings} />
      )}
    </div>
  );
}

export default App;
