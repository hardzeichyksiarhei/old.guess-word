import React from "react";

import ButtonLink from "../../components/ButtonLink";

import { Row, Col, Space } from "antd";

const GameRound = () => {
  return (
    <div className="game-round-page">
      <Row justify="space-between" align="center">
        <Col span={12}>
          <div className="page-title">Передайте слово</div>
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
            Объясните слово использую предложенную букву      
        </div>

        <div className="game-round-page__content text-center py-1">
           <div className="">
              <p>Ваше слово</p>
           </div>
           <div>
              <h1 className="game-round-page__content-word">
                Очень большое слово
              </h1>
           </div>
           <div className="">
              <p>
                Ваша буква
              </p>
           </div>
           <div>
              <h1 className="game-round-page__content-letter">
                M
              </h1>
           </div>
           <div className="">
             <h1>
              Секундант
             </h1>
           </div>
        </div>

      <ButtonLink
        className="mt-2 text-uppercase"
        linkTo="/game-over"
        type="primary"
        shape="round"
        block
      >
        Угадали
      </ButtonLink>

      <ButtonLink
        className="mt-2 text-black text-uppercase" 
        linkTo="/game-over"
        type="link"
        shape="round"
        block
      >
        Не угадали
      </ButtonLink>
    </div>
  );
};

export default GameRound;
