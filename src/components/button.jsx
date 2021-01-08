import React from 'react'
import './button.sass'
import { Link } from 'react-router-dom';

const Button = ({text, path}) => {
    return (
        <Link to={path} className='button'>
        {text}
        </Link>
        
    )
}

export default Button