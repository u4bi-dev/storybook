import React from 'react'
import styled from '@emotion/styled'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

const Container = styled(FontAwesomeIcon)<FontAwesomeIconProps>`

`

interface IButtonProps {
    icon: IconProp
}

const Icon = ({ icon }: IButtonProps) => (
    <Container icon={ icon }/>
)

export default Icon