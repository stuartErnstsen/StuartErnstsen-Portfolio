import { useState, useEffect } from 'react';
import AppContext from './AppContext';

const AppState = props => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [headerRightView, setHeaderRightView] = useState(false);
    const [headerLeftView, setHeaderLeftView] = useState(false);
    const [mobileView, setMobileView] = useState(windowWidth < 800);
    const [justLoaded, setJustLoaded] = useState(true)

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth)
            if (window.innerWidth < 800) {
                setMobileView(true)
            } else if (window.innerWidth > 800) {
                setMobileView(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <AppContext.Provider
            value={{
                headerLeftView,
                setHeaderLeftView,
                headerRightView,
                setHeaderRightView,
                mobileView,
                justLoaded,
                setJustLoaded
            }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;