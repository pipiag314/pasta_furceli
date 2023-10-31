import React from "react";
import './Form.css'

const Form = () => {
  return (
    <form className="Form">
      <div className="logo">
        <h2>პასტა/ფურცელი</h2>
      </div>
      <div className="Form-players">
        <input placeholder="მოთამაშე I"></input>
        <input placeholder="მოთამაშე II"></input>
        <input placeholder="მოთამაშე III"></input>
        <input placeholder="მოთამაშე IV"></input>
      </div>
      <div className="Form-game-type">
        <label>აირჩიე ტიპი:</label>
        <select>
          <option>ცხრიანები</option>
          <option disabled={true} >სტანდარტული  --coming soon--</option>
        </select>
      </div>
      <div className="Form-khishti">
        <label>აირჩიე ხიშტი: </label>
        <select defaultValue={500}>
          <option value={200}>200</option>
          <option value={300}>300</option>
          <option value={500}>500</option>
          <option value={1000}>1000</option>
        </select>
      </div>
      <div className="checkbox">
        <label>ბოლო იშლება: </label>
        <input type="checkbox" />
      </div>
      <button type="submit">თამაშის დაწყება</button>
    </form>
  );
};

export default Form;
