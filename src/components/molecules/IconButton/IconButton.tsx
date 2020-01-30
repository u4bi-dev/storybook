import React from 'react'
import styled from '@emotion/styled'

import Button from '../../atoms/Button/Button'
import Icon from '../../atoms/Icon/Icon'

import { IconProp } from '@fortawesome/fontawesome-svg-core'

const Title = styled.span`
    padding-left: 8px;
`

interface IIconButtonProps {
    icon: IconProp,
    title?: string,
    onClick?: any,
    block?: boolean,
    squared?: boolean
}

const IconButton = ({ icon, title, onClick, block, squared }: IIconButtonProps) => (
    <Button onClick={ onClick } block={ block } squared={ squared }>
        <Icon icon={ icon } />
        <Title>
            { title }
        </Title>
    </Button>
)

export default IconButton