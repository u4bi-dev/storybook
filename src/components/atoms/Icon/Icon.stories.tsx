import React from 'react'
import Icon from './Icon'

import { faTimes, faWallet } from '@fortawesome/free-solid-svg-icons'

export default {
    title: 'Icon',
    component: Icon
}

export const IconTimes = () => (
    <Icon
        icon={ faTimes }
    />
)

export const IconWallet = () => (
    <Icon
        icon={ faWallet }
    />
)