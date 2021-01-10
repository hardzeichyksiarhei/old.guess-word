import React from "react";
import CategoriesList from "../components/categories/CategoriesList";

import ButtonLink from "../components/ButtonLink"

import { Row, Col } from "antd";


const Categories = () => {

  return (
    <div className="categories-page">
      <Row justify="space-between" align="center">
        <Col span={12}>
          <div className="page-title">Тематика</div>
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

      <CategoriesList />

      <ButtonLink
          className="mt-2 text-uppercase"
          linkTo="/game-start"
          type="primary"
          shape="round"
          block
        >
          Далее
        </ButtonLink>

    </div>
  );
};

export default Categories;
