import React from 'react'
import Radium from 'radium'
import PlayCircle from '@material-ui/icons/PlayCircleOutline'
import PauseCircle from '@material-ui/icons/PauseCircleOutline'
import HelpCircle from '@material-ui/icons/HelpOutline'
import Delete from '@material-ui/icons/DeleteOutline'
import Replay from '@material-ui/icons/Replay'
import Record from '@material-ui/icons/MicNone'

const BottomBarView = ( props ) => {
    return (
    
    <div style = { styles.container } >

        <div>
            <Record style = { props.isRec ? styles.activeIcon : styles.disabledIcon } onClick = { () => props.handleRec() } />
            <PlayCircle style = { props.isPlay ? styles.activeIcon : styles.disabledIcon } onClick = { () => props.handlePlay('play') } />
            <PauseCircle style = { props.isPlay ? styles.disabledIcon : styles.activeIcon } onClick = { () => props.handlePlay('pause') } />
            <Replay style = { props.repeat ? styles.activeIcon : styles.disabledIcon } onClick = { () => props.handleRepeat() }/>
            <HelpCircle style = { styles.icon } onClick = { () => props.handleClick() } />
            <Delete style = { styles.icon } onClick = { () => props.clear() } />
        </div>

        <div>
            <button style = { [ styles.button, props.currentChannel == 'channel1' ? styles.activeButton : styles.disabledButton ] } 
                onClick = { () => props.setChannel('channel1')} >Kanał 1</button>
            <button style = { [ styles.button, props.currentChannel == 'channel2' ? styles.activeButton : styles.disabledButton ] } 
                onClick = { () => props.setChannel('channel2')} >Kanał 2</button>
            <button style = { [ styles.button, props.currentChannel == 'channel3' ? styles.activeButton : styles.disabledButton ] } 
                onClick = { () => props.setChannel('channel3')} >Kanał 3</button>
            <button style = { [ styles.button, props.currentChannel == 'channel4' ? styles.activeButton : styles.disabledButton ] } 
                onClick = { () => props.setChannel('channel4')} >Kanał 4</button>
        </div>
        
    </div>)
}

const styles = {
    container: {
        width: '100%',
        height: '10%',
        backgroundColor: '#C5C1C0',
        borderTop: '2px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    activeButton: {
        backgroundColor: '#1A2930',
        color: '#C5C1C0',
        border: '2px solid #0A1612',
        outline: 'none'
    },
    disabledButton: {
        backgroundColor: '#C5C1C0',
        border: 'none',
        outline: 'none'
    },
    button: {
        cursor: 'pointer',
        margin: 5,
        fontWeight: 'bold',
    },
    icon: {
        cursor: 'pointer',
        margin: 5,
        fontWeight: 'bold',
        color: '#F7CE3E'
    },
    activeIcon: {
        cursor: 'pointer',
        color: 'green',
        margin: 5
    },
    disabledIcon: {
        cursor: 'pointer',
        color: 'red',
        margin: 5
    }
}

export default Radium(BottomBarView)