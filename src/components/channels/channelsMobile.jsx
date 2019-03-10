import React from 'react'
import Radium from 'radium'
import Scrollbars from 'react-custom-scrollbars'

const ChannelsMobile = ( props ) => {
    return (
    
        <div style = { styles.container } >
    
            <div style = { [ styles.channel, props.currentChannel == 'channel1' ? styles.active : styles.inactive ] } >

                <Scrollbars style = {{display: 'flex', flexDirection:'row' , zIndex: 1}} renderThumbHorizontal = { () => <div style = { styles.thumb } />}  
                renderTrackHorizontal = { () => <div style = { styles.track } />}
                >
                    <div style = { styles.wrapper }>

                        { props.channel1.map( ( sound, index ) => {
                            return (

                                <div style = { styles.sound } key = { index } >

                                    <article style = { styles.header } >Nazwa:{sound.name}</article>
                                    <article style = { styles.header } >Czas:{sound.time}</article>

                                </div>
                            )
                        })}

                    </div>

                </Scrollbars>

            </div>    

            <div style = { [ styles.channel, props.currentChannel == 'channel2' ? styles.active : styles.inactive ] } >

                <Scrollbars style = {{display: 'flex', flexDirection:'row' , zIndex: 1}} renderThumbHorizontal = { () => <div style = { styles.thumb } />}  
                renderTrackHorizontal = { () => <div style = { styles.track } />}
                >
                    <div style = { styles.wrapper }>

                        { props.channel2.map( ( sound, index ) => {
                            return (

                                <div style = { styles.sound } key = { index } >

                                    <article style = { styles.header } >Nazwa:{sound.name}</article>
                                    <article style = { styles.header } >Czas:{sound.time}</article>

                                </div>
                            )
                        })}

                    </div>

                </Scrollbars>

            </div>    

           <div style = { [ styles.channel, props.currentChannel == 'channel3' ? styles.active : styles.inactive ] } >

                <Scrollbars style = {{display: 'flex', flexDirection:'row' , zIndex: 1}} renderThumbHorizontal = { () => <div style = { styles.thumb } />}  
                renderTrackHorizontal = { () => <div style = { styles.track } />}
                >
                    <div style = { styles.wrapper }>

                        { props.channel3.map( ( sound, index ) => {
                            return (

                                <div style = { styles.sound } key = { index } >

                                    <article style = { styles.header } >Nazwa:{sound.name}</article>
                                    <article style = { styles.header } >Czas:{sound.time}</article>

                                </div>
                            )
                        })}

                    </div>

                </Scrollbars>

            </div>    

            <div style = { [ styles.channel, props.currentChannel == 'channel4' ? styles.active : styles.inactive ] } >

                <Scrollbars style = {{display: 'flex', flexDirection:'row' , zIndex: 1}} renderThumbHorizontal = { () => <div style = { styles.thumb } />}  
                renderTrackHorizontal = { () => <div style = { styles.track } />}
                >
                    <div style = { styles.wrapper }>

                        { props.channel4.map( ( sound, index ) => {
                            return (

                                <div style = { styles.sound } key = { index } >

                                    <article style = { styles.header } >Nazwa:{sound.name}</article>
                                    <article style = { styles.header } >Czas:{sound.time}</article>

                                </div>
                            )
                        })}

                    </div>

                </Scrollbars>

            </div>  
            

        </div>)
}

const styles = { 
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    channel: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '20%',
        marginRight: '5px',
        overflow: 'auto',
    },
    sound: {
        outline: '2px solid black',
        backgroundColor: '#C5C1C0',
        height: '50%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '0px 5px 0px 5px',
        maxWidth: '150px',
    },
    header: {
        margin: '4px',
        fontWeight: 'bold',
        fontFamily: 'Karla',
        color: '#1A2930'
    },
    active: {
        backgroundColor: '#1A2930'
    },
    inactive: {
        backgroundColor: '#C5C1C0'
    },
    wrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
        marginRight: '5px',
    },
    thumb: { 
        backgroundColor: '#F7CE3E',
        width: '100%', 
        height: 10,
    },
    track: {
        bottom: 0, 
        left: 0, 
        position:'absolute',
        zIndex: 0, 
        backgroundColor: '#1A2930', 
        width: '100%', 
        height: 10,
    }
}

export default Radium(ChannelsMobile)