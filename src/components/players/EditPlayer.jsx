import React, { useEffect, useState } from "react";

import { Input, Button, Space } from "antd";
import { useDispatch } from "react-redux";

import * as playerActions from "../../store/actions/players";

import "./EditPlayer.scss";

const EditPlayer = (props) => {
  const [player, setPlayer] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const { id, name, avatar } = props.player;
    setPlayer({ id, name, avatar });
  }, [props.player]);

  const handleSaveEditPlayer = () => {
    dispatch(
      playerActions.updatePlayer(player.id, {
        name: player.name,
        avatar: player.avatar,
      })
    );
    props.onSave(player);
  };

  const handleCancelEditPlayer = () => {
    props.onCancel();
  };

  if (!player) return null;

  return (
    <div className="edit-player">
      <Input
        value={player.name}
        onChange={(event) => setPlayer({ ...player, name: event.target.value })}
        className="mb-2"
        placeholder="Имя пользователя"
      />

      <div className="player-avatars-grid">
        {[...Array(12)].map((_, idx) => (
          <div
            className={`player-avatars-grid__item ${
              player.avatar === idx + 1 ? "active" : ""
            }`}
            onClick={() => setPlayer({ ...player, avatar: idx + 1 })}
            key={idx}
          >
            <img
              src={`./img/avatars/${idx + 1}.jpg`}
              alt={`Avatar #${idx + 1}`}
            />
          </div>
        ))}
      </div>

      <Space>
        <Button onClick={handleCancelEditPlayer}>Отмена</Button>
        <Button type="primary" onClick={handleSaveEditPlayer}>
          Сохранить
        </Button>
      </Space>
    </div>
  );
};

export default EditPlayer;
