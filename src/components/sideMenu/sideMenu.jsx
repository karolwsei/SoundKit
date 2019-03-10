import React from 'react'
import * as Sounds from '../../helpers/sounds'

const SideMenuView = () => {
    return (
        <div style = { styles.container } >

            <article style = { styles.header } >Samples</article>

            <Sounds.boom />
            <Sounds.clap />
            <Sounds.hihat />
            <Sounds.kick />
            <Sounds.openhat />
            <Sounds.ride />
            <Sounds.snare />
            <Sounds.tink />
            <Sounds.tom />
        
        </div>)
}

const styles = {
    container: {
        width: '30%',
        height: '100%',
        backgroundColor: '#C5C1C0',
        borderRight: '2px solid black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        color: 'white',
        fontFamily: 'Permanent Marker',
        fontSize: '48px',
        textShadow: '4px 4px 2px black'
    }
}

export default SideMenuView