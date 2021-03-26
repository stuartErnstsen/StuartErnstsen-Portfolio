import { useContext, useEffect, useState } from 'react';
import AppContext from '../../Context/AppContext';
import Info from './Info/Info';
import Showcase from './Showcase/Showcase';


const Main = props => {
    const { headerRightView, headerLeftView, justLoaded } = useContext(AppContext);
    const [toggleSlideOutRight, setToggleSlideOutRight] = useState(false);

    useEffect(() => {
        if (headerRightView) {
            setToggleSlideOutRight(true)
        }
        else if (headerLeftView) {
            setToggleSlideOutRight(false)
        }
    }, [headerLeftView, headerRightView])

    return (
        <main className={`${headerLeftView ? 'main-info slide-in-left' : headerRightView ? 'slide-in-right' : ''} ${(headerRightView || toggleSlideOutRight) && 'main-showcase'}`}>
            {headerLeftView && <Info />}
            {headerRightView && <Showcase />}
        </main>
    )
}

export default Main;