import { useState, useEffect } from 'react';
import AppContext from './appContext';

const AppState = props => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [headerRightView, setHeaderRightView] = useState(false);
    const [headerLeftView, setHeaderLeftView] = useState(false);
    const [mobileView, setMobileView] = useState(windowWidth < 800);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth)
            if (window.innerWidth < 800) {
                setMobileView(true)
            } else if (window.innerWidth > 800) {
                setMobileView(false)
            }
        }
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <AppContext.Provider
            value={{
                headerLeftView,
                setHeaderLeftView,
                headerRightView,
                setHeaderRightView,
                mobileView
            }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;