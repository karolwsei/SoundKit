import React from 'react'
import TopBar from '../components/topBar/topBar'
import TopBarMobile from '../components/topBar/topBarMobile'
import SideMenuView from '../components/sideMenu/sideMenu'
import SideMenuMobile from '../components/sideMenu/sideMenuMobile'
import BottomBarView from '../components/bottomBar'
import ChannelsView from '../components/channels/channels'
import ChannelsMobile from '../components/channels/channelsMobile'
import Keys from '../helpers/soundsKeys'
import Modal from './modal'
import Media from 'react-media'

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.timeouts = []
        this.modal = React.createRef()
        this.state = {
            isRec: false,
            isPlay: false,
            recTimeStart: 0,
            playTime: 0,
            channel1: [],
            channel2: [],
            channel3: [],
            channel4: [],
            repeat: false,
            currentChannel: 'channel1',
        }
    }

    componentDidMount(){
        document.addEventListener("keypress", () => this.handlePress( event ) , false);
    }

    clear = () => {
        this.setState({
            channel1: [],
            channel2: [],
            channel3: [],
            channel4: [],
        })
    }

    handlePress = ( event ) => {
        let channel = this.state.currentChannel;
        if ( Object.keys( Keys ).indexOf( event.key ) > -1 ){
            document.querySelector(`#${ Keys[event.key] }`).currentTime = 0
            document.querySelector(`#${ Keys[event.key] }`).play()
            if( this.state.isRec ){
                this.setState( prevState => ({
                    [channel]: [ ...prevState[channel], { name: Keys[event.key], time: Date.now() - this.state.recTimeStart } ]
                }))
            }
        }
    }

    handleRec = () => {
        this.setState({
            isRec: !this.state.isRec,
            recTimeStart: Date.now()
        })
    }

    playMusic = () => {
        if ( this.state.channel1.length > 0 || this.state.channel2.length > 0 || this.state.channel3.length > 0 || this.state.channel4.length > 0 ){
            for( let x = 1; x <= 4; x++ ) {
                this.state[`channel${x}`].forEach( sound => {
                        this.timeouts.push(setTimeout( () => {            
                            const audio = document.querySelector(`#${sound.name}`)
                            audio.currentTime = 0
                            audio.play()
                        }, sound.time)) 
            })}

            this.state.repeat ? 
                this.timeouts.push( setTimeout( () => { this.playMusic() }, (this.timeouts.pop() + 2000) )) : 
                this.timeouts.push( setTimeout( () => { this.handlePlay('pause') }, (this.timeouts.pop() + 2000) ))
            
        } else {
            this.setState({
                isPlay: false
            })
        }
    }

    handleRepeat = () => {
        this.setState({
            repeat: !this.state.repeat
        })
    }

    handlePlay = ( target ) => {
        ( target == 'play' && !this.state.isPlay ) ? ( this.setState({ isPlay: true }), this.playMusic() ) : null;
        ( target == 'pause' && this.state.isPlay ) ? ( this.setState({ isPlay: false }), this.timeouts.forEach( timeout => clearTimeout( timeout ), this.timeouts = [] )): null;
    }

    setChannel = ( channelNumber ) => {
        this.setState({
            currentChannel: channelNumber
        })
    }

    render(){
        return (
        <div style = { styles.container } >
            <Modal ref = { this.modal } />

            <Media query = '(max-width: 800px)' >
            
                { matches => matches ? <TopBarMobile /> : <TopBar /> }
            
            </Media>

            <Media query = '(max-width: 800px)' >

                { matches => matches ? (
                    <div style = { styles.wrapperMobile } >
                        <SideMenuMobile />
                        <ChannelsMobile {...this.state} />
                    </div>) : (
                    <div style = { styles.wrapper } >
                        <SideMenuView />
                        <ChannelsView {...this.state} />
                    </div>
                )}

            </Media>
            
            <BottomBarView { ...this.state } 
                setChannel = { this.setChannel } 
                handleRec = { this.handleRec } 
                handlePlay = { this.handlePlay } 
                handleRepeat = { this.handleRepeat }
                handleClick = { () => this.modal.current.handleClick() } 
                clear = { this.clear } />

        </div>
        )
    }
}

const styles = {
    container: {
        position: 'relative',
        width: '100%',
        height: '100%'
    },
    wrapper: {
        width: '100%',
        height: '80%',
        display: 'flex'
    },
    wrapperMobile: {
        width: '100%',
        height: '80%',
        display: 'flex',
        flexDirection: 'column'
    }
}