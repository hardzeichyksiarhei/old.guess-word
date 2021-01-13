import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'

import { Row, Col } from "antd";

import * as gameActions from "../../store/actions/game";
import playerSelectors from "../../store/selectors/players";
import gameSelectors from "../../store/selectors/game";

import ButtonLink from "../../components/ButtonLink";

const GameStart = () => {
  const dispatch = useDispatch()
  
  const players = useSelector(playerSelectors.players)
  const step = useSelector(gameSelectors.step)

  const player = useSelector(gameSelectors.player)

  useEffect(() => {
    dispatch(gameActions.setPlayer(players[step]))
  }, [dispatch, players, step])

  return (
    <div className="game-start-page">
      <Row justify="space-between" align="center">
        <Col span={12}>
          <div className="page-title">Guess Word</div>
        </Col>
        <Col span={7}>
          <ButtonLink
            className="text-uppercase"
            linkTo="/rules"
            type="primary"
            shape="round"
            size="small"
            block
          >
            Правила
          </ButtonLink>
        </Col>
      </Row>

      <div className="game-start-page__content text-center py-1">
        <h3>Выходит на поле пользователь</h3>

        <h1 className="py-1 text-uppercase">
          <strong>{ player?.name }</strong>
        </h1>
      </div>

      <ButtonLink
        className="mt-2 text-uppercase"
        linkTo="/game-choose"
        type="primary"
        shape="round"
        block
      >
        Выхожу на поле
      </ButtonLink>
    </div>
  );
};

export default GameStart;
