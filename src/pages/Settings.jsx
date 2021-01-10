import React from "react";

import ButtonLink from "../components/ButtonLink"

import PlayersList from "../components/players/PlayersList";
import { Row, Col } from 'antd';


const Settings = () => {
  return (
    <div className="settings-page">
      <Row justify="space-between" align="center">
        <Col span={12} >
          <div className="page-title">Раздевалка</div>
        </Col>
        <Col span={6}>
          <ButtonLink
            className="text-uppercase"
            linkTo="/rules"
            type="primary"
            shape="round"
            size="small"
          >
            Правила
          </ButtonLink>
        </Col>
      </Row>
     
      
      <div className="page-description">Настройка пользователей</div>
      <div className="page-content">
        <PlayersList />

        <ButtonLink
          className="mt-2 text-uppercase"
          linkTo="/categories"
          type="primary"
          shape="round"
          block
        >
          Далее
        </ButtonLink>
      </div>
    </div>
  );
};

export default Settings;
