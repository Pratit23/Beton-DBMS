import React from 'react'

const stateMachine = {
    initial: 'initial',
    states : {
        initial: { on: { next: 'ready'} },
        ready: { on: { next: 'classifying'}, showImage: true},
        classifying: { on: { next: 'complete'} },
        complete: { on: { next: 'awaitingUpload'}, showImage: true},
    }
}

const reducer = (currentState, e) => stateMachine.states[currentState].on[e] || stateMachine.initial

export { stateMachine, reducer }