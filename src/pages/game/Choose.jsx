import React from "react";

import ButtonLink from "../../components/ButtonLink";

import { Row, Col, Space } from "antd";

const GameChoose = () => {
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
            user1
          </ButtonLink>
        </Col>
      </Row>

      <div className="page-description">
        Выберите слово для объяснения
      </div>

      <div className="game-choose-page__content text-center py-1">
        <Row className="game-choose-page__content-words">
          <Col className="game-choose-page__content-singleword " span={24}>
            Слово 1 
          </Col>
          <Col  className="game-choose-page__content-singleword " span={24}>
            Слово 2
          </Col>
          <Col  className="game-choose-page__content-singleword " span={24}>
            Слово 3
          </Col>
          <Col  className="game-choose-page__content-singleword " span={24}>
            Слово 4
          </Col>
          <Col  className="game-choose-page__content-singleword " span={24}>
            Слово 5
          </Col>
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
