import React from 'react'
import Card from './Card'

export default {
    title: 'Card',
    component: Card
}

export const OneCard = () => (
    <Card
        title='첫번째 예제 타이틀'
        description='첫번째 예제 디스크립션입니다.'
    />
)

export const TwoCard = () => (
    <Card
        title='두번째 예제 타이틀'
        description='두번째 예제 디스크립션입니다.'
    />
)
