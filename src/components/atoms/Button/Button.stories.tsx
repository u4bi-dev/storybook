import React from 'react'
import Button from './Button'

import { action } from '@storybook/addon-actions'

export default {
    title: 'Button',
    component: Button
}

export const DefaultButton = () => (
    <Button
        onClick={ action('a') }
        title='기본 버튼'
    />
)

export const BlockButton = () => (
    <Button
        onClick={ action('a') }
        title='블록 버튼'
        block
    />
)

export const SquaredButton = () => (
    <Button
        onClick={ action('a') }
        title='스퀘어드 버튼'
        squared
    />
)

export const SquaredBlockButton = () => (
    <Button
        onClick={ action('a') }
        title='스퀘어드 블록 버튼'
        block
        squared
    />
)