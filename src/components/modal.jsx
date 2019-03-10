import React from 'react'
import Radium from 'radium'
import PlayCircle from '@material-ui/icons/PlayCircleOutline'
import PauseCircle from '@material-ui/icons/PauseCircleOutline'
import Replay from '@material-ui/icons/Replay'
import Record from '@material-ui/icons/MicNone'
import HelpCircle from '@material-ui/icons/HelpOutline'
import Delete from '@material-ui/icons/DeleteOutline'
import Scrollbars from 'react-custom-scrollbars'

const ModalView = ( props ) => { 
    return (
        <div style = { [ styles.container, props.isActive ? styles.visible : styles.hidden ] } >
            
            <div style = { styles.modal } >
            
                <Scrollbars renderTrackVertical = { () => <div style = { styles.track } /> } 
                        renderThumbVertical = { () => <div style = { styles.thumb } />} 
                        renderTrackHorizontal={ () => <div  style = {{ display: 'none' }} /> } >

                    <article style = { styles.button } onClick = { () => props.handleClick() }>&times;</article>

                    <div style = { styles.info } > 

                        <article style = { styles.header } > POMOC <HelpCircle style = { styles.icon } /></article>

                        <article style = { styles.header } ><PlayCircle style = { styles.icon } />- Odtwarzanie nagranego dźwięku </article>
                        <article style = { styles.header } ><PauseCircle style = { styles.icon } /> - Przerwanie odtwarzanego dźwięku </article>
                        <article style = { styles.header } ><Replay style = { styles.icon } /> - Powtarzanie nagranego dźwięku </article>
                        <article style = { styles.header } ><Record style = { styles.icon } /> - Nagrywanie dźwięku </article>
                        <article style = { styles.header } ><Delete style = { styles.icon } /> - Wyczyszczenie zapisanej melodii </article>
                        <article style = { styles.header } > Kanały od 1 do 4 służą do wybierania aktualnego kanału do nagrywania dźwięku </article>
                        <article style = { styles.header } > Dźwięk można nagrywać przez naciskanie kontrolerów z lewej strony lub poprzez przyciski od a,s,d,f,g,h,j,k,l </article>

                        <article style = { styles.header } > Domyślnie nagrywanie jest wyłączone. Są 4 kanały do nagrywania. Można odtwarzać i nagrywać jednocześnie. Kolorem zielonym są przedstawione aktualnie
                        aktywne przyciski, czerwonym - nieaktywne. Podczas nagrywania, w każdym z kanałów pojawi się nagrany dźwięk w postaci bloku z nazwą i czasem kiedy został nagrany od rozpoczęcia nagrywania. </article>

                    </div>

                </Scrollbars>

            </div>
            
        </div>)
}

const styles = {
    container: {
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10
    },
    modal: {
        height: '80%',
        width: '80%',
        backgroundColor: '#1A2930',
        margin: 'auto',
        outline: '4px solid black',
        boxSizing: 'box-content',
        overflowY: 'auto',
        overflowX: 'hidden'
    },
    button: {
        color: 'white',
        fontSize: '48px',
        float: 'right',
        cursor: 'pointer',
        ':hover': {
            color: 'black'
        }
    },
    info: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 15
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Karla',
        color: '#C5C1C0',
        margin: 15
    },
    icon: {
        color: '#F7CE3E'
    },
    visible: {
        visibility: 'visible'
    },
    hidden: {
        visibility: 'hidden'
    },
    thumb: { 
        backgroundColor: '#F7CE3E',
        width: 10, 
        height: '100%'
    },
    track: {
        bottom: 0, 
        left: 0, 
        position:'absolute',
        zIndex: 1, 
        backgroundColor: '#1A2930', 
        width: 10, 
        height: '100%'
    }
}

export default Radium(ModalView)