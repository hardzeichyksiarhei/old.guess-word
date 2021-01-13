import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Row, Col } from "antd";

import ButtonLink from "../../components/ButtonLink";

import * as gameActions from "../../store/actions/game";
import gameSelectors from "../../store/selectors/game";

const GameChoose = () => {
  const dispatch = useDispatch();

  const user = useSelector(gameSelectors.user);
  const words = useSelector(gameSelectors.words);

  useEffect(() => {
    dispatch(gameActions.setWords());
  }, [dispatch]);

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
            { user?.name }
          </ButtonLink>
        </Col>
      </Row>

      <div className="page-description">Выберите слово для объяснения</div>

      <div className="game-choose-page__content text-center py-1">
        <Row className="game-choose-page__content-words">
          {words.map((word) => (
            <Col className="game-choose-page__content-singleword " span={24}>
              { word?.value }
            </Col>
          ))}
        </Row>
      </div>

      <ButtonLink
        className="mt-2 text-uppercase"
        linkTo="/game-round"
        type="primary"
        shape="round"
        block
      >
        Выхожу на поле
      </ButtonLink>
    </div>
  );
};

export default GameChoose;
