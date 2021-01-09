import { useDispatch } from "react-redux";

import * as playerActions from "../../store/actions/players";

import { List, Button, Space } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import "./PlayerItem.scss";

const PlayerItem = (props) => {
  const dispatch = useDispatch();

  const handleClickDeletePlayer = (player) => {
    dispatch(playerActions.deletePlayer(player.id));
  };

  return (
    <List.Item className="player-item">
      <img className="player-item__avatar" src={`./img/avatars/${props.player.avatar}.png`} alt="" />
      <div className="player-item__name">{props.player.name}</div>
      <div className="player-item__controls">
        <Space>
          <Button
            type="default"
            icon={<EditOutlined />}
            onClick={() => props.onEdit(props.player)}
          />
          {props.isDeletable ? (
            <Button
              type="danger"
              icon={<DeleteOutlined />}
              onClick={() => handleClickDeletePlayer(props.player)}
            />
          ) : null}
        </Space>
      </div>
    </List.Item>
  );
};

export default PlayerItem;
