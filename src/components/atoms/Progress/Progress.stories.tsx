import React from 'react'
import Progress from './Progress'

export default {
    title: 'Bootstrap/Progress',
    component: Progress
}

export const DefaultProgress30 = () => (
    <Progress 
        now={ 30 }
        min={ 0 }
        max={ 100 } />
)

export const DefaultProgress50 = () => (
    <Progress 
        now={ 50 }
        min={ 0 }
        max={ 100 } />
)

export const DefaultProgress70 = () => (
    <Progress 
        now={ 70 }
        min={ 0 }
        max={ 100 } />
)

export const StripedProgress = () => (
    <Progress 
        now={ 70 }
        min={ 0 }
        max={ 100 }
        striped />
)