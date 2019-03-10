import React from 'react'

const TopBarMobile = () => {
    return (

        <div style = { styles.container } >

            <article style = { styles.header } >Drum Kit</article>
            
        </div>)
}

const styles = {
    container: {
        width: '100%',
        height: '10%',
        backgroundColor: '#0A1612',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        outline: '2px solid black'
    },
    header: {
        color: 'white',
        fontFamily: 'Permanent Marker',
        fontSize: '5vh',
        textShadow: '4px 4px 2px black'
    }
}

export default TopBarMobile