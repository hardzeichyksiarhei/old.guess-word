import React from 'react'
import { Link } from 'react-router-dom';

import './button.sass'

const Button = ({text, path}) => {
    return (
        <Link to={path} className='button'> {text} </Link>
    )
}

export default Button