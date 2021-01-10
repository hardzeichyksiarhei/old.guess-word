import React from "react";

import { useDispatch } from "react-redux";

import * as gameActions from "../../store/actions/game";

import { Col } from "antd";

import "./style.scss"

const CategoryItem = (props) => {
  const dispatch = useDispatch();

  const handleClickCategory = (category) => {
    dispatch(gameActions.setCategory(category));
  };

  return (
    <Col 
        span={props.category.slug === 'all' ? 24 : 12} 
        className="category-item gutter-row"
    >  
      <img
        className="category-item__image img-fluid"
        src={`./img/categories/${props.category.image}.jpg`}
        alt=""
      />
    <h3
        className="category-item_title"
        onClick={() => handleClickCategory(props.category)}
        key={props.category.id}
      >
        {props.category.label}
      </h3>
    </Col>
  );
};

export default CategoryItem;
