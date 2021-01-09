import React from "react";
import { useDispatch } from "react-redux";

import * as playerActions from "../../store/actions/players";

import edit from "../../assets/edit.svg";

const PlayerItem = (props) => {
  const dispatch = useDispatch();

  const handleClickDeletePlayer = (player) => {
    dispatch(playerActions.deletePlayer(player.id));
  };

  const handleClickUpdatePlayer = (player) => {
    dispatch(
      playerActions.updatePlayer(player.id, {
        name: "Update player name",
        avatar:
          "https://images.unsplash.com/photo-1517423738875-5ce310acd3da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=705&q=80",
      })
    );
  };

  return (
    <div className="setup-players-list-item">
      <img
        className="setup-players-list-item-photo"
        src={props.player.avatar}
        alt=""
      />
      <input type="text" value={props.player.name} readOnly />
      <button
        className="setup-players-list-item-edit-button"
        onClick={() => handleClickUpdatePlayer(props.player)}
      >
        <img src={edit} alt="logo" />
      </button>

      <button onClick={() => handleClickDeletePlayer(props.player)}>x</button>
    </div>
  );
};

export default PlayerItem;
