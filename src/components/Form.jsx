import React from "react";
import "./Form.css";

const Form = ({
  setIsFormFilled,
  settings,
  setSettings,
  players,
  setPlayers,
}) => {
  const handleClick = (event) => {
    event.preventDefault();
    setIsFormFilled(true);
  };

  const handleChangeForNames = (event, n) => {
    const newPlayers = [...players]
    newPlayers[n].name = event.target.value;
    setPlayers(newPlayers);
  };


  const handleChangeForDealerChoosing = (event) => {
    const dealerId = players.filter(player => +event.target.value === player.id)[0].id;
    setSettings(prev => ({
      ...prev,
      dealerId: dealerId,
    }))
  }

  return (
    <form className="Form">
      <div className="logo">
        <h2>პასტა/ფურცელი</h2>
      </div>
      <div className="Form-players">
        <input
          required
          type="text"
          onChange={(event) => handleChangeForNames(event, 0)}
          placeholder="მოთამაშე I"></input>
        <input
          required
          type="text"
          onChange={(event) => handleChangeForNames(event, 1)}
          placeholder="მოთამაშე II"></input>
        <input
          required
          type="text"
          onChange={(event) => handleChangeForNames(event, 2)}
          placeholder="მოთამაშე III"></input>
        <input
          required
          type="text"
          onChange={(event) => handleChangeForNames(event, 3)}
          placeholder="მოთამაშე IV"></input>
      </div>
      <div className="Form-game-type">
        <label>აირჩიე ტიპი:</label>
        <select
          onChange={(e) =>
            setSettings((prev) => ({
              ...prev,
              gameType: e.target.value,
            }))
          }>
          <option>ცხრიანები</option>
          <option disabled={true}>სტანდარტული --coming soon--</option>
        </select>
      </div>
      <div className="Form-khishti">
        <label>აირჩიე ხიშტი: </label>
        <select
          onChange={(e) =>
            setSettings((prev) => ({
              ...prev,
              khishti: e.target.value,
            }))
          }
          defaultValue={500}>
          <option value={200}>200</option>
          <option value={300}>300</option>
          <option value={500}>500</option>
          <option value={1000}>1000</option>
        </select>
      </div>
      <div className="checkbox">
        <label>ბოლო არ იშლება: </label>
        <input
          onChange={() =>
            setSettings((prev) => ({
              ...prev,
              isLastScoreDeletable: !prev.isLastScoreDeletable,
            }))
          }
          type="checkbox"
        />
      </div>
      <div className="Form-dealer">
        <p>ვინ არიგებს?</p>
        <div className="container">
          {Object.values(players).map(
            (player) =>
              player.name && (
                <span key={player.id}>
                  <input type="radio" id={player.id} onChange={(e) => handleChangeForDealerChoosing(e)} name="dealer" value={player.id} />
                  <label htmlFor={player.id}>{player.name}</label>
                </span>
              )
          )}
        </div>
      </div>
      <button onClick={(event) => handleClick(event)} type="submit">
        თამაშის დაწყება
      </button>
    </form>
  );
};

export default Form;
