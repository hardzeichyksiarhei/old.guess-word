import React from "react";
import { useDispatch, useSelector } from "react-redux";

import PlayerItem from "./PlayerItem";

import * as playerActions from "../../store/actions/players";
import playerSelectors from "../../store/selectors/players";

import plus from "../../assets/plus.svg";

const PlayersList = () => {
  const dispatch = useDispatch();
  const players = useSelector(playerSelectors.players);

  const handleClickAddPlayer = () => {
    dispatch(
      playerActions.addPlayer({
        name: `New player`,
        avatar: "https://via.placeholder.com/150",
      })
    );
  };

  return (
    <>
      <div className="setup-players-list">
        {players.map((player) => (
          <PlayerItem player={player} key={player.id} />
        ))}
      </div>

      <button className="setup-players-add-item" onClick={handleClickAddPlayer}>
        <img width="26px" height="26px" src={plus} alt="logo"></img>
        добавить игрока
      </button>
    </>
  );
};

export default PlayersList;
