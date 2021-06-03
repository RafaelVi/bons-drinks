import React from 'react'
import ButtonStyled from './Button.styles'
const Button = ({name,isGreen}) => {
    return (
        <ButtonStyled isGreen={isGreen}>{name}</ButtonStyled>
    )
}

export default Button
