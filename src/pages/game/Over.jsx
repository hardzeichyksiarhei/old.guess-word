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

        <div className="game-over-page__content text-center py-1">
            <h3>
                Выходит на поле пользователь 
            </h3>

            <h1 className="py-1 text-uppercase">
                <strong>
                    user1
                </strong>
            </h1>
        </div>

      <ButtonLink
        className="mt-2 text-uppercase"
        linkTo="/categories"
        type="primary"
        shape="round"
        block
      >
        Выхожу на поле
      </ButtonLink>
    </div>
  );
};

export default GameOver;
