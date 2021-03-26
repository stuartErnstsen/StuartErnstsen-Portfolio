import { useContext, useEffect, useState } from 'react';
import AppContext from '../../Context/AppContext';
import Info from './Info/Info';
import Showcase from './Showcase/Showcase';


const Main = props => {
    const { headerRightView, headerLeftView, justLoaded } = useContext(AppContext);
    const [toggleSlideInRight, setToggleSlideInRight] = useState(false);

    useEffect(() => {
        if (headerRightView) {
            setToggleSlideInRight(true)
        }
        else if (headerLeftView) {
            setToggleSlideInRight(false)
        }
    }, [headerLeftView, headerRightView])

    return (
        <main className={`${headerLeftView ? 'main-info slide-in-left' : headerRightView ? 'main-showcase slide-in-right' : ''}`}>
            {headerLeftView && <Info />}
            {headerRightView && <Showcase />}
        </main>
    )
}

export default Main;