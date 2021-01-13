import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Row, Col } from "antd";

import ButtonLink from "../../components/ButtonLink";

import * as gameActions from "../../store/actions/game";
import gameSelectors from "../../store/selectors/game";

const GameChoose = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const player = useSelector(gameSelectors.player);
  const words = useSelector(gameSelectors.words);

  useEffect(() => {
    dispatch(gameActions.setWords());
  }, [dispatch]);

  const handleClickWord = (word) => {
    dispatch(gameActions.setWord(word))
    navigation("/game-round");
  };

  return (
    <div className="game-choose-page">
      <Row justify="space-between" align="center">
        <Col span={12}>
          <div className="page-title">Выберите слово</div>
        </Col>
        <Col span={7}>
          <ButtonLink
            className="text-uppercase btn-secondary"
            linkTo="/rules"
            type="primary"
            shape="round"
            size="small"
          >
            {player?.name}
          </ButtonLink>
        </Col>
      </Row>

      <div className="page-description">Выберите слово для объяснения</div>

      <div className="game-choose-page__content text-center py-1">
        <Row className="game-choose-page__content-words">
          {words.map((word) => (
            <Col
              className="game-choose-page__content-singleword"
              onClick={() => handleClickWord(word)}
              span={24}
              key={word.value}
            >
              {word?.value}
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default GameChoose;
