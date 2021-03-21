import { useState, useEffect, useRef } from 'react';
import AppContext from './appContext';

const AppState = props => {

    // const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [headerRightView, setHeaderRightView] = useState(false);
    const [headerLeftView, setHeaderLeftView] = useState(false);
    // const [mobileView, setMobileView] = useState(false);

    // useEffect(() => {
    //     function handleResize() {
    //         setWindowWidth(window.innerWidth)
    //     }
    //     return () => window.removeEventListener('resize', handleResize)
    // })

    return (
        <AppContext.Provider
            value={{
                headerLeftView,
                setHeaderLeftView,
                headerRightView,
                setHeaderRightView
            }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;