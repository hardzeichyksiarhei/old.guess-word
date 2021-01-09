import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Modal, List, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import PlayerItem from "./PlayerItem";
import EditPlayer from "./EditPlayer";

import * as playerActions from "../../store/actions/players";
import playerSelectors from "../../store/selectors/players";

const PlayersList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editPlayer, setEditPlayer] = useState(null);

  const dispatch = useDispatch();
  const players = useSelector(playerSelectors.players);

  const handleClickAddPlayer = () => {
    dispatch(
      playerActions.addPlayer({
        name: `New player`,
        avatar: 1,
      })
    );
  };

  const handleEditPlayer = (player) => {
    setIsModalVisible(true);
    setEditPlayer(player);
  };

  const handleSaveEditPlayer = () => {
    setIsModalVisible(false);
    setEditPlayer(null);
  };

  const handleCancelEditPlayer = () => {
    setIsModalVisible(false);
    setEditPlayer(null);
  };

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={players}
        renderItem={(player, idx) => (
          <PlayerItem
            player={player}
            isDeletable={idx > 1}
            onEdit={handleEditPlayer}
            key={player.id}
          />
        )}
      />

      <Button
        className="mt-2 text-uppercase"
        type="text"
        shape="round"
        icon={<PlusCircleOutlined />}
        onClick={handleClickAddPlayer}
        block
      >
        Добавить игрока
      </Button>

      <Modal
        title="Редактор пользователя"
        visible={isModalVisible}
        footer={null}
        closable={false}
      >
        {editPlayer ? (
          <EditPlayer
            player={editPlayer}
            onSave={handleSaveEditPlayer}
            onCancel={handleCancelEditPlayer}
          ></EditPlayer>
        ) : null}
      </Modal>
    </>
  );
};

export default PlayersList;
