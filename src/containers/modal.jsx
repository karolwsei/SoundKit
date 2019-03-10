import React from 'react'
import ModalView from '../components/modal'

export default class Modal extends React.Component {
    constructor( props ){
        super(props)
        this.audio = document.getElementsByTagName('audio')
        this.state = {
            isActive: false
        }
    }

    hideAudio = ( bool ) => {
        for ( let item of this.audio ){
            item.hidden = bool
        }
    }

    handleClick = () => {
        this.state.isActive ? this.hideAudio( false ) : this.hideAudio( true )
        this.setState({ isActive: !this.state.isActive })
    }

    render() {
        return <ModalView { ...this.state } handleClick = { this.handleClick } />
    }
}
