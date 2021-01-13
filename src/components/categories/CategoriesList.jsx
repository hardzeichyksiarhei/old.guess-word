import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import * as categoryActions from "../../store/actions/categories";

import categorySelectors from "../../store/selectors/categories";

import CategoryItem from "./CategoryItem";

import { Row, Col } from "antd";

import "./style.scss";

const CategoriesList = () => {
  const dispatch = useDispatch();
  const categories = useSelector(categorySelectors.categories);

  useEffect(() => {
    dispatch(categoryActions.fetchCategories());
  }, [dispatch]);

  return (
    <div className="categories-list py-2">
      <Row gutter={[16, 16]}>
        {categories.map((category) => (
          <Col
            span={category.slug === "all" ? 24 : 12}
            className="category-item gutter-row"
            key={category.id}
          >
            <CategoryItem category={category} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CategoriesList;
