import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as gameActions from "../../store/actions/game";

import "./style.scss";

const CategoryItem = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleClickCategory = () => {
    dispatch(gameActions.setCategory(props.category));
    navigate('/game-start')
  };

  return (
    <div className="category-item" onClick={handleClickCategory}>
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
    </div>
  );
};

export default CategoryItem;
