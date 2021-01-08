import React from 'react'
import './button.sass'

const Button = ({text}) => {
    return (
        <div className='button'>
            {text}
        </div>
    )
}

export default Button