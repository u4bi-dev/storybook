import React from 'react'
import styled from '@emotion/styled'

interface IContainerProps {
    block?: boolean,
    squared?: boolean
}

const Container = styled.button<IContainerProps>`

    width: ${ ({ block }) => block ? '100%' : 'fit-content' };

    border-radius: ${ ({ squared }) => squared ? '0' : '4' }px;

    background-color: #e9ecef;
    border: 1px solid #e9ecef;
    cursor: pointer;
    padding: 11px 18px;
    appearance: none;
    text-decoration: none;

    font-weight: 400;
    font-size: 16px;

    &:focus {
        outline: none;
    }
`

interface IButtonProps {
    title?: string,
    children?: any,
    onClick?: any,
    block?: boolean,
    squared?: boolean
}

const Button = ({ title, children, block, squared, onClick }: IButtonProps) => (
    <Container 
        block={ block } 
        squared={ squared } 
        onClick={ onClick }
    >
        { title }{ children }
    </Container>
)

export default Button
