import React from 'react'
import IconButton from './IconButton'

import { faWallet } from '@fortawesome/free-solid-svg-icons'

import { action } from '@storybook/addon-actions'

export default {
    title: 'IconButton',
    component: IconButton
}

export const DefaultIconButton = () => (
    <IconButton 
        icon={ faWallet } 
        title='아이콘 버튼'
        onClick={ action('a') }
    />
)

export const BlockIconButton = () => (
    <IconButton 
        icon={ faWallet } 
        title='아이콘 버튼'
        onClick={ action('a') }
        block
    />
)

export const SquaredIconButton = () => (
    <IconButton 
        icon={ faWallet } 
        title='아이콘 버튼'
        onClick={ action('a') }
        squared
    />
)

export const SquaredBlockIconButton = () => (
    <IconButton 
        icon={ faWallet } 
        title='아이콘 버튼'
        onClick={ action('a') }
        block
        squared
    />
)