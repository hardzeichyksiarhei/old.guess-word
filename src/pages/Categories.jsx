import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'

import * as categoryActions from '../store/actions/categories'
import * as gameActions from '../store/actions/game'
import categorySelectors from '../store/selectors/categories'

const Categories = () => {
    const dispatch = useDispatch();

    const categories = useSelector(categorySelectors.categories)


    useEffect(() => {
        dispatch(categoryActions.fetchCategories())
    }, [dispatch])

    const handleClickCategory = (category) => {
        dispatch(gameActions.setCategory(category))
    }

    return (
        <div className="categories-page">
            <h2>Categories</h2>
            <div className="categories-list">
                {categories.map(category => <h3 onClick={() => handleClickCategory(category)} key={category.id}>{ category.label }</h3>)}
            </div>
        </div>
    )
}

export default Categories
