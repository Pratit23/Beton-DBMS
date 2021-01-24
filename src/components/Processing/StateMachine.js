import React from 'react'

const stateMachine = {
    initial: 'initial',
    states : {
        initial: { on: { next: 'ready'} },
        ready: { on: { next: 'classifying'}},
        classifying: { on: { next: 'location'} },
        details: { on: { next: 'location'} },
        location: { on: { next: 'complete'} },
        complete: { on: { next: 'awaitingUpload'}},
    }
}

const reducer = (currentState, e) => stateMachine.states[currentState].on[e] || stateMachine.initial

export { stateMachine, reducer }