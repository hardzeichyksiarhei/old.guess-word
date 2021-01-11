import React from "react";

import ButtonLink from "../../components/ButtonLink";

import { Row, Col, Space } from "antd";

const GameOver = () => {
  return (
    <div className="game-over-page">
      <Row justify="space-between" align="center">
        <Col span={12}>
          <div className="page-title">Финал</div>
        </Col>
      </Row>

      <div className="game-over-page__content text-center py-1">
        <h3>Победил игрок</h3>

        <Row justify="center">
          <Col span={12}>
            <h1 className="py-1 text-uppercase game-over-page__content-winner">
              <strong>user1</strong>
            </h1>
          </Col>
        </Row>

        <p className="font-weigth-light">
          Статистика игроков за десять раундов
        </p>

        <Row className="font-weigth-light" justify="center">
          <Col span={3}>
            <img src="./img/pages/fxemoji_sportsmedal.svg" alt="Medal icon" />
          </Col>
          <Col span={9}>Игрок</Col>
          <Col span={6}>Общее время</Col>
          <Col span={6}>Баллы</Col>
        </Row>

        <Row className="font-weigth-bold" justify="center">
          <Col span={3}>1</Col>
          <Col span={9} className="text-left game-over-page__content_username">
            User 1
          </Col>
          <Col span={6}>12м</Col>
          <Col span={6}>12</Col>
        </Row>

        <Row className="font-weigth-bold " justify="center">
          <Col span={3}>2</Col>
          <Col span={9} className="text-left game-over-page__content_username">
            Super very Big user
          </Col>
          <Col span={6}>25м</Col>
          <Col span={6}>8</Col>
        </Row>

        <Row className="font-weigth-bold" justify="center">
          <Col span={3}>3</Col>
          <Col span={9} className="text-left game-over-page__content_username">
            Big User{" "}
          </Col>
          <Col span={6}>32м</Col>
          <Col span={6}>9</Col>
        </Row>

        <Row className="font-weigth-bold" justify="center">
          <Col span={3}>4</Col>
          <Col span={9} className="text-left game-over-page__content_username">
            User 12
          </Col>
          <Col span={6}>59м</Col>
          <Col span={6}>7</Col>
        </Row>
      </div>

      <ButtonLink
        className="mt-2 text-uppercase"
        linkTo="/categories"
        type="primary"
        shape="round"
        block
      >
        Еще матч!{" "}
      </ButtonLink>

      <ButtonLink
        className="mt-2 text-black text-uppercase"
        linkTo="/settings"
        type="link"
        shape="round"
        block
      >
        Главное меню{" "}
      </ButtonLink>
    </div>
  );
};

export default GameOver;
