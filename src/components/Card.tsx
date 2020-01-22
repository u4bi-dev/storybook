import React from 'react'
import styled from '@emotion/styled'

import { color } from '../style/shared'

const Container = styled.div`
    width: 100%;
    background-color: ${ color.purple };
    color: ${ color.white };
    padding: 16px 32px;
`

const Title = styled.h1`
    margin: 0;
`

const Description = styled.p`
    margin: 0;
    color: ${ color.white };
`

interface ICardProps {
    title: string
    description: string
}

const Card = ({ title, description }: ICardProps) => (
    <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
    </Container>
)

export default Card
