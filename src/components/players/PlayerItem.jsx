import React, { useState } from "react";
import { useDispatch } from "react-redux";

import * as playerActions from "../../store/actions/players";

import edit from "../../assets/edit.svg";

const PlayerItem = (props) => {
  const [isEditName, setIsEditName] = useState(false);

  const dispatch = useDispatch();

  const handleClickDeletePlayer = (player) => {
    dispatch(playerActions.deletePlayer(player.id));
  };

  const handleClickUpdateAvatarPlayer = (player) => {
    dispatch(
      playerActions.updatePlayer(player.id, {
        avatar:
          "https://images.unsplash.com/photo-1517423738875-5ce310acd3da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=705&q=80",
      })
    );
  };

  const handleClickUpdateNamePlayer = (event, player) => {
    const name = event.target.value;
    dispatch(
      playerActions.updatePlayer(player.id, { name })
    );
  };

  return (
    <div className="setup-players-list-item">
      <img
        className="setup-players-list-item-photo"
        src={props.player.avatar}
        onClick={() => handleClickUpdateAvatarPlayer(props.player)}
        alt=""
      />
      <input
        type="text"
        value={props.player.name}
        readOnly={!isEditName}
        onChange={(event) => handleClickUpdateNamePlayer(event, props.player)}
      />
      <button
        className="setup-players-list-item-edit-button"
        onClick={() => setIsEditName(!isEditName)}
      >
        <img src={edit} alt="logo" />
      </button>

      <button onClick={() => handleClickDeletePlayer(props.player)}>x</button>
    </div>
  );
};

export default PlayerItem;
